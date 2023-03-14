export class SignUpData {
    readonly email: string
    readonly password: string

    constructor(
        email: string,
        password: string,
    ) {
        this.email = email
        this.password = password
    }
}