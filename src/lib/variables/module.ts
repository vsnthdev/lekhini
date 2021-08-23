/*
 *  Renders the module key as a separate segment.
 *  Useful to create sub-loggers with different names.
 *  Created On 23 August 2021
 */

import chalk from 'chalk'

import fmt from '../fmt'

export default (ctx: any, config: any): string[] => {
    // construct the required variable
    const { module } = ctx

    // return the segments
    return [fmt(module, chalk, config)]
}
