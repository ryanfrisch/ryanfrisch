// set up linzi's custom icons
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import icoMoonConfig from './config.json';

const expoAssetId = require("./icomoon.ttf");
export default LinzIcons = createIconSetFromIcoMoon(icoMoonConfig, 'LinzIcons', expoAssetId);