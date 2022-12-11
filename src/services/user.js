export class UserApi {

    url = "http://localhost:3004/users"

    async create(identifiants) {
        try {
            const options = {
                method: "POST",
                body: JSON.stringify({ ...identifiants, role: "client" }),
                headers: {
                    "content-type": "application/json"
                }
            }
            const reponse = await fetch(this.url, options)
            const data = await reponse.json();
            return data;
        } catch (ex) {
            console.log(ex)
        }
    }

    async existe(email) {
        try {
            const reponse = await fetch(`http://localhost:3004/users?email=${email}`)

            const data = await reponse.json();
            return data.length === 0 ? true : false;
        } catch (ex) {
            console.log(ex)
        }
    }
    async verif(email, password) {
        try {

            const reponse = await fetch(`http://localhost:3004/users?email=${email}&password=${password}`)

            const data = await reponse.json();
            return data.length === 0 ? true : false;
        } catch (ex) {
            console.log(ex)
        }
    }
    async connexion(identifiant) {
        try {
            const options = {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            }
            const reponse = await fetch(`http://localhost:3004/users?email=${identifiant.email}`, options)

            const data = await reponse.json();
            return data
        } catch (ex) {
            console.log(ex)
        }
    }

}

