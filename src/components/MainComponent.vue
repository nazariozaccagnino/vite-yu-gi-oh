<template>
    <div class="container">
        <div>
            <div class="dropdown my-4">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown button
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
        </div>
        <div class="my-4">
            <ul>
                <li v-for="(item, index) in store.cardArray">
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
import axios from 'axios'
export default {
    name: 'MainComponent',

data(){
    return{
        store
    }
},
    created(){
        axios.get(store.apiUrl).then((elements)=>{
            this.store.cardArray = elements.data.data
        })
        console.log(this.store.singleCard);
    }
}

</script>

<style lang="scss" scoped></style>