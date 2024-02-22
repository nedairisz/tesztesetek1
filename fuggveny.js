export function parose(szam){
    // Akkor fusson csak le, ha a szám értéke egész szám
    // különben: nem szám, szöveg, stb
    let psE=false
    if (!Number.isNaN(szam)){
        return "ez nem szám"
    }
    if (Number.isInteger(szam)){
        if (szam%2===0){
            psE=true
        }
    }   
    return psE
}

