<template>
  <section>
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

export default {
  components: { MovieCard },
  data() {
    return {
      Movies: [
        {
          Title: "Loki",
          Year: "2021–",
          imdbID: "tt9140554",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg",
        },
        {
          Title: "Thor & Loki: Blood Brothers",
          Year: "2011–",
          imdbID: "tt1922373",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzM4OGM2NjYtMDBmOC00M2JiLTk1NTktM2M1YWQ5N2JjOWVlXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
        },
        {
          Title: "The Good, the Bart, and the Loki",
          Year: "2021",
          imdbID: "tt14957270",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTI1NTM0NmYtNzZmMy00ZWJkLTliNDUtZmExMjRlY2ViNmM3XkEyXkFqcGdeQXVyMjMxOTcxOTI@._V1_SX300.jpg",
        },
        {
          Title: "Loki: Arnaldo Baptista",
          Year: "2008",
          imdbID: "tt1517095",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNGRhMjAwZDUtNzRmMS00YjkyLTg1MTMtZWEyMjYwMWVhZTBhXkEyXkFqcGdeQXVyMTU2ODc4ODQ@._V1_SX300.jpg",
        },
        {
          Title: "Mythical Detective Loki Ragnarok",
          Year: "2003–",
          imdbID: "tt0839199",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjM3NDM4MTM0NV5BMl5BanBnXkFtZTgwNTg1NjcyNTE@._V1_SX300.jpg",
        },
        {
          Title: "Loki 7",
          Year: "2016",
          imdbID: "tt5776736",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYmE4ODEyNmItOTdiNi00ZjNkLTk4MDItNTJhYmQ0ZmIwMjE1XkEyXkFqcGdeQXVyNDY2NjE3NDQ@._V1_SX300.jpg",
        },
        {
          Title: "A Brothers' Journey: Thor & Loki",
          Year: "2014",
          imdbID: "tt5484872",
          Type: "movie",
          Poster: "N/A",
        },
        {
          Title: "Loki and SageKing Go to GenCon",
          Year: "2010",
          imdbID: "tt1772964",
          Type: "movie",
          Poster: "N/A",
        },
        {
          Title: "The Mythical Detective Loki",
          Year: "2013–",
          imdbID: "tt2719206",
          Type: "series",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGI2MDcxYjMtNWYzMi00MmZlLWIyMDctMmQzOTVmMjVhNGEzXkEyXkFqcGdeQXVyNjM5NjEyMjE@._V1_SX300.jpg",
        },
        {
          Title: "Loki: The God of Mischief",
          Year: "2014",
          imdbID: "tt6749932",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNWQwZTM1YTItMDE5ZC00OTQ1LWI2MDMtNTllMDU4ZDA2MTI5XkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus() {},
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
