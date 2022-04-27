/*
 *  Renders hostname and process ID variables if not ignored.
 *  Created On 22 August 2021
 */

import chalk from 'chalk'

import fmt from '../fmt'

export default (ctx: any, config: any): string => {
    // construct the required variables
    const { pid, hostname } = ctx
    const sep = pid && hostname ? '⑀' : undefined
    const end = pid || hostname ? '•' : undefined

    // return the segments
    return [
        fmt(pid, chalk.magenta, config),
        fmt(sep, chalk.gray.dim, config),
        fmt(hostname, chalk.blue, config),
        fmt(end, chalk.gray.dim, config),
    ].join(' ')
}
