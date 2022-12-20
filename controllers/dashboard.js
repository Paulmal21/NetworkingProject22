'use strict';

const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const propertyHub = require('../models/property-hub');
const uuid = require('uuid');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    const viewData = {
      title: 'Property Dashboard',
      properties: propertyHub.getUserProperties(loggedInUser.id),
    };
    logger.info('about to render', propertyHub.getAllProperties());
    response.render('dashboard', viewData);
  },

  
  deleteProperty(request, response) {
    const propertyId = request.params.id;
    logger.debug(`Deleting Property ${propertyId}`);
    propertyHub.removeProperty(propertyId);
    response.redirect('/dashboard');
  },
  
  addProperty(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newProperty = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      address: request.body.address,
      readings: [],
    };
    logger.debug("Creating a new Property", newProperty);
    propertyHub.addProperty(newProperty);
    response.redirect('/dashboard');
  }
};

module.exports = dashboard;