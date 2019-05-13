#!/usr/bin/env node

var game = process.argv[2];
var language = process.argv[3];

if (!game) {
  console.log('usage: node-games <game> <language>');
  console.log('');
  console.log('Games');
  console.log('- spacecraft');
  console.log('- snake');
  console.log('- tanks');
  console.log('');
  console.log('Languages');
  console.log('- NO PARAM : English (Default)');
  console.log('- es : Español');
  return;
}

require('babel-polyfill');

require(__dirname + '/build/' + game);