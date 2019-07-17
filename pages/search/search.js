const app = getApp();
var garbageList = app.globalData.garbageList,
    listLength = garbageList.length;

Page({
    data: {
        inputShowed: false,
        inputVal: "",
        resultList: [

        ],
    },

    onLoad: function(options) {
        this.setData({
            inputVal: options.s,
        })
        this.goSearch();
    },

    formSubmit: function (e) {
        var name = e.detail.value;
        this.setData({
            inputVal: name,
        });
        this.goSearch();
    },

    goSearch:function() {
        let inputVal = this.data.inputVal;
        this.setData({
            resultList: [],
            noInfo: false,
        });
        for (var index = 0; index < listLength; index++) {
            let item = garbageList[index]
            if (item.name == inputVal) {
                let data = this.data.resultList.concat(item);
                this.setData({
                    resultList: data,
                });
            }
        }
        for (var index = 0; index < listLength; index++) {
            let item = garbageList[index]
            if (item.name.indexOf(inputVal) != -1) {
                if (item.name == inputVal) {
                    continue;
                }
                let data = this.data.resultList.concat(item);
                this.setData({
                    resultList: data,
                });
            }
        }
        if (this.data.resultList == "") {
            this.setData({
                noInfo: true,
            });
        }
    },

    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    },
})