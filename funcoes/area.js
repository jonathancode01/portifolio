function calcularAreaRetangulo(l, a){
    if(typeof l !== "number" || typeof a !== "number"){
        throw new Error("Os valores precisam ser numéricos")
    }
    return l * a;
}

function calcularAreaTriangulo(b, a){
    if(typeof b !== "number" || typeof a !== "number"){
        throw new Error("Os valores precisam ser numéricos")
    }
    return (b * a) / 2;
}

function calcularAreaCirculo(c){
    if(typeof c !== "number"){
        throw new Error("Os valores precisam ser numéricos")
    }
    return Math.PI * (c * c)
}