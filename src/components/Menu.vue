<template>
    <div class="bg-primary">

    </div>

    <div class="container">
        <h1>
            <RouterLink :to="{ name: 'home' }" class="navbar-brand">MyNetWork</RouterLink>
        </h1>
        <nav>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <RouterLink :to="{ name: 'home' }" class="nav-link">Fils d'actualités</RouterLink>
                </li>
                <li class="nav-item d-flex align-items-baseline">
                    <RouterLink :to="{ name: 'creer' }" class="nav-link">créer un profil</RouterLink>
                    <!-- <span :class="classBadge">{{ panierStore.nbProduit }}</span> -->
                </li>
                <li class="nav-item d-flex align-items-baseline">
                    <RouterLink :to="{ name: 'identification' }" class="nav-link">se connecter</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router"



</script>