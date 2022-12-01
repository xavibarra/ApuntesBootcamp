<template>
<section>
    <h1>Exercise 4</h1>
    <h2>National teams</h2>
    <div v-for="(footballTeam,key, index) in footballTeams" :key="index">
        <ul class="back">
            <li>{{footballTeam.nationalTeam}}</li>
            <li>{{footballTeam.bestPlayer}}</li>
            <li>{{footballTeam.rankingFifa}}</li>
        </ul>
    </div>
</section>
</template>

<script setup>
import { reactive } from "vue";
const footballTeams = reactive([
    {
        nationalTeam: "Brasil",
        bestPlayer: "Neymar",
        rankingFifa:1
    },
    {
        nationalTeam: "Argentina",
        bestPlayer: "Messi",
        rankingFifa:3
    },
    {
        nationalTeam: "España",
        bestPlayer: "Pedri",
        rankingFifa:7 
    }

]);
</script>

<style scoped>
    h1{
        background: whitesmoke;
    }
    ul{
        text-align: left;
        margin: 10px;
    }
</style>