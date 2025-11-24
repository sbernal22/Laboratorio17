const cargarUsuario=(callback)=>{
    setTimeout(()=>{
        callback({
            id: 1,
            nombre: "Jerald"
        }); 
    }, parseInt(Math.random()*701+800));
}
cargarUsuario((obj)=>{
    console.log("Usuario cargado:", obj.nombre, "(ID:", obj.id+")");
});