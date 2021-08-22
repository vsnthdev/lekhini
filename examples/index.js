const pino = require('pino')
const { prettifier } = require('../dist/lekhini')

const logger = pino({
    prettifier,
    level: 10,
    prettyPrint: true,
})

logger.info(new Error('hello world'))
logger.info('hello world')
