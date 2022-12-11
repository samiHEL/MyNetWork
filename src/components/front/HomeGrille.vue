<template>
    <div class="row">
        <article v-for="produit, index in articles" :key="index" class="col-8 bg-light border mt-2">
            <h2>{{ produit.nom }}</h2>
            <p class="mb-0">Description : {{ produit.description }} </p>
            <img :src="produit.image" alt="" class="img-fluid">
            <div class="d-flex justify-content-between align-items-baseline mt-3 bg-light border mt-2">
                <p class="mb-0">like : {{ produit.like }} </p>
            </div>
            <div class="d-flex justify-content-between align-items-baseline mt-3">
                <h1 class="col-8">Commentaires :</h1>
            </div>
            <div class="d-flex justify-content-between align-items-baseline mt-3">
                <strong>
                    <p class="col-8"> {{ produit.commentaires[0].pseudo }} </p>
                </strong>
            </div>
            <div class="d-flex justify-content-between align-items-baseline mt-3bg-light border mt-2">
                <p class="col-8"> {{ produit.commentaires[0].contenu }} </p>
                <p class="col-8"> Le {{ new Date(produit.commentaires[0].dt).getDate() + "/" + new
                        Date(produit.commentaires[0].dt).getMonth() + "/" + new Date(produit.commentaires[0].dt
                        ).getFullYear()
                }} à {{ new Date(produit.commentaires[0].dt).getHours() + ":" + new
        Date(produit.commentaires[0].dt).getMinutes() + ":" + new Date(produit.commentaires[0].dt
        ).getSeconds()
}} </p>

            </div>


        </article>
    </div>
</template>

<script setup>
import ArticlesApi from '../../services/articles';
import { RouterLink } from "vue-router";
import { ref } from "vue";
let articles = ref([]);

async function getArticles() {
    const api = new ArticlesApi()
    const data = await api.getAll()
    articles.value = data;
}
await getArticles();
</script>