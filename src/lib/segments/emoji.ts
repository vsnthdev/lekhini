/*
 *  An emoji type based on the message type.
 *  Created On 27 April 2022
 */

import emoji from 'node-emoji'
import { Config } from '../index.js'

const map = {
    10: 'mag',
    20: 'telescope',
    30: 'loudspeaker',
    40: 'construction',
    50: 'rotating_light',
    60: 'skull',
}

// handle disabling emojis
export default (log: any, config: Config): string =>
    config.emoji ? emoji.emojify(`:${map[log.level]}:`) : ''
