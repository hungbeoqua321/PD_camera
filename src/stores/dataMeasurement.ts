import { defineStore } from 'pinia';

import { DataMeasurement } from '@/types';

import { getDataMeasurement } from '@/api';

export const dataMeasurementStore = defineStore('data-measurement', {
  state: () => ({
    dataMeasurement: [] as DataMeasurement[],
  }),
  getters: {},
  actions: {
    fetchDataMeasurement() {
      getDataMeasurement().then(
        (data: DataMeasurement[]) => (this.dataMeasurement = data),
      );
    },
    setDataMeasurement(dataMeasurementParam: DataMeasurement[]) {
      this.dataMeasurement = dataMeasurementParam;
    },
  },
});
