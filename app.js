const app = new Vue({
    el:'#app',
    data:{
        titulo:'Task',
        tareas:[],
        nuevaTarea:''
    },
    methods:{
        agregarTarea: function(){
             this.tareas.push({
                 nombre:this.nuevaTarea,
                 estado:false
             });
             console.log(this.tareas);
             this.nuevaTarea = ''
        },
        editarTarea: function(index){
            this.tareas[index].estado = true
            localStorage.setItem('tareas',JSON.stringify(this.tareas))
        },
        eliminarTarea: function(index){
            this.tareas.splice(index,1)
            localStorage.setItem('tareas',JSON.stringify(this.tareas))
        },
       
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('tareas'))
        if(datosDB === null){
            this.tareas = []
        }else{
            this.tareas = datosDB
        }
    }
})