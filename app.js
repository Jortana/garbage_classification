//app.js
var garbageData = require("./data/garbageData.js");
App({
    globalData: {

    },

    onLaunch: function () {
        this.globalData.garbageList = garbageData.garbageList;
    },
})