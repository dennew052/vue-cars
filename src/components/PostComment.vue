<script setup>
const props = defineProps({
  id: Number,
  created_at: String,
  text: String,
  username: String,
  auto_name: String,
  avatar: String
})

const date = new Date(props.created_at)
</script>

<template>
  <div class="flex p-4 pr-0 border-t-2">
    <img :src="avatar" alt="avatar" class="rounded-full h-12 w-12">
    <div class="pl-3 w-full">
      <div class="flex justify-between">
        <div class="font-bold">{{ username }}</div>
        <div class="text-neutral-400">{{ date.toLocaleDateString('ru-KZ', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }) }}
        </div>
      </div>
      <div class="text-neutral-400"> {{ auto_name }}</div>
      <div class="pt-4">{{ text }}</div>
    </div>
  </div>

</template>