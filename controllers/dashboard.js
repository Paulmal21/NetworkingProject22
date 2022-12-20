"use strict";

const logger = require("../utils/logger");

const propertyCollection = require('../models/property-list.js')

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
     const viewData = {
       title: 'Energy Mate Dashboard',
       property: propertyCollection
    };
    logger.info('about to render', propertyCollection);
    response.render("dashboard", viewData);
  },
};

module.exports = dashboard;
