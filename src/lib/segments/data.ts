/*
 *  Formats a JS object or JSON into YAML like data for easy reading.
 *  Created On 28 April 2022
 */

import chalk from 'chalk'
import yaml from 'yaml'
import { highlight } from 'cli-highlight'
import { Config } from '../index.js'
import { colorize } from '../format.js'

const yml = (input: any, config: Config): string => {
    const str = yaml.stringify(input, {
        indent: config.data.indent
    })
    const longest = str.split('\n').sort((a: string, b: string) => b.length - a.length)[0]
    const separator = '─'.repeat(longest.length)

    return [
        '',
        colorize(chalk.gray.dim, separator, config),
        highlight(str, { ignoreIllegals: true, language: 'YAML' }).trim(),
        colorize(chalk.gray.dim, separator, config),
        ''
    ].join('\n')
}

const json = (input: any, config: Config): string => {
    const str = JSON.stringify(input, null, config.data.indent)
    const longest = str.split('\n').sort((a: string, b: string) => b.length - a.length)[0]
    const separator = '─'.repeat(longest.length)

    return [
        '',
        colorize(chalk.gray.dim, separator, config),
        highlight(str, { ignoreIllegals: true, language: 'JSON' }).trim(),
        colorize(chalk.gray.dim, separator, config),
        ''
    ].join('\n')
}

export default (log: any, config: Config): string => {
    // handle when properties don't exist
    if (!log.data) return ''

    config.data.format = config.data.format.toLowerCase() as any
    if (config.data.format == 'yml' || config.data.format == 'yaml') {
        return yml(log.data, config)
    } else if (config.data.format == 'json') {
        return json(log.data, config)
    } else {
        throw new Error(`Invalid data format: ${config.data.format}`)
    }
}
