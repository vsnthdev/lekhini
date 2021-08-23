/*
 *  Creates a string and formats it accordingly.
 *  Created On 21 August 2021
 */

import data from './variables/data'
import emoji from './variables/emoji'
import module from './variables/module'
import msg from './variables/msg'
import system from './variables/system'
import time from './variables/time'
import type from './variables/type'

const render = (segments: string[]): string =>
    segments
        // join the array into a string
        .join(' ')

        // collapse multiple consecutive spaces into one
        .replace(/  +/g, ' ')

export default (ctx: any, config: any): string =>
    render(
        [
            time(ctx, config),
            system(ctx, config),
            module(ctx, config),
            emoji(ctx, config),
            type(ctx, config),
            msg(ctx, config),
            data(ctx, config),
        ].map(segments => render(segments)),
    ).concat('\n')
