/*
 *  Renders the module key as a separate segment.
 *  Useful to create sub-loggers with different names.
 *  Created On 27 April 2022
 */

import { Config } from '../index.js'
import { colorize } from '../format.js'

export default (log: any, config: Config): string =>
    colorize((input: string) => input, log.module, config)
