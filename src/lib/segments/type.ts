/*
 *  Returns the message type as string.
 *  Created On 28 April 2022
 */

import chalk from 'chalk'
import { Config } from '../index.js'
import { colorize } from '../format.js'

const map = {
    10: {
        name: 'trace',
        color: chalk.magentaBright,
    },
    20: {
        name: 'debug',
        color: chalk.cyanBright,
    },
    30: {
        name: 'info',
        color: chalk.blueBright,
    },
    40: {
        name: 'warn',
        color: chalk.yellowBright,
    },
    50: {
        name: 'error',
        color: chalk.redBright,
    },
    60: {
        name: 'fatal',
        color: chalk.bgRedBright.hex('#000000'),
    },
}

export default (log: any, config: Config): string => {
    const type = map[log.level]
    return colorize(type.color, type.name, config)
}
