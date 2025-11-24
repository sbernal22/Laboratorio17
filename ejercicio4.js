try{
    const texto= "{ nombre: 'Jeral' }";
    let obj=JSON.parse(texto);
    console.log("Objeto:", obj);
}
catch(e){
    console.log(e.name);
    console.log(e.message);
}