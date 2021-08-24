/*
 *  Renders the message text as a segment.
 *  Created On 23 August 2021
 */

import chalk from 'chalk'

import fmt from '../fmt'

export default (ctx: any, config: any): string[] => {
    // construct base variables
    let msg = ctx[config.messageKey]
    if (typeof msg == 'object') msg = 'See the below data :point_down:'

    // return the segments
    return [fmt(msg, chalk, config)]
}
