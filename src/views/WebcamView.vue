<template>
  <div>
    <Webcam></Webcam>
    <a-modal
      v-model:open="open"
      title="Enter your height and weight"
      @cancel="handleCancel"
      :maskClosable="false"
      :width="600"
      :okButtonProps="{ hidden: true }"
      :cancelButtonProps="{ hidden: true }"
      :footer="null"
    >
      <a-form
        ref="formRef"
        id="info_form"
        name="info_form"
        layout="vertical"
        autocomplete="off"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
        :model="formState"
      >
        <a-form-item
          name="Name"
          :rules="[requiredRule('Name', 'blur', 'string', false, true)]"
        >
          <label for="info_form_Name" class="font-medium inline-block my-1">
            Name <span class="text-red-500">*</span>
          </label>
          <a-input
            v-model:value="formState.Name"
            placeholder="Enter your name"
          />
        </a-form-item>

        <a-form-item
          name="Weight"
          :rules="[
            requiredRule('Weight', 'blur', 'string', false, true),
            requiredNumber('Weight', 'blur'),
          ]"
        >
          <label for="info_form_Weight" class="font-medium inline-block my-1">
            Weight (kg)<span class="text-red-500">*</span>
          </label>
          <a-input
            v-model:value="formState.Weight"
            placeholder="Enter your weight"
          />
        </a-form-item>

        <a-form-item
          name="Height"
          :rules="[
            requiredRule('Height', 'blur', 'string', false, true),
            requiredNumber('Height', 'blur'),
          ]"
        >
          <label for="info_form_Height" class="font-medium inline-block my-1">
            Height (cm)<span class="text-red-500">*</span>
          </label>
          <a-input
            v-model:value="formState.Height"
            placeholder="Enter your height"
          />
        </a-form-item>

        <a-form-item>
          <div class="flex items-center justify-end">
            <a-button type="primary" html-type="submit"> Confirm </a-button>

            <a-button class="ml-3" @click="handleCancel"> Cancel </a-button>
          </div>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { message } from 'ant-design-vue';
import { useRouter } from 'vue-router';

import Webcam from '@/components/webcam/Webcam.vue';
import { requiredNumber, requiredRule } from '@/utils';
import { InputInfoUser } from '@/types';
import { infoUserStore } from '@/stores';

const router = useRouter();
const open = ref<boolean>(true);

const formState = reactive<InputInfoUser>({
  Name: '',
  Weight: '',
  Height: '',
});
const formRef = ref();

const resetModal = () => {
  formState.Name = '';
  formState.Weight = '';
  formState.Height = '';
  if (formRef.value) {
    (formRef.value as any).clearValidate();
  }
};

const handleCancel = () => {
  router.push({ name: 'home' });
  resetModal();
  console.log('Close Modal');
};

const onFinish = (values: any) => {
  // message.success('', 3);
  open.value = false;
  infoUserStore().setInfoUser(values);
  // console.log(formState);
  resetModal();
  // console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  message.error('Info invalid', 3);
  console.log('Failed:', errorInfo);
};
</script>

<style lang=""></style>
