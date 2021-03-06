/* global describe it */
/* eslint no-undef: "error" */
const { join } = require('path');
const { runSass } = require('sass-true');
const sass = require('sass');
const loadPath = [
    'node_modules',
];

const file = join(__dirname, 'test.scss');
runSass({ file, loadPath }, { describe, it, sass });

const fileWithConfig = join(__dirname, 'configuration.test.scss');
runSass({ file: fileWithConfig, loadPath }, { describe, it, sass });
