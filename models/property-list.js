'use strict';

const logger = require('../utils/logger');

const westgate = {
  property: 'Westgate Park',
  readings: [
    {
      appliance: 'Playstation 5',
      usage: '200',
    },
    {
      appliance: 'Smart Light',
      usage: '8',
    },
  ],
};

const mainstreet = {
  property: 'Main Street',
  readings: [
    {
      appliance: 'Smart TV',
      usage: '265',
    },
    {
      appliance: 'Smart Light',
      usage: '8',
    },
  ],
};

const propertyCollection = [westgate, mainstreet];
module.exports = propertyCollection;