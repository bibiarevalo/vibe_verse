async function cadastro (){
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const cmail = document.getElementById('cmail').value
    const password = document.getElementById('password').value
    const cpassword = document.getElementById('cpassword').value
    const termo = document.getElementById('termo').value

    if(email !== cmail){
        alert('os emails sao diferentes')
        return
    }

    if(password !== cpassword){
        alert('as senhas são diferentes')
        return
    }

    try{
        const response = await fetch('http://localhost:3000/cadastro',{
        method:'POST',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify({nome,email,senha})
        })

       
    }catch (error){
        alert('erro ao cadastrar')
        console.error(error)
    }
}