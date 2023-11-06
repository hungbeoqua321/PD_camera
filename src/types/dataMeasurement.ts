export interface Measurement {
  title: string;
  value: number;
}

export interface DataMeasurement {
  type: string;
  statistics: Measurement[];
}
