/*
 *  Creates a string and formats it accordingly.
 *  Created On 21 August 2021
 */

import time from './variables/time'
import system from './variables/system'

const render = (segments: string[]): string => segments
    // join the array into a string
    .join(' ')

    // cut any beginning or trailing spaces
    .trim()

    // collapse multiple consecutive spaces into one
    .replace(/  +/g, ' ')

export default (ctx: any, config: any): string => [
    time(ctx, config),
    system(ctx, config)
].map(segments => render(segments))
.join(' ').concat('\n')