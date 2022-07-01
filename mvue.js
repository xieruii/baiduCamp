class MVue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        this.$options = options;
    }
    if(){
        //1.实现一个数据观察者
        //2.实现一个指令观察者
        new Compile(this.$el,this)
    }
}