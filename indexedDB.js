var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB,
IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction,
baseName = "easydarts2";

function logerr(err){
    console.log(err);
}
function connectDB(tableName, f){
    var request = indexedDB.open(baseName);
    request.onerror = logerr;
    request.onsuccess = function(){
        f(request.result);
    }
}
function CreateObjectStore(storeName, f) {
    var request = indexedDB.open(baseName);
    request.onsuccess = function (e){
        var database = e.target.result;
        var version =  parseInt(database.version);
        database.close();
        var secondRequest = indexedDB.open(baseName, version + 1);
        secondRequest.onerror = function() {};
        secondRequest.onupgradeneeded = function (e) {
            var database = e.target.result;
            if(!database.objectStoreNames.contains(storeName))
                var objectStore = database.createObjectStore(storeName, { keyPath: "key" });
        };
        secondRequest.onsuccess = function (e) {
            e.target.result.close();
            f();
        }
    }
}
function getLastRecord(tableName, f){
    connectDB(tableName, function(db){
        var request = db.transaction([tableName], "readonly").objectStore(tableName).openCursor(null, 'prev');
        request.onerror = function() {
            logerr;
            f();
        }
        request.onsuccess = function(e) {
            var cursor = e.target.result;
            if(cursor)
                f(cursor.value.data);
            else
                f();
        }
    });
}
function getRecord(tableName, key, f){
    connectDB(tableName, function(db){
        var request = db.transaction([tableName], "readonly").objectStore(tableName).openCursor(IDBKeyRange.only(key));
        request.onerror = function() {
            logerr;
            f();
        }
        request.onsuccess = function(e) {
            var cursor = e.target.result;
            if(cursor)
                f(cursor.value.data);
            else
                f();
        }
    });
}
function setRecord(tableName, key, data) {
    connectDB(tableName, function(db) {
        var request = db.transaction([tableName], "readwrite").objectStore(tableName).put({ key: key, data: data });
        request.onerror = logerr;
        request.onsuccess = function(){
        }
    });
}
function deleteRecord(tableName, key) {
    connectDB(tableName, function(db) {
        var request = db.transaction([tableName], "readwrite").objectStore(tableName).openCursor(IDBKeyRange.only(key))
        request.onerror = logerr;
        request.onsuccess = function(){
            var cursor = request.result;
            if (cursor) {
                cursor.delete();
                cursor.continue();
            }	
        }
    });
}
function deleteAll(tableName) {
    connectDB(tableName, function(db) {
        var request = db.transaction([tableName], "readwrite").objectStore(tableName).openCursor();
        request.onerror = logerr;
        request.onsuccess = function(){
            var cursor = request.result;
            if (cursor) {
                cursor.delete();
                cursor.continue();
            }	
        }
    });
}
