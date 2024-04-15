import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?language=it&num=20&offset=0',
    imageUrl: 'https://images.ygoprodeck.com/images/cards_small/',
    cardArray: [],


});