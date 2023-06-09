"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return visibilityFromRequest;
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isString = (string) => {
    return typeof string === 'string' || string instanceof String;
};
const isWeather = (weather) => {
    return Object.values(types_1.Weather).includes(weather);
};
const isVisibility = (visibility) => {
    return Object.values(types_1.Visibility).includes(visibility);
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        date: parseDate(object.parseDate),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility),
        comment: parseComment(object.comment)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
