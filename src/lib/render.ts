/*
 *  Creates a string and formats it accordingly.
 *  Created On 21 August 2021
 */

import time from './variables/time'
import system from './variables/system'
import { ColorsImpl } from './colors';

export interface ArgsImpl {
    config: any
    ctx: any
    colors: ColorsImpl
}

export default ({config, ctx, colors}: ArgsImpl): string => [
    time({config, ctx, colors}),
    system({ config, ctx, colors}),
    '\n'
].join(' ')