<template>
  <div class="info">
    <img :src="poster" />
    <h3>{{ title }}</h3>
    <div><strong>Year:</strong>{{ year }}</div>
    <div><strong>Type:</strong>{{ type }}</div>

    <button class="btn">
      <router-link :to="`/MovieDetails/${imdbId}`">See Details</router-link>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String },
    year: { type: String },
    type: { type: String },
    poster: { type: String },
    imdbId: { type: String },
    // image: { type:  },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.info {
  margin-bottom: 3rem;
}

.info div {
  margin-bottom: 1rem;
}
</style>
