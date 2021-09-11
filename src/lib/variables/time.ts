/*
 *  Render the time variable
 *  Created On 21 August 2021
 */

import chalk from 'chalk'
import dateTime from 'date-and-time'

import fmt from '../fmt'
import { RenderOptionsImpl } from '../render'

export default (ctx: any, config: any): RenderOptionsImpl => {
    const options: RenderOptionsImpl = {
        segments: [],
    }

    // if no time is found, we simply return
    if (!ctx.time) return options

    // construct the required variables
    const date = new Date(ctx.time)
    const str = dateTime.format(date, config.translateTime)

    // add the segments
    options.segments.push(fmt(str, chalk.gray, config))
    options.segments.push(fmt('•', chalk.gray.dim, config))

    // return the options
    return options
}
