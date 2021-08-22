/*
 *  Newline-delimiter formatter function for pino.
 *  Created On 20 August 2021
 */

import merge from 'deepmerge';
import render from './render'
import getColors from './colors';

const defaults = {
    messageKey: 'msg',
    colorize: true,
    translateTime: 'yyyy-mm-dd HH:mm:ss'
}

export default (config: any) => {
    // merge with our default values so, we are sure
    // there are all config properties
    config = merge(defaults, config)

    return (ctx: any) => {
        // define the colors depending on the config
        const colors = getColors(config)

        return render({config, ctx, colors})
    }
}