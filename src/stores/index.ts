import { types, Instance, flow } from 'mobx-state-tree';
import { Auth } from './models/Auth';
import { Common } from './models/Common';

export const Store = types
  .model('Store', {
    auth: Auth,
    common: Common
  })
  .actions(self => ({
    hydrate: flow(function* () {
      yield self.auth.hydrate();
      yield self.common.hydrate();
    })
  }))
  .create({
    auth: {},
    common: {}
  });

if (__DEV__) {
  const { connectReduxDevtools } = require('mst-middlewares');
  connectReduxDevtools(require('remotedev'), Store);
}

export type IStore = Instance<typeof Store>;

export { default as injectStores } from 'utils/injectStores';
export * from './models/Auth';