new Vue({
  el:"#vue-app",
  data:{name:"PRASUN"},
  methods:{
    greet:function(time){
      return 'Good'+' '+time+' '+this.name;
    }
  }  
});