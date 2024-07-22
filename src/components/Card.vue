<script setup>
const props = defineProps({
  id: Number,
  thumbnail: String
})
</script>

<template>
  <router-link :to="`car/${id}`">
    <img :src="thumbnail" alt="thumbnail" class="object-cover h-52 w-52">
  </router-link>
</template>