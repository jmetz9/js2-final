import Vue from "vue";
import VueRouter from "vue-router";
import CharactersPage from "@/pages/CharactersPage";
import CreateCharacterPage from "@/pages/CreateCharacterPage";
import SearchPage from "@/pages/SearchPage";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path: '/', component: CharactersPage, props: true},
        {name: 'characters', path: '/characters', component: CharactersPage, props: true},
        {name: 'create-a-character', path: '/create-a-character', component: CreateCharacterPage, props: true},
        {name: 'search', path: '/search', component: SearchPage}
    ]
})

export default router;