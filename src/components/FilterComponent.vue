<template>
    <div>
        <select class="form-select" @change="searchBy(type)" v-model="type">
            <option default=""></option>
            <option value="archetypes">Archetipi</option>
            <option value="textsearch">Testo</option>
        </select>
    </div>
    <div>
        <div class="mx-3" :class="{'d-none': !store.archeTypeSelect}">
            <select class="form-select" @change="$emit('listSearch')" v-model="store.typelist">
                <option default :value="archetypes.archetype_name" v-for="archetypes in store.archetypeList">{{archetypes.archetype_name}}</option>
            </select>
        </div>
        <div :class="{'d-none': !store.textSearch}">textSearch</div>

    </div>
</template>

<script>
import { store } from '../data/store.js';
import axios from 'axios';


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
                this.store.archeTypeSelect = true;
                this.store.textSearch = false;                
            } if (type === 'textsearch'){               
                this.store.textSearch = true;
                this.store.archeTypeSelect = false;
            } if (type === ''){
                this.store.textSearch = false;
                this.store.archeTypeSelect = false;
            }
        },
        getAllArchetypes(){
            axios.get(this.store.apiUrl + this.store.endpoints.archetypes).then((el)=>{
                this.store.archetypeList = el.data.slice(0, 20)
                console.log(this.store.archetypeList);
            })

        },
    },
    mounted(){
        this.getAllArchetypes()
    }
}
</script>

<style lang="scss" scoped></style>