<template>
  <section>
    <div class="topnav">
      <input
        type="text"
        placeholder="Search.."
        id="moviename"
        name="moviename"
        v-model="searchStr"
      />
      <button @click="submitMovie">Search</button>
    </div>
    <!-- add search bar here  -->
    <header><h1>Movie search</h1></header>
    <ul>
      <movie-card
        v-for="movie in Movies"
        :key="movie.imdbID"
        :title="movie.Title"
        :year="movie.Year"
        :type="movie.Type"
        :poster="movie.Poster"
      ></movie-card>
    </ul>
  </section>
</template>

<script>
import MovieCard from "./components/MovieCard.vue";

//www.omdbapi.com/?s=${searchStr}&apikey=961965

export default {
  components: { MovieCard },
  data() {
    return {
      searchStr: "",
      Movies: [],
    };
  },
  methods: {
    submitMovie() {
      fetch(`https://www.omdbapi.com/?s=${this.searchStr}&apikey=961965`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        // data is not an array,its a javascript object with id as property name and in there we have nested object wiht name and value
        .then((data) => {
          console.log(data);
          this.Movies = data.Search;
          console.log(this.Movies);
        });
    },
  },
};
</script>

<style>
/* Style the search box inside the navigation bar */
.topnav input[type="text"] {
  float: left;
  padding: 6px;
  /* border: none; */
  margin-top: 8px;
  margin-right: 16px;
  font-size: 17px;
}

/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
