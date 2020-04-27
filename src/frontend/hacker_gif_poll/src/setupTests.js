import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme
// to find out which matchers to use
import 'jest-enzyme';

configure({ adapter: new Adapter() });

// throw all warnings/errors to force broken build
const util = require('util');

const throwMessage = (err, ...args) => {
  throw err instanceof Error ? err : util.format(err, ...args);
};

global.console.warn = throwMessage;
global.console.error = throwMessage;
