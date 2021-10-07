//Completa los valores de la variables que se encuentran a continuacion reemplazando el valor undefined, por los "TIPOS DE DATOS PRIMITIVOS", para pasar los Test propuestos.

const soyUnaVariableNoDefinida = undefined;

const comoEsElAmorDeElla = null;

const pertenecesAlBootcampDeReact = true;

const unNumero = 1;

const otroNumero = 2;

const miNombreEs = "Ali Cruz";

const unObjeto = {nombre:"ali",
                  apellido:"cruz",
                  id:1  };

const unArreglo = [1,2,4,5];

const unArregloDeObjetos = [unObjeto,{nombre:"capo"}];

const unObjetoConPropiedadArray = {array:[1,43,5]};

const unaFuncion = function sumar(a){return a +b }  ; 

const unaFuncionQueRetorneUnArray = ()=>{
    return [2,4,4]
};

const unaFuncionQueRetorneUnArrayDeObjetos = function sumar(a){return unArregloDeObjetos };

const unaFuncionQueRetorneUnObjetoDeObjetos = ()=>{
    
    return {
        perro:{
            color:"blanco"
        },
        gato:{
            color:"negro"
        }
    }
     
};

const unaFuncionQueRetorneUnObjetoConPropiedadMuchoTexto = function objpro(){
    return {nombre:"pero", muchoTexto:"fkmareoifaoimeoifamoeiia"}
};

const unaFuncionQueRetorneUnObjetoConPropiedadMuchoTextoYValorTuNombre = ()=>{
    return {nombre:"pero", muchoTexto:"tu nombre"}
};

const unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre = ()=>{
    return {array:[{muchoMasTexto:"Ali Cruz"}]}
};

const stapPlis = false;

// NO MODIFIQUES NADA DE AQUI ABAJO ↓↓↓↓↓↓↓↓↓ 
module.exports = {
    soyUnaVariableNoDefinida,
    comoEsElAmorDeElla,
    pertenecesAlBootcampDeReact,
    unNumero,
    miNombreEs,    
    otroNumero,
    unObjeto,
    unArreglo,
    unArregloDeObjetos,
    unObjetoConPropiedadArray,
    unaFuncion,
    unaFuncionQueRetorneUnArray,
    unaFuncionQueRetorneUnArrayDeObjetos,
    unaFuncionQueRetorneUnObjetoDeObjetos,
    unaFuncionQueRetorneUnObjetoConPropiedadMuchoTexto,
    unaFuncionQueRetorneUnObjetoConPropiedadMuchoTextoYValorTuNombre,
    unaFuncionQueRetorneUnObjetoConPropiedadArrayEnLaPrimeraPosicionTieneOtroObjetoConPropiedadMuchoMasTextoConValorTuNombre,
    stapPlis,
};