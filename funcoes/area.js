function calcularAreaRetangulo(l, a){
    if(typeof l !== "number" || typeof a !== "number"){
        throw new Error("Os valores precisam ser numéricos")
    }
    return l * a;
}