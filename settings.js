var settings = {
    newSetLength: 1,
    newLegLength: 2,
    newGameLength: 501,
    newNoStartSwap: false,
    endings: "Default",
    language: "en",
    getEnding: function(value, defaultValue) { 
        var e = endings[this.endings]; 
        if(e[value] == undefined)
            return defaultValue;
        return e[value];
    },
    store: function() {
        setRecord("Settings", "settings", JSON.stringify(this));
    },
    restore: function() {
        getRecord("Settings", "settings", function(data){
            if(data == undefined)
                settings.store();
            else {
                var r = JSON.parse(data);
                settings.endings = r.endings == undefined ? "Default" : r.endings;
                settings.language = r.language == undefined ? "en" : r.language;
                keyboardKeys.newSetLength = settings.newSetLength = r.newSetLength;
                keyboardKeys.newLegLength = settings.newLegLength = r.newLegLength;
                keyboardKeys.newGameLength = settings.newGameLength = r.newGameLength;
                keyboardKeys.newNoStartSwap = settings.newNoStartSwap = r.newNoStartSwap;
                updateAll();
            }
        });
    }
};
