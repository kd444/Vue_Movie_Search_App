<template>
  <li>
    <img :src="poster" />
    <h2><strong></strong>{{ title }}</h2>
    <ul>
      <li><strong>Year:</strong>{{ year }}</li>
      <li><strong>Type:</strong>{{ type }}</li>

      <button>
        <router-link :to="`/MovieDetails/${imdbId}`">See Details</router-link>
      </button>
    </ul>
  </li>
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
