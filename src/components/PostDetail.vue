<script setup>

import { computed, onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import PostComment from '@/components/PostComment.vue'
import CardPost from '@/components/CardPost.vue'

const route = useRoute()

const props = defineProps({
  id: Number
})

// https://am111.05.testing.place/api/v1/post/563

const items = ref([])

const fetchItems = async () => {
  try {
    const { data } = await axios.get(`https://am111.05.testing.place/api/v1/post/${route.params.id}`)
    items.value = data
  } catch (e) {
    console.log(e)
  }
}

const date = computed(() => new Date(items.value.post.created_at))

onMounted(() => {
  fetchItems()
})
</script>

<template>
  <div v-if="items.comments">
    <img :src="items.post.img" alt="thumbnail">
    <div class="flex p-4">
      <img :src="items.post.author.avatar.url" alt="Avatar" class="h-12 w-12">
      <div class="pl-3">
        <div class="font-bold">{{ items.post.author.username }}</div>
        <div>{{ items.post.author.main_auto_name }}</div>
      </div>
    </div>
    <div class="pb-4">{{ items.post.text }}</div>
    <div class="flex justify-between mb-4">
      <div class="flex">
        <img src="/like-1.png" alt="like-1" class="w-fit h-fit">
        <span class="pl-2 -mt-0.5">{{ items.post.like_count }}</span>
      </div>
      <div class="flex">
        <img src="/comment.png" alt="like-1" class="w-fit h-fit">
        <span class="pl-2 -mt-0.5">{{ items.post.comment_count }}</span>
      </div>
      <div class="flex">
              <span class="pl-2 -mt-0.5 text-neutral-400">{{ date.toLocaleDateString('ru-KZ', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              }) }}</span>
      </div>
    </div>
    <PostComment
      v-for="item in items.comments"
      :key="item.id"
      :id="item.id"
      :created_at="item.created_at"
      :text="item.text"
      :username="item.user.username"
      :auto_name="item.user.main_auto_name"
      :avatar="item.user.avatar.url"
    />
  </div>
  <div v-else class="text-center">Загрузка...</div>

</template>