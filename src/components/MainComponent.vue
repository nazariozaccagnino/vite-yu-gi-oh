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
            <!-- <ul>
                <li v-for="(item, index) in store.cardArray">
                    {{item.name}}
                </li>
            </ul> -->
            <div class="row">
                <div class="col-3"  v-for="(item, index) in store.cardArray">
                    <div class="card">
                        <img :src="`${this.store.imageUrl}${item.id}.jpg`" class="card-img-top" :alt="item.name">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                                of
                                the
                                card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
import axios from 'axios'
export default {
    name: 'MainComponent',

    data() {
        return {
            store
        }
    },
    created() {
        axios.get(store.apiUrl).then((elements) => {
            this.store.cardArray = elements.data.data
            console.log(this.store.cardArray);

        })
    }
}

</script>

<style lang="scss" scoped></style>