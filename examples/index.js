const pino = require('pino')
const { prettifier } = require('../dist/lekhini')

const logger = pino({
    prettifier,
    level: 10,
    prettyPrint: true,
})

logger.trace('I am a trace message')
logger.debug('I am a debug message')
logger.info('I am a info message')
logger.warn('I am a warn message')
logger.error('I am a error message')
logger.fatal('I am a fatal message')
