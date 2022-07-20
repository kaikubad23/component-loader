import { factory } from './factory';
import { scan } from './scan';

/**
 * Run the loader scan only for one component
 */

export const runComponent = (name, element = window.document, initAttr = 'data-nc') =>
  scan(element, `${initAttr}*="${name}"`)
    .forEach(node => setTimeout(() =>
      factory(name, node, initAttr)));
