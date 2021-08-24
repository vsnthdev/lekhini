/*
 *  Renders the error stack when an error is passed as a message.
 *  Created On 24 August 2021
 */

import chalk from 'chalk'

import fmt from '../fmt'

export default (ctx: any, config: any): string[] => {
    // conditional execution
    if (ctx.type != 'error') return []

    // construct base variables
    let stack = ctx.stack.split('\n')
    stack.shift()
    stack = stack.map(line => `${line.trim()}`)

    // return the segments
    return [fmt(`\n${stack.join('\n')}\n`, chalk.gray, config)]
}
