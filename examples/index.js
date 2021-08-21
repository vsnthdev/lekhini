const pino = require('pino')
const { prettifier } = require('../dist/lekhini')

const logger = pino({
    prettifier,
    level: 10,
    // prettyPrint: {
    //     translateTime: 'yyyy-mm-dd HH:mm:ss',
    //     emoji: true
    // },
})

logger.info(new Error('hello world'))