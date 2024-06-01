//metodo para gerar um username diferente toda vez que for cadastrar um usuario
export function gerarUsername() {
    const randomNumber = Math.floor(Math.random() * 100)
    return 'user'+randomNumber;
}