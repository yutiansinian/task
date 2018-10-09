let list = [
  {
    title:"东方幻想乡",
    isCompleted:false
  },
  {
    title:"东方异闻录",
    isCompleted:true
  }
];

var app = new Vue({
  el:"#todolist",
  data:{
    //添加文本框的数据
    addInp:"",
    listItems:[]
  },
  methods:{
    //添加列表
    add:function(){
      this.listItems.push({title:this.addInp,isCompleted:false});
      this.addInp = "";
    },
    //删除列表
    del:function(index){
      this.listItems.splice(index,1);
    }
  }
})
