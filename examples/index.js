/*
 *  A simple example of lekhini pino prettier.
 *  Created On 27 April 2022
 */

import pino from 'pino'

const log = pino({
    level: 10,
    transport: {
        target: '../dist/index.js',
        levels: 10,
        options: {
            ignore: ''
        }
    }
})

// log.trace('I am a trace message')
// log.debug('I am a debug message')
log.info('I am a info message')
// log.warn(new Error('there is something wrong!'))
// log.error('I am a error message')
// log.fatal('I am a fatal message')
