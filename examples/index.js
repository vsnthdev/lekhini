const pino = require('pino')
const { prettifier } = require('../dist/lekhini')

const logger = pino({
    prettifier,
    level: 10,
    prettyPrint: true,
})

logger.trace({
    message: 'I am a trace message',
    hostname: 'w2020',
})
logger.debug('I am a debug message')
logger.info('I am a info message')
logger.warn(new Error('there is something wrong!'))
logger.error('I am a error message')
logger.fatal('I am a fatal message')
