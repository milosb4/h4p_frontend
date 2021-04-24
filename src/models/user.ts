export class User {
    id: string;
    username: string;
    role: string;
    email: string;
    token?: string;

    constructor(id: string, username: string, role: string, email: string, token: string) {
        this.id = id;
        this.username = username;
        this.role = role;
        this.email = email;
        this.token = token;
    }
}
