/*
 *  Render the time variable
 *  Created On 21 August 2021
 */

import { DateTime } from 'luxon'
import { ArgsImpl } from '../render';

export default ({ config, ctx, colors }: ArgsImpl) => {
    // pull the colors we'll be using
    const { gray, grayDim } = colors

    // construct the required variable
    const time = DateTime.fromMillis(ctx.time).toFormat(config.translateTime)
    
    // return the string
    return [
        gray(time),
        grayDim('•')
    ].join(' ')
}