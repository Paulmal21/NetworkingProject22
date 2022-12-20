"use strict";

const logger = require("../utils/logger");
const propertyHub = require("../models/property-hub");


const reading = {
  index(request, response) {
    const propertyId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Editing Reading ${readingId} from Property ${propertyId}`);
    const viewData = {
      title: "Edit Reading",
      property: propertyHub.getProperty(propertyId),
      reading: propertyHub.getReading(propertyId, readingId)
    };
    response.render("reading", viewData);
  },

  
  
  update(request, response) {
    const propertyId = request.params.id;
    const readingId = request.params.readingid;
    const reading = propertyHub.getReading(propertyId, readingId)
    const newReading = {
      appliance: request.body.appliance,
      usage: request.body.usage,
      duration: request.body.duration,
      rate: request.body.rate,
      cost: 5,
    };
    logger.debug(`Updating Reading ${readingId} from Property ${propertyId}`);
    propertyHub.updateReading(reading, newReading);
    response.redirect("/property/" + propertyId);
  },
  
};

module.exports = reading;