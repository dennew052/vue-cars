<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import CardPost from '@/components/CardPost.vue'

const route = useRoute()

const items = ref([])
const posts = ref([])

const fetchItems = async () => {
  try {
    const { data } = await axios.get(`http://am111.05.testing.place/api/v1/car/${route.params.id}`)
    const { data: data2 } = await axios.get(`http://am111.05.testing.place/api/v1/car/${route.params.id}/posts`)
    items.value = data
    posts.value = data2
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  fetchItems()
})
</script>

<template>
  <div v-if="items.car">
    <div class="font-bold text-center mb-5">{{ items.car.brand_name + ' ' + items.car.model_name }}</div>
    <img :src="items.car.images[0].thumbnail_url" alt="thumbnail">
    <div class="flex p-4">
      <img :src="items.user.avatar.url" alt="Avatar" class="h-12 w-12">
      <div class="pl-3">
        <div class="font-bold">{{ items.user.username }}</div>
        <div>{{ items.car.brand_name + ' ' + items.car.model_name }}</div>
      </div>
    </div>
    <div class="pl-4 font-bold mb-16">{{ items.car.name }}</div>
    <CardPost
      v-for="item in posts.posts"
      :key="item.id"
      :id="item.id"
      :thumbnail="item.img"
      :text="item.text"
      :author="item.author"
      :like_count="item.like_count"
      :comment_count="item.comment_count"
      :created_at="item.created_at"
    />
  </div>
  <div v-else class="text-center">Загрузка...</div>
</template>