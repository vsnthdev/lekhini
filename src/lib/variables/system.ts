/*
 *  Renders hostname and process ID variables if not ignored.
 *  Created On 22 August 2021
 */

import fmt from '../fmt'
import chalk from 'chalk';

export default (ctx: any, config: any): string[] => {
    // construct the required variable
    const { pid, hostname } = ctx
    const sep = pid && hostname ? '⑀' : undefined
    const end = pid || hostname ? '•' : undefined

    // return the string
    return [
        fmt(pid, chalk.magenta, ctx, config),
        fmt(sep, chalk.gray.dim, ctx, config),
        fmt(hostname, chalk.blue, ctx, config),
        fmt(end, chalk.gray.dim, ctx, config)
    ]
}