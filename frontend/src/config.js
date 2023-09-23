/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

// All your imports required for the config here BEFORE this line
import { NumbersView, NumbersEdit } from './components/index';

import heroSVG from '@plone/volto/icons/hero.svg';

export default function applyConfig(config) {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
  };
  config.blocks.blocksConfig.numbers = {
    id: 'numbers',
    title: 'Numbers',
    icon: heroSVG,
    group: 'common',
    view: NumbersView,
    edit: NumbersEdit,
    restricted: false,
    mostUsed: false,
    sidebarTab: false,
    blockHasOwnFocusManagement: false,
  };
  return config;
}
