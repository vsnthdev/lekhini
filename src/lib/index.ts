/*
 *  Pretty Newline-delimiter formatter function for pino.
 *  Created On 27 April 2022
 */

import build from 'pino-abstract-transport'
import merge from 'deepmerge'
import { filterIgnore } from './format.js'
import render from './render.js'

export interface Config {
    emoji: boolean
    color: boolean
    ignore: string
    timeFormat: string
    data: {
        format: 'yml' | 'yaml' | 'json'
        indent: number
    }
}

const defaults: Config = {
    emoji: true,
    color: true,
    ignore: 'hostname, pid',
    timeFormat: 'YYYY-MM-DD HH:mm:ss',
    data: {
        format: 'yml',
        indent: 4
    }
}

export default async (config: Config) => {
    // merge with our default values so, we are sure
    // there are all config properties
    config = merge(defaults, config)

    return build(async (src) => {
        for await (const log of src) {
            // filter the ignored keys from context
            filterIgnore(log, config)

            // log the output
            console.log(
                render(log, config)
            )
        }
    })
}
