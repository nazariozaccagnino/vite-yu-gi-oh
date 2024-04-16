<template>
    <div class="container">
        <div class="my-4 d-flex">
            <FilterComponent />
        </div>
        <div class="my-4">
            <CardsComponent />
            <!-- <CardsComponent v-if="store.loading"/> -->
            <!-- <LoadingComponent v-else/> -->
        </div>
    </div>
</template>

<script>
import { store } from '../data/store.js';
import CardsComponent from './CardsComponent.vue';
import LoadingComponent from './LoadingComponent.vue'
import FilterComponent from './FilterComponent.vue'


export default {
    name: 'MainComponent',
    components: {
        LoadingComponent,
        CardsComponent,
        FilterComponent
    },
    data() {
        return {
            store
        }
    },
}


</script>

<style lang="scss" scoped></style>
