<script setup lang="ts">
    const props = defineProps({
        respData: Array,
        perPage: Number,
        firstPage: Number,
        firstOnes: Function,
        middleOnes: Function,
        lastPage: Number,
        currentPage: Number,
        goToPage: Function,
        nextPage: Function,
        backPage: Function
    });
</script>
<template>
    <!-- <Pagination /> -->
    <div class="flex items-center justify-between mt-12">
        <div class="flex flex-1 justify-between sm:hidden">
            <a href="#" @click="props.backPage"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Précedente</a>
            <a href="#" @click="props.nextPage"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Suivante</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-md text-gray-400">
                    Page {{ ' ' }}
                    <span class="text-indigo-600">{{ props.currentPage }}</span>
                    {{ ' ' }} de {{ ' ' }}
                    <span class="text-indigo-600">{{ Math.ceil(props.respData.length /
                    props.perPage)
                    }}</span>
                    {{ ' ' }} - {{ ' ' }}
                    <span class="text-indigo-600">{{ props.respData.length }}</span>
                    {{ ' ' }} annonces
                </p>
            </div>
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a href="#" @click="props.firstPage()"
                        class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                        <span class="sr-only">Première</span>
                        <span class="text-gray-400"> {{ `<<` }} </span>
                    </a>
                    <a href="#" @click="props.backPage"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                        <span class="sr-only">Précedente</span>
                        <span class="text-gray-400"> {{ `<` }} </span>
                    </a>
                    <div class="pagination">
                        <div class="pagination-content">
                            <div v-for="(item, idx) in props.firstOnes" :key="item">
                                <a v-if="idx < 3" href="#" @click="props.goToPage(item)"
                                    :class="[props.currentPage === item ? 'relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20': 'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20']">{{
                                    item}}
                                </a>
                            </div>
                            <div v-for="(item, idx) in props.middleOnes" :key="item">
                                <a href="#" v-if="idx > 2" @click="props.goToPage(item)"
                                    :class="[props.currentPage === item ? 'relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20': 'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20']">{{
                                    item }}
                                </a>
                            </div>
                        </div>
                    </div>
                    <span
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...
                    </span>
                    <a href="#" @click="props.goToPage(props.lastPage())"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                        {{ props.lastPage() }}
                    </a>
                    <a href="#" @click="props.nextPage"
                        class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                        <span class="sr-only">Suivante</span>
                        <span class="text-gray-400">></span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pagination {
    width: 151px;
    height: 38px;
    contain: strict;
    display: flex;
}

.pagination-content {
    display: flex;
}

.pagination a {
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
