<template >
    <div class="bg-light border mt-2">
        <h1>Quoi de neuf ? </h1>
        <input type="text" id="name" name="name" required minlength="5" maxlength="100" size="80"><br>
        <button class="btn btn-success mb-3" @click.prevent="submit">Enregistrer</button>
    </div>
    <Suspense>
        <template #default>
            <HomeGrille />
        </template>
        <template #fallback>
            données en cours de chargement
        </template>
    </Suspense>
</template>

<script setup>
import { Suspense } from "vue";
import HomeGrille from "./HomeGrille.vue";

</script>