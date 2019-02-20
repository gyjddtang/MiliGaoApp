/**
 * Created by MiliGao on 2019-02-19.
 */
import {types, Instance, flow, applySnapshot, onSnapshot} from 'mobx-state-tree';
import {AsyncStorage} from "react-native";

export const Common = types
  .model('Common', {
    loginSta: types.optional(types.boolean, false)
  })
  .actions(self => ({
    hydrate: flow(function* () {
      const data = yield AsyncStorage.getItem(`bbb`);
      if (data) {
        applySnapshot(self, JSON.parse(data));
      }

      onSnapshot(self, (snapshot: object) => {
        AsyncStorage.setItem(`bbb`, JSON.stringify(snapshot));
      });
    }),
  }));

export type ICommon = Instance<typeof Comment>;