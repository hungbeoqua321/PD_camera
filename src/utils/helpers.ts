import { ref } from 'vue';
import { Dayjs } from 'dayjs';

export const extend = Object.assign;

// Add zero
export const addZero = (number: number) => {
  return number < 10 ? '0' + number : number;
};

// Dayjs
export const getDate = (date: Dayjs) => {
  return date.format('YYYY-MM-DD');
};
export const getTime = (time: Dayjs) => {
  return time.format('HH:mm');
};

// Check device
export const isDesktop = ref<boolean>(window.innerWidth >= 1024);

// Size of device
export const deviceWidth = window.innerWidth;
export const deviceHeight = window.innerHeight;

// convert base64 -> blob
export const dataURItoBlob = (dataURI: any) => {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ab], { type: mimeString });
};

export const base64ToArrayBuffer = (base64: any) => {
  try {
    const decodedString = window.atob(base64);
    // Tiếp tục xử lý decodedString nếu giải mã thành công
    return decodedString;
  } catch (error) {
    console.error('Error decoding base64:', error);
    // Xử lý lỗi tại đây
    return null;
  }
};
