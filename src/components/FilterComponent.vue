<template>
    <div>
        <select class="form-select" @change="$emit('filterCard', this.status)" v-model="status">
            <option value="">Tutte</option>
            <option value="archetypes">Archetipi</option>
            <option value="textsearch">Testo</option>
        </select>
    </div>
</template>

<script>
import {store} from '../data/store.js';

export default {
    name: 'FilterComponent',
    data(){
        return{
            status: '',
        }
    }
}
</script>

<style lang="scss" scoped></style>