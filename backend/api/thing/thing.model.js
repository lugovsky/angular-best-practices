/**
 * @author v.lugovsky
 * created on 09.12.2015
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
