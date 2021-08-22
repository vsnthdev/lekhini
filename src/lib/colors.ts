/*
 *  Wrapper for chalk color functions with support to colorless.
 *  Created On 22 August 2021
 */

import chalk from 'chalk';

export interface ColorsImpl {
    gray: (str: string) => string
    grayDim: (str: string) => string
    blue: (str: string) => string
    magenta: (str: string) => string
}

export const colorize = (config: any, color: chalk.Chalk) => {
    if (config.colorize) {
        return color
    } else {
        return (str: string) => str
    }
}

export default (config: any): ColorsImpl => {
    return {
        gray: colorize(config, chalk.gray),
        grayDim: colorize(config, chalk.gray.dim),
        magenta: colorize(config, chalk.magenta),
        blue: colorize(config, chalk.blue)
    }
}