/*
 *  Renders any additional data with YAML and applies
 * syntax highlighting.
 *  Created On 23 August 2021
 */

import highlight from 'cli-highlight'
import merge from 'deepmerge'
import yaml from 'js-yaml'

export default (ctx: any, config: any): string[] => {
    // construct base variables
    const data =
        typeof ctx[config.messageKey] == 'object'
            ? merge(ctx.data || {}, ctx[config.messageKey])
            : ctx.data

    // conditional execution
    if (!data) return []
    if (ctx.type != 'string') return []

    const str = highlight(
        yaml.dump(data, {
            indent: 4,
        }),
        {
            language: 'yaml',
        },
    )

    // return the segments
    return [`\n${str}`]
}
