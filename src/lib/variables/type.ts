/*
 *  Renders the message type as a segment.
 *  Created On 23 August 2021
 */

import chalk from 'chalk'

import fmt from '../fmt'

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
        color: chalk.bgRedBright.whiteBright,
    },
}

export default (ctx: any, config: any): string[] => {
    // construct base variables
    const type = map[ctx.level]

    // return the segments
    return [fmt(type.name, type.color, config)]
}
