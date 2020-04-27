import { Environment, RecordSource, Store } from 'relay-runtime';

import {
  errorMiddleware,
  perfMiddleware,
  RelayNetworkLayer,
  urlMiddleware,
} from 'react-relay-network-modern/node8';

const isDev = process.env.NODE_ENV === 'development';

const network = new RelayNetworkLayer([
  urlMiddleware({
    url: '/graphql/',
  }),
  isDev ? errorMiddleware() : null,
  isDev ? perfMiddleware() : null,
]);

const source = new RecordSource();
const store = new Store(source);

const environment = new Environment({ network, store });

export default environment;
