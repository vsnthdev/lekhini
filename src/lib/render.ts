/*
 *  Creates a string and formats it accordingly.
 *  Created On 21 August 2021
 */

import data from './variables/data'
import emoji from './variables/emoji'
import module from './variables/module'
import msg from './variables/msg'
import stack from './variables/stack'
import system from './variables/system'
import time from './variables/time'
import type from './variables/type'

export interface RenderOptionsImpl {
    segments: Array<string[]> | RenderOptionsImpl
}

const render = (options: RenderOptionsImpl): string => {
    const rendered = (options.segments as string[])
        // join the array into a string
        .join(' ')

        // collapse multiple consecutive spaces into one
        .replace(/  +/g, ' ')

    return rendered
}

export default (ctx: any, config: any): string => {
    const rendered = render({
        segments: [
            time(ctx, config),
            system(ctx, config),
            module(ctx, config),
            emoji(ctx, config),
            type(ctx, config),
            msg(ctx, config),
            data(ctx, config),
            stack(ctx, config),
        ],
    })

    return rendered
}
