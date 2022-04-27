/*
 *  Formats the time field if present in log.
 *  Created On 27 April 2022
 */

import chalk from 'chalk'
import dateTime from 'date-and-time'
import { Config } from '../index.js'
import { colorize } from '../format.js'

export default (log: any, config: Config): string => {
    // handle when time isn't found
    if (!log.time) return ''

    // render the date time string
    return [
        colorize(
            chalk.gray,
            dateTime.format(new Date(log.time),config.timeFormat),
            config
        ),
        colorize(
            chalk.gray.dim,
            '•',
            config
        )
    ].join(' ')
}
