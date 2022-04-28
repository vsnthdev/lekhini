/*
 *  Formats stack trace of Node.js into a friendly format.
 *  Created On 28 April 2022
 */

import chalk from 'chalk'
import { Config } from '../index.js'
import { colorize } from '../format.js'

export default (log: any, config: Config): string => {
    // handle when properties don't exist
    if (!log.err) return ''
    if (!log.err.stack) return ''

    let lines = log.err.stack.split('\n') as string[]
    lines.shift()
    lines = lines.map(line => line.trim())

    const longest = [...lines].sort((a: string, b: string) => b.length - a.length)[0]
    const separator = '─'.repeat(longest.length)
    lines.unshift(separator)
    lines.unshift('')
    lines.push(separator)
    lines.push('')

    return colorize(chalk.gray, lines.join('\n'), config)
}
