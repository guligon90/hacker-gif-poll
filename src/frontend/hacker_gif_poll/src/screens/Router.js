import BrowserProtocol from 'farce/BrowserProtocol';
import queryMiddleware from 'farce/queryMiddleware';

import { createFarceRouter, createRender, Redirect } from 'found';

import AboutRoute from './About';
import AppRoute from './App';
import HackerGifPollRoute from './HackerGifPoll';
import HomeRoute from './Home';

const routeConfig = [
  {
    ...AppRoute,
    children: [
      new Redirect({ from: AppRoute.path, to: `${HomeRoute.path}` }),
      { ...AboutRoute },
      { ...HackerGifPollRoute },
      { ...HomeRoute },
    ],
  },
];

export default createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig,
  render: createRender({}),
});
