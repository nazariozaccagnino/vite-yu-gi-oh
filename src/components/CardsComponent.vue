<template>
    <div class="my-4 d-flex">
        <FilterComponent @listSearch="archetypeSearch" @textsearch="searchByText"/>
    </div>
    <div class="text-center">
        <h4>Card caricate: {{ this.store.cardArray.length }}</h4>
        <div v-if="!store.errorTrigger" class="bg-warning d-inline">{{this.store.errormsg.message}}</div>
    </div>
    <div class="row">
        <div class="col-3 d-flex align-items-stretch p-2" v-for="(item, index) in store.cardArray">
            <div class="card p-2">
                <img :src="`${this.store.imageUrl}${item.id}.jpg`" class="card-img-top" :alt="item.name">
                <h5 class="card-title text-center">{{ item.name }}</h5>
                <h6 class="subtitle">Tipo: {{ item.type }}</h6>
                <div class="card-body">
                    <p class="card-text">{{ item.desc }}</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
import FilterComponent from './FilterComponent.vue'
import axios from 'axios'

export default {
    name: 'CardsComponent',
    components: {
        FilterComponent
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getCards() {            
            this.store.loading = true;
            axios.get(this.store.apiUrl + this.store.endpoints.cards, this.store.options).then((elements) => {
                this.store.cardArray = elements.data.data
                console.log(this.store.cardArray);
            })
                .catch((error) => {
                    this.errorTrigger = true,
                    this.store.errormsg = error
                    console.log(this.store.errormsg.message);
                })
                .finally(() => {
                    this.store.loading = false;
                });
        },
        archetypeSearch(){
            console.log(this.store.typelist);
            if(this.store.typelist){
                this.store.options.params.archetype = this.store.typelist
            } 
            this.getCards()
        },
        searchByText(){
            console.log(this.store.textinput);
            if(this.store.textinput){
                this.store.options.params.name = this.store.textinput
            } else{
                delete this.store.options.params.name
            }
                this.getCards()

        }
    },
    created() {
        this.getCards()
    }
}
</script>

<style lang="scss" scoped>
.subtitle {
    text-align: center;
    font-size: 1rem;
    color: grey;
}
</style>