/*
 *  Formats text accordingly by reading the context and config.
 *  Created On 23 August 2021
 */

// removes the filtered keys from the context
// so they don't get rendered
export const filterIgnore = (ctx: any, config: any) => {
    const ignored = (config.ignore || '')
        .split(',')
        .filter(key => Boolean(key))
        .map(key => key.trim())

    Object.keys(ctx)
        .filter(key => ignored.includes(key))
        .forEach(key => delete ctx[key])

    return ctx
}

// this function does the following things:
// 1. not render the string if it's empty or undefined
// 2. render the string in colors
export default (
    value: string,
    fmt: (str: string) => string,
    config: any,
): string => {
    if ([undefined, ''].includes(value)) return ''

    // dummy format function if colorize is false
    if (!config.colorize) fmt = (str: string) => str

    return fmt(value)
}
