new Vue({
    el:"#vue-app",
    data:{
      name:"PRASUN",
      age:12,
      showdiv1:false,
      showdiv2:false,
    },
    methods:{
      greet:function(time){
        return 'Good'+' '+time+' '+this.name;
      },
      increment:function(){
        return this.age++;
      },
      decrement:function(){
        return this.age--;
      }
    }  
  });