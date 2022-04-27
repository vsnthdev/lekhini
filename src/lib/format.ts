/*
 *  Contains formatting utility functions.
 *  Created On 27 April 2022
 */

import { Config } from './index.js'

// removes the filtered keys from the config
// so they don't get rendered
export const filterIgnore = (log: any, config: Config) => {
    const ignored = (config.ignore || '')
        .split(',')
        .filter(key => Boolean(key))
        .map(key => key.trim())

    Object.keys(log)
        .filter(key => ignored.includes(key))
        .forEach(key => delete log[key])

    return log
}

// dummy colorize function that outputs
// default text with no formatting
export const colorize = (func: any, input: string, config: Config) => {
    if (!input) {
        return ''
    } else {
        return config.color ? func(input) : input
    }
}
