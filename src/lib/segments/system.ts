/*
 *  Formats process ID and hostname fields in log.
 *  Created On 27 April 2022
 */

import chalk from 'chalk'
import { Config } from '../index.js'
import { colorize } from '../format.js'

export default (log: any, config: Config): string => {
    // construct the required variables
    const { pid, hostname } = log
    const sep = pid && hostname ? '⑀' : undefined
    const end = pid || hostname ? '•' : undefined

    return [
        colorize(chalk.magenta, pid, config),
        colorize(chalk.gray.dim, sep, config),
        colorize(chalk.blue, hostname, config),
        colorize(chalk.gray.dim, end, config)
    ].join(' ')
}
