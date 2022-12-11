import { defineStore } from "pinia"
import { UserApi } from "../services/user"

export const useUserStore = defineStore("userStore", {
    state: () => {
        return {
            user: {},
            livraison: {}
        }
    },
    actions: {
        add: async function (identifiant) {
            const userApi = new UserApi();

            // vérifier si il y a pas déjà un user qui a déjà utilisé cet email 
            const verif = await userApi.existe(identifiant.email)

            console.log(verif, identifiant.email);

            if (!verif) return { message: "l'email est déjà utilisé" }

            // ajouter dans la base de donnée 
            // requete ajax pour ajouter un profil user dans la base de données
            const user = await userApi.create(identifiant)

            // remplir notre state 
            this.user = {
                email: user.email,
                role: user.role,
                isLogged: true
            };

            return { message: "ok" };
        },
        login: async function (identifiant) {
            const userApi = new UserApi();


            const verif = await userApi.verif(identifiant.email, identifiant.password)


            const user = await userApi.connexion(identifiant)
            console.log(user[0]);

            this.user = {
                email: user[0].email,
                role: user[0].role,
                isLogged: true
            };

            return { message: "ok" };

        }


    },
    logout: function () { },
    addAdresseLivraison: function (adresse) {
        this.livraison = adresse
    }
}

)