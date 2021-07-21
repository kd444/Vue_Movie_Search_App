import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import MovieCard from "./components/MovieCard.vue";
import MovieDetails from "./components/MovieDetails.vue";
import MainPage from "./components/MainPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/MovieDetails/:moviedetail", component: MovieDetails },
    { path: "/", component: MainPage },
  ],
});

const app = createApp(App);
app.component("movie-card", MovieCard);
app.component("movie-details", MovieDetails);
app.use(router);
app.mount("#app");
