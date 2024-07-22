<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: Number,
  thumbnail: String,
  text: String,
  author: Object,
  like_count: Number,
  comment_count: Number,
  created_at: String
})

const maxLength = 100

const truncatedText = computed(() => {
  if (props.text.length <= maxLength) {
    return props.text
  } else {
    return props.text.substring(0, maxLength) + '...'
  }
})

const date = new Date(props.created_at)
</script>

<template>
  <router-link :to="`post/${id}`">
    <img :src="thumbnail" alt="thumbnail">
    <div class="shadow-2xl rounded-xl p-4 mb-5">
      <div class="flex pb-4">
        <img :src="author.avatar.url" alt="Avatar" class="h-12 w-12">
        <div class="pl-3">
          <div class="font-bold">{{ author.username }}</div>
          <div>{{ author.main_auto_name }}</div>
        </div>
      </div>
      <div class="mb-5"><span class="font-bold">{{ author.username + ' ' }}</span>{{ truncatedText }}</div>
      <div class="flex justify-between">
        <div class="flex">
          <img src="/like-1.png" alt="like-1" class="w-fit h-fit">
          <span class="pl-2 -mt-0.5">{{ like_count }}</span>
        </div>
        <div class="flex">
          <img src="/comment.png" alt="like-1" class="w-fit h-fit">
          <span class="pl-2 -mt-0.5">{{ comment_count }}</span>
        </div>
        <div class="flex">
          <span class="pl-2 -mt-0.5 text-neutral-400">{{ date.toLocaleDateString('ru-KZ', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }) }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>