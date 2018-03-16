Page({

  /**
   * 页面的初始数据
   */
  data: {
    left:[
      {
        id:1,
        main:'推荐1'
      },
      {
        id: 2,
        main: '推荐2'
      },
      {
        id: 3,
        main: '推荐3'
      },
      {
        id: 4,
        main: '推荐4'
      },
      {
        id: 5,
        main: '推荐5'
      },
      {
        id: 6,
        main: '推荐6'
      },
      {
        id: 7,
        main: '推荐7推荐7推荐7推荐7'
      },
      {
        id: 8,
        main: '推荐8'
      },
      {
        id: 9,
        main: '推荐9'
      },
      {
        id: 10,
        main: '推荐10'
      },
      {
        id: 11,
        main: '推荐11'
      },
      {
        id: 12,
        main: '推荐12'
      },
      {
        id: 13,
        main: '推荐13'
      },
    ],
    right:[
      {
        id:1,main:'推荐1',
        classify:[
          { id: '011', name:'分类1'},
          { id: '012', name: '分类1'},
          { id: '013', name: '分类1'},
          { id: '012', name: '分类1' },
          { id: '013', name: '分类1' },           
        ]
      },
      {
        id: 2, main: '推荐2',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
        ]
      },
      {
        id: 3, main: '推荐3',
        classify: [
          { id: '031', name: '分类1' },
          { id: '032', name: '分类1' },
          { id: '033', name: '分类1' },
          { id: '031', name: '分类1' },
          { id: '032', name: '分类1' },
          { id: '033', name: '分类1' },
        ]
      },
      {
        id: 4, main: '推荐4',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
        ]
      },
      {
        id: 5, main: '推荐5',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
        ]
      },
      {
        id: 6, main: '推荐6',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
          { id: '023', name: '分类1' },
        ]
      },
      {
        id: 7, main: '推荐7',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
        ]
      },
      {
        id: 8, main: '推荐8推荐8推荐8',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
        
        ]
      },
      {
        id: 9, main: '推荐9',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
          // { id: '021', name: '分类1' },
          // { id: '022', name: '分类1' },
          // { id: '023', name: '分类1' },
          // { id: '023', name: '分类1' },
        ]
      },
      {
        id: 10, main: '推荐10',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
        
        ]
      },
      {
        id: 11, main: '推荐11',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },

        ]
      },
      {
        id: 12, main: '推荐12',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },

        ]
      },
      {
        id: 13, main: '推荐8推荐8推荐13',
        classify: [
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
          { id: '021', name: '分类1' },
          { id: '022', name: '分类1' },
          { id: '023', name: '分类1' },
        ]
      },
    
    ],
    scrollTopLeft:0,
    scrollTopB:0,
    indexA:0,
    indexB:0,
    hh:0,
    // hhB:0,
    // scrollHeight:0,
    c:false,
    top:false,
  },
  //changeA
  changeA:function(e){
    var _id = e.currentTarget.dataset.id;
    this.setData({
      //  indexA: _id,
       indexB: _id,
       vieid: _id,
    })
 
  },
  
  //bindscroll
  bindscroll:function(e){
    var that=this;
    var scrollTop = e.detail.scrollTop *2,
    h=0,
    indexA;
    that.data.left.forEach(function(classify,i){
      var _h = 50 + that.length(classify['id']) * 162;
      if (scrollTop>=h){
        indexA=classify['id'];
      };
      h+=_h; 
     
    })

    that.setData({
      indexA: indexA,
      indexB:indexA,
      scrollTopB : e.detail.scrollTop,
      
    })
    
    if (this.data.scrollTopB<=4) {
      this.setData({
        scrollTopLeft: 0,
        top:false
      })
    }else{
      this.setData({
        top: true
      })
    }
   

  },
  bindscrolltolower:function(e){
    this.setData({
      c:true
    })
  },

  bindscrollB:function(e){
    var scrollTop = e.detail.scrollTop;
    // this.setData({
    //   scrollHeight: e.detail.scrollHeight,
    // }) 
    if(this.data.c==true){
      this.setData({
        indexB: this.data.indexA
      })
    }else{
      this.setData({
        indexA: this.data.indexA
      })
    }

    if (scrollTop<=4){
      this.setData({
        top:false
      })
    }else{
      this.setData({
        top:true
      })
    }
    

  },
  touchstart:function(){
    this.setData({
      c: false
    });
  
  },

  length:function(e){
    var that=this;
    var right=that.data.right;
    for(var i=0;i<right.length;i++){
      if(right[i]['id']==e){
        return right[i]['classify'].length
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      indexA: this.data.left[0]['id'],
    })
    var that = this;
    var len = that.data.right.length-1;
    this.setData({
      len: len
    })


    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          // hhB: res.windowHeight,
          hh: res.windowHeight+4,
        })
   
      }
       
    })

    // console.log(this.data.hhB);
  },
  

 
})