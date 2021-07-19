import { createApp } from "vue";
import App from "./App.vue";
import MovieCard from "./components/MovieCard.vue";

const app = createApp(App);
app.component("movie-card", MovieCard);
app.mount("#app");
