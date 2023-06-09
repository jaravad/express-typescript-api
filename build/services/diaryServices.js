"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.findById = exports.getEntriesWithoutSensitiveData = exports.getEntries = void 0;
const diaryEntries_json_1 = __importDefault(require("./diaryEntries.json"));
const entries = diaryEntries_json_1.default;
const getEntries = () => entries;
exports.getEntries = getEntries;
const getEntriesWithoutSensitiveData = () => {
    return entries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility };
    });
};
exports.getEntriesWithoutSensitiveData = getEntriesWithoutSensitiveData;
const findById = (id) => {
    const entry = entries.find(d => d.id === id);
    if (entry != null) {
        const { comment } = entry, restOfEntry = __rest(entry, ["comment"]);
        return restOfEntry;
    }
    return undefined;
};
exports.findById = findById;
const addEntry = (newDiaryEntry) => {
    const newEntry = Object.assign({ id: Math.max(...entries.map(e => e.id)) + 1 }, newDiaryEntry);
    entries.push(newEntry);
    return newEntry;
};
exports.addEntry = addEntry;
