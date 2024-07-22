<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import Card from '@/components/Card.vue'

const items = ref([])

const fetchItems = async () => {
  try {
    const { data } = await axios.get('https://am111.05.testing.place/api/v1/cars/list')
    items.value = data
  } catch (e) {
    console.log(e)
  }
}

onMounted(() => {
  fetchItems()
})
</script>

<template>
  <div class="mb-5 text-center">Главная страница - Список автомобилей</div>
  <div class="grid gap-1" style="grid-template-columns: repeat(2, 1fr)">
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :thumbnail="item.thumbnail">
    </Card>
  </div>
</template>