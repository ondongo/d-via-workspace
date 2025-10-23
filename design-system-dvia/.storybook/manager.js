import { addons } from 'storybook/manager-api';
import dviatheme from './dviatheme';
 
addons.setConfig({
  theme: dviatheme,
});