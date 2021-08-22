/*
 *  Renders hostname and process ID variables if not ignored.
 *  Created On 22 August 2021
 */

import { ArgsImpl } from '../render';

export default ({ config, ctx, colors }: ArgsImpl) => {
    // pull the colors we'll be using
    const { magenta, gray, grayDim, blue } = colors

    // construct the required variable
    const { pid, hostname } = ctx

    // return the string
    return [
        magenta(pid),
        gray('⑀'),
        blue(hostname),
        grayDim('•')
    ].join(' ').trim()
}