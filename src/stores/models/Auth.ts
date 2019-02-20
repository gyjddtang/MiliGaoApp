import { types, Instance, flow, applySnapshot, onSnapshot } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';

export const Auth = types
  .model('Auth', {
    userName: types.optional(types.string, 'miliGao')
  })
  .actions(self => ({
    hydrate: flow(function* () {
      const data = yield AsyncStorage.getItem(`aaa`);
      if (data) {
        applySnapshot(self, JSON.parse(data));
      }

      onSnapshot(self, (snapshot: object) => {
        AsyncStorage.setItem(`aaa`, JSON.stringify(snapshot));
      });
    }),
  }));

export type IAuthStore = Instance<typeof Auth>;