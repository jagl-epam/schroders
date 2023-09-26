import React, {useState} from 'react';
import {Text, TextInput, useColorScheme, View} from 'react-native';

import {getMergedPulls} from '@src/Api';
import {Button, Graph, GraphData} from '@src/Components';

import {useStyle} from './Home.styles';
import {GithubIssuesItems} from '@src/Api/Api.types';
import {monthsForLocale} from '@src/Helpers';

export function Home(): JSX.Element {
  const [repositoryOwner, setRepositoryOwner] = useState('Apple');
  const [repositoryName, setRepositoryName] = useState('Swift');
  const [graphData, setGraphData] = useState<GraphData[]>();
  const [loading, setLoading] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';
  const styles = useStyle({isDarkMode});

  const callApi = async (
    items: number,
    page: number,
    data: GithubIssuesItems[],
  ): Promise<GithubIssuesItems[]> => {
    const apiCall = await getMergedPulls(
      repositoryOwner,
      repositoryName,
      items,
      page,
    );
    const results = apiCall.pulls.total_count || 0;
    const httpStatus = apiCall.status;

    data = data.concat(apiCall.pulls.items || []);

    return results > items * page && httpStatus === 200
      ? await callApi(items, page + 1, data)
      : data;
  };

  const onPress = async (): Promise<void> => {
    setLoading(true);
    let data = monthsForLocale('short');
    let page = 1;
    const apiCall = await callApi(100, page, []);

    apiCall.forEach(item => {
      const date = new Date(item.pull_request.merged_at);
      const month = date
        .toLocaleString('default', {month: 'short'})
        .slice(0, -1);
      if (data[month]) {
        data[month]++;
      } else {
        data[month] = 1;
      }
    });

    if (apiCall.length > 0) {
      const graph = Object.keys(data).map(month => ({
        value: data[month],
        label: month,
        frontColor: '#91E3E3',
      }));
      setGraphData(graph);
    } else {
      setGraphData(undefined);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setRepositoryOwner}
          value={repositoryOwner}
          placeholder="Repository Owner"
        />
        <TextInput
          style={styles.input}
          onChangeText={setRepositoryName}
          value={repositoryName}
          placeholder="Repository Name"
        />
        <Button text="Look for data" onPress={onPress} loading={loading} />
      </View>
      <View>
        {!graphData && !loading && (
          <Text>
            Seems that nothing was returned, are you sure that the repository is
            correct?
          </Text>
        )}
      </View>
      {graphData && (
        <View style={styles.graph}>
          <Graph.Bar data={graphData} />
        </View>
      )}
    </View>
  );
}
