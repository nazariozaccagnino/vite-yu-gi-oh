import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?language=it&num=20&offset=0&sort=new',
    // apiUrl:'https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Effect%20Monster&attribute=wood&num=2', error 400 test
    imageUrl: 'https://images.ygoprodeck.com/images/cards_small/',
    cardArray: [],
    loading: false,
    archeType: false,
    textSearch: false,
});