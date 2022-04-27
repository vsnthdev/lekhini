/*
 *  Creates a string and formats it accordingly.
 *  Created On 27 April 2022
 */

import { Config } from './index.js'
import time from './segments/time.js'
import system from './segments/system.js'
import module from './segments/module.js'
import emoji from './segments/emoji.js'
import msgType from './segments/type.js'

const render = (segments: string[]): string =>
    // join the array into a string
    segments.join(' ')

    // collapse multiple consecutive spaces into one
    .replace(/  +/g, ' ')

export default (log: any, config: Config) => 
    render([
        time(log, config),
        system(log, config),
        module(log, config),
        emoji(log, config),
        msgType(log, config)
    ])
