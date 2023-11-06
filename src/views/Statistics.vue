<template>
  <div class="py-4 px-8">
    <div class="text-center">Predict Body | Customer's details</div>
    <!-- User Info -->
    <div class="font-semibold text-lg my-3">User's information</div>
    <div class="flex items-center justify-item flex-wrap p-4 bg-slate-100 mb-8">
      <div v-for="(value, key) of formInfo" class="w-1/2 lg:w-1/3">
        <div>{{ key }}</div>
        <div class="mb-5 font-semibold">{{ value }}</div>
      </div>
    </div>

    <!-- User Measurements -->
    <div class="font-semibold text-lg my-3">User's measurements</div>

    <!-- Data not ready -->
    <div v-if="!arrDataMeasurement" class="text-center">Loading data...</div>

    <div v-else class="flex item-center justify-center flex-wrap">
      <div
        v-for="(dataMeasurement, indexData) in arrDataMeasurement"
        :key="indexData"
        class="w-full px-2 mb-4"
      >
        <div class="mb-3 font-semibold bg-slate-100">
          {{ dataMeasurement.type }}
        </div>
        <div class="flex flex-wrap">
          <div
            v-for="(measurement, index) in dataMeasurement.statistics"
            :key="index"
            class="flex items-center justify-between w-full lg:w-1/2 lg:pr-20 mb-4"
          >
            <div class="w-3/5 pr-3 limited-line-1">{{ measurement.title }}</div>
            <div class="w-2/5 font-semibold text-right">
              {{ measurement.value }} cm
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { UserInformation, DataMeasurement } from '@/types';
import { dataMeasurementStore, infoUserStore } from '@/stores';

const arrDataMeasurement = ref<DataMeasurement[]>();
onMounted(async () => {
  // await dataMeasurementStore().fetchDataMeasurement();
  arrDataMeasurement.value = dataMeasurementStore().dataMeasurement;
  // console.log(arrDataMeasurement.value);
});

const formInfo = ref<UserInformation>({
  Name: 'Name user',
  'Phone Number': '---',
  Email: '---',
  Height: '180 cm',
  Weight: '70 kg',
  Gender: '---',
});

formInfo.value = { ...formInfo.value, ...infoUserStore().infoUser };
</script>

<style lang=""></style>
