/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CheckBoxDemo from './CheckBoxDemo';
import PickerDemo from './PickerDemo';
import DrawerNavigationDemo from './DrawerNavigationDemo';
import NetworkDemo from './NetworkDemo';
import AsyncStorageDemo from './AsyncStorageDemo';
import networkingWork from './networkingWork';
import AsyncStorageDemo2 from './AsyncStorageDemo2';

AppRegistry.registerComponent(appName, () => DrawerNavigationDemo);
