/*
 *  Creates a string and formats it accordingly.
 *  Created On 21 August 2021
 */

import emoji from './variables/emoji'
import module from './variables/module'
import system from './variables/system'
import time from './variables/time'

const render = (segments: string[]): string =>
    segments
        // join the array into a string
        .join(' ')

        // cut any beginning or trailing spaces
        .trim()

        // collapse multiple consecutive spaces into one
        .replace(/  +/g, ' ')

export default (ctx: any, config: any): string =>
    render(
        [
            time(ctx, config),
            system(ctx, config),
            module(ctx, config),
            emoji(ctx, config),
        ].map(segments => render(segments)),
    ).concat('\n')
