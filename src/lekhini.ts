#!/usr/bin/env node
/*
 *  Entryfile for for lekhini project.
 *  Created On 20 August 2021
 */

import lib from './lib/index'

// check if this file has been imported
// or executed
const isCLI = require.main === module

export const prettifier = lib
