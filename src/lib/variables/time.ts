/*
 *  Render the time variable
 *  Created On 21 August 2021
 */

import chalk from 'chalk'
import { DateTime } from 'luxon'

import fmt from '../fmt'

export default (ctx: any, config: any): string[] => {
    // if no time is found, we simple return
    if (!ctx.time) return []

    // construct the required variable
    const time = DateTime.fromMillis(ctx.time).toFormat(config.translateTime)

    // return the string
    return [fmt(time, chalk.gray, config), fmt('•', chalk.gray.dim, config)]
}
