export default class Login {
    constructor() {
        this.login = document.getElementsByClassName('login')[0]
        this.senha = document.getElementsByClassName('senha')[0]
    }

    fazerLogin() {
        if (this.login.value === 'admin@admin' && this.senha.value === 'admin') {
            console.log('certo')
        } else {
            console.log('errado')
        }
    }

}
