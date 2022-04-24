"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.removeKey = exports.createObject = exports.setObject = exports.pushObject = exports.getStoreObject = void 0;
function getStoreObject(key) {
    if (!key || typeof key !== "string") {
        throw new Error("BetterLocalStore: Key does not exist.");
    }
    var obj = localStorage.getItem(key);
    return !obj ? null : JSON.parse(obj);
}
exports.getStoreObject = getStoreObject;
function checkObjectEmpty(object) {
    // if a key is exist in object means if have content, then return false in first loop
    for (var keys in object) {
        return false;
    }
    return true;
}
function pushObject(key, value, createIfNull) {
    if (createIfNull === void 0) { createIfNull = true; }
    if (!key || typeof key !== "string") {
        throw new Error("BetterLocalStore: Key does not exist.");
    }
    if (!value) {
        throw new Error("BetterLocalStore: Invalid value");
    }
    if (typeof value === "object" && checkObjectEmpty(value)) {
        throw new Error("BetterLocalStore: Invalid object.");
    }
    var storeItem = getStoreObject(key);
    if (storeItem === null) {
        if (createIfNull) {
            createObject(key, value);
            return true;
        }
        else {
            throw new Error("BetterLocalStore: Key does not exist in localStore.");
        }
    }
    else {
        storeItem.push(value);
        var str = JSON.stringify(storeItem);
        localStorage.setItem(key, str);
        return true;
    }
}
exports.pushObject = pushObject;
function setObject(key, value, createIfNull, allowEmptyObject) {
    if (createIfNull === void 0) { createIfNull = true; }
    if (allowEmptyObject === void 0) { allowEmptyObject = true; }
    if (!key || typeof key !== "string") {
        throw new Error("BetterLocalStore: Key does not exist.");
    }
    if (!value) {
        throw new Error("BetterLocalStore: Invalid value");
    }
    if (!allowEmptyObject && (typeof value === "object" && checkObjectEmpty(value))) {
        throw new Error("BetterLocalStore: Invalid object.");
    }
    var storeItem = getStoreObject(key);
    if (storeItem === null) {
        if (createIfNull) {
            createObject(key, value);
            return true;
        }
        else {
            throw new Error("BetterLocalStore: Key does not exist in localStore.");
        }
    }
    else {
        var str = JSON.stringify(value);
        localStorage.setItem(key, str);
        return true;
    }
}
exports.setObject = setObject;
function createObject(key, value) {
    if (!key || typeof key !== "string") {
        throw new Error("BetterLocalStore: Key does not exist.");
    }
    if (!value) {
        throw new Error("BetterLocalStore: Invalid value");
    }
    var obj = localStorage.getItem(key);
    if (obj) {
        throw new Error("BetterLocalStore: Key already existed.");
    }
    else {
        var str = Array.isArray(value) ? JSON.stringify(__spreadArray([], value, true)) : JSON.stringify([value]);
        localStorage.setItem(key, str);
        return true;
    }
}
exports.createObject = createObject;
function removeKey(key) {
    if (!key || typeof key !== "string") {
        throw new Error("BetterLocalStore: Key does not exist.");
    }
    localStorage.removeItem(key);
    return true;
}
exports.removeKey = removeKey;
