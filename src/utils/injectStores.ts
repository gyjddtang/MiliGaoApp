import { inject } from 'mobx-react/native';

export default (...storeNames: string[]) =>
  inject(({ store }) => {
    return (
      storeNames.reduce(
        (s, name) => {
          return {
            ...s,
            [name]: store[name]
          }
        },
        {}
      )
    )
  });