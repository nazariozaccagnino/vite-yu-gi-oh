<template>
    <div>
        <select class="form-select" @change="searchBy(type)" v-model="type">
            <option default=""></option>
            <option value="archetypes">Archetipi</option>
            <option value="textsearch">Testo</option>
        </select>
    </div>
    <div>
        <div class="mx-3" :class="{'d-none': !store.archeType}">
            <select class="form-select" @change="$emit('archetySearch', this.archetype)" v-model="archetype">
                <option value="">Tutte</option>
            </select>
        </div>
        <div :class="{'d-none': !store.textSearch}">textSearch</div>

    </div>
</template>

<script>
import { store } from '../data/store.js';

export default {
    name: 'FilterComponent',
    data() {
        return {
            status: '',
            store
        }
    },
    methods:{
        searchBy(type){
            console.log(type);
            if(type === 'archetypes'){
                this.store.archeType = true;
                this.store.textSearch = false;

                
            } if (type === 'textsearch'){               
                this.store.textSearch = true
                this.store.archeType = false;

            } if (type === ''){
                this.store.textSearch = false
                this.store.archeType = false;
            }
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped></style>