import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    options:{
        params: {        
            lang:'language=it',
            num: 20,
            offset: 0,
        },
    },
    endpoints:{
        cards:'cardinfo.php?',
        archetypes: 'archetypes.php',
    },    
    imageUrl: 'https://images.ygoprodeck.com/images/cards_small/',
    cardArray: [],
    loading: false,
    archeType: false,
    textSearch: false,
    archetypeList: [],
});