/*
 *  Formats the log message into the log.
 *  Created On 28 April 2022
 */

import emoji from 'node-emoji'
import { colorize } from '../format.js'
import { Config } from '../index.js'

export default (log: any, config: Config): string =>
    colorize((input: string) => input, emoji.emojify(log.msg), config)
