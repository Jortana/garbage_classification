Page({
    data:{
        types: ["垃圾缺失", "意见、建议"],
        typeIndex: 0,
        showTopTips: false,
        content: "",
        phone: "",
        email: "",
    },

    bindTypeChange: function(e) {
        this.setData({
            typeIndex: e.detail.value
        })
    },

    validateAndSend: function(e) {
        var that = this;

        if (e.detail.value.content == "") {
            this.showTopTips();
            return;
        }

        wx.request({
            url: "https://www.jortana.top/garbage_classification/miniprogram/get_feedback.php",
            method: "post",
            header: {
              "content-type": "application/x-www-form-urlencoded",
            },
            data: {
                "type": that.data.typeIndex,
                "content": e.detail.value.content,
                "phone": e.detail.value.phone,
                "email": e.detail.value.email,
            },
            success: function(response) {
                let data = response.data;
                if (data.success == "1") {
                    wx.showToast({
                        title: "提交成功",
                        icon: "succes",
                        duration: 1500,
                        mask:true
                    })
                } else {
                    wx.showModal({
                        content: '服务器错误，请及时联系我们或稍后再试',
                        showCancel: false,
                        success: function () {
                        }
                    });
                }
            },
            fail: function() {
                wx.showModal({
                    content: '连接服务器失败，请及时联系我们或稍后再试',
                    showCancel: false,
                    success: function () {
                    }
                });
            },
            complete: function() {
                that.setData({
                    content: "",
                    phone: "",
                    email: "",
                })
            }
        });
    },

    showTopTips: function(){
        var that = this;
        this.setData({
            showTopTips: true
        });
        setTimeout(function(){
            that.setData({
                showTopTips: false
            });
        }, 3000);
    },
})