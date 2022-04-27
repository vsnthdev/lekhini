/*
 *  Render the time variable
 *  Created On 21 August 2021
 */

import chalk from 'chalk'
import dateTime from 'date-and-time'

import fmt from '../fmt'

export default (ctx: any, config: any): string => {
    // if no time is found, we simply return
    if (!ctx.time) return ''

    // construct the required variables
    const date = new Date(ctx.time)
    const str = dateTime.format(date, config.translateTime)

    // return rendered time
    return fmt(str, chalk.gray, config) + ' ' + fmt('•', chalk.gray.dim, config)
}
