export interface BarProps {
  data: GraphData[];
}

export type GraphData = {
  value: number;
  label: string;
  frontColor?: string;
};

export interface TooltipProps {
  value: string;
}
