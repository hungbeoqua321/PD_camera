import { defineStore } from 'pinia';

import { UserInformation } from '@/types';

export const infoUserStore = defineStore('info-user', {
  state: () => ({
    infoUser: {} as UserInformation,
  }),
  getters: {},
  actions: {
    setInfoUser(infoUserParam: UserInformation) {
      this.infoUser = { ...this.infoUser, ...infoUserParam };
    },
  },
});
