'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');
const property = require("../controllers/property");

const propertyHub = {
  store: new JsonStore('./models/property-hub.json', { propertyList: [] }),
  collection: 'propertyList',

  getAllProperties() {
    return this.store.findAll(this.collection);
  },

  getProperty(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addProperty(property) {
    this.store.add(this.collection, property);
    this.store.save();
  },

  removeProperty(id) {
    const property = this.getProperty(id);
    this.store.remove(this.collection, property);
    this.store.save();
  },

  removeAllProperties() {
    this.store.removeAll(this.collection);
    this.store.save();
  },


  addReading(id, reading) {
    const property = this.getProperty(id);
    property.readings.unshift(reading);
    this.store.save();
  },

  removeReading(id, readingId) {
    const property = this.getProperty(id);
    const readings = property.readings;
    _.remove(readings, { id: readingId});
    this.store.save();
  },
  
  getUserProperties(userid) {
    return this.store.findBy(this.collection, { userid: userid });
  },
  
  getReading(id, readingId) {
    const property = this.store.findOneBy(this.collection, { id: id });
    const reading = property.readings.filter(reading => reading.id == readingId);
    return reading[0];
  },
  
  updateReading(reading, updatedReading) {
    reading.appliance = updatedReading.appliance;
    reading.usage = updatedReading.usage;
    reading.duration = updatedReading.duration;
    this.store.save();
  },



};

module.exports = propertyHub;
