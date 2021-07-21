<template>
  <h1>This is movie details</h1>
  <img :src="Movies.Poster" />
  <h2>Title:{{ Movies.Title }}</h2>
  <h2>Released Date:{{ Movies.Released }}</h2>
  <h2>Actors:{{ Movies.Actors }}</h2>
  <h2>IMDB Ratings:{{ Movies.imdbRating }}</h2>
</template>

<script>
export default {
  data() {
    return {
      imdbid: "",
      Movies: {},
    };
  },

  created() {
    this.imdbid = this.$route.params.moviedetail;
    console.log(this.$route.params);
    console.log(this.imdbid);
    this.submitMovie();
  },
  methods: {
    submitMovie() {
      fetch(`http://www.omdbapi.com/?i=${this.imdbid}&apikey=961965
`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        // data is not an array,its a javascript object with id as property name and in there we have nested object wiht name and value
        .then((data) => {
          console.log(data);
          this.Movies = data;

          //data cannot bea ccessed directly
          console.log(this.Movies);
        });
    },
  },
};
</script>

<style scoped></style>
