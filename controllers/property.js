'use strict';

const uuid = require('uuid');
const logger = require('../utils/logger');
const propertyHub = require('../models/property-hub');

const property = {
  index(request, response) {
    const propertyId = request.params.id;
    logger.debug('Property id = ', propertyId);
    const viewData = {
      title: 'Property',
      property: propertyHub.getProperty(propertyId),
    };
    response.render('property', viewData);
  },
  
  deleteReading(request, response) {
    const propertyId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Reading ${readingId} from Property ${propertyId}`);
    propertyHub.removeReading(propertyId, readingId);
    response.redirect('/property/' + propertyId);
  },
  
  



  addReading(request, response) {
    const propertyId = request.params.id;
    const property = propertyHub.getProperty(propertyId);
    const newReading = {
      id: uuid.v1(),
      appliance: request.body.appliance,
      usage: request.body.usage,
      duration: request.body.duration/60,
      rate: request.body.rate,
      cost: request.body.usage/1000*request.body.duration/60/60*request.body.rate,
    };
    logger.debug("New Reading = ", newReading);
    propertyHub.addReading(propertyId, newReading);
    response.redirect('/property/' + propertyId);

  },
  
  
    
  
};

module.exports = property;