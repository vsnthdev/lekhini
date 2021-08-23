/*
 *  Renders an emoji type based on the message type.
 *  Created On 23 August 2021
 */

import { emojify } from 'node-emoji'

const map = {
    10: 'memo',
    20: 'telescope',
    30: 'loudspeaker',
    40: 'construction',
    50: 'x',
    60: 'skull',
}

export default (ctx: any, config: any): string[] => {
    // construct base variables
    const emojis = Boolean(config.emojis)

    // conditional execution
    if (!emojis) return []

    // construct additional variables
    const emoji = `:${map[ctx.level]}:`

    // return the segments
    return [emojify(emoji)]
}
