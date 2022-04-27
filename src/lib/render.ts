/*
 *  Creates a string and formats it accordingly.
 *  Created On 27 April 2022
 */

import { Config } from './index.js'

const render = (segments: string[]): string =>
    // join the array into a string
    segments.join(' ')

    // collapse multiple consecutive spaces into one
    .replace(/  +/g, ' ')

export default (log: any, config: Config) => 
    render([
        
    ])
