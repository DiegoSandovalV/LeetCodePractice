const generateCode = () =>{
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    let code = ""

    for(let i=0; i<6;i++){
        let random = Math.random()*62
        code += chars.charAt(random)
    }

    return code
}

console.log(generateCode())