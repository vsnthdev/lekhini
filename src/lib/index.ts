/*
 *  Newline-delimiter formatter function for pino.
 *  Created On 20 August 2021
 */

import merge from 'deepmerge'

import { filterIgnore } from './fmt'
import render from './render'

const defaults = {
    emojis: true,
    colorize: true,
    messageKey: 'msg',
    ignore: 'hostname, pid',
    translateTime: 'YYYY-MM-DD HH:mm:ss',
}

export default (config: any) => {
    // merge with our default values so, we are sure
    // there are all config properties
    config = merge(defaults, config)

    return (ctx: any) => {
        // filter the ignored keys from context
        ctx = filterIgnore(ctx, config)

        // transform the message type property
        ctx.type = ctx.type ? ctx.type.toLowerCase() : 'string'

        return render(ctx, config)
    }
}
