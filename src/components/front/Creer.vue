<template>
    <h1>Vous identifiez !</h1>
    <div class="row">
        <div class="col">
            <h2 class="h4 text-center">créer un compte</h2>
            <FormLoginVue :btn="'success'" :action="'creer'" />
        </div>
    </div>
</template>
<script setup>
import FormLoginVue from './FormLogin.vue';
</script>