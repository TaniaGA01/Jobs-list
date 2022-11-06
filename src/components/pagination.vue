<script setup lang="ts">
import DataJobs from "../services/helpers/allJobs";
import { reactive } from 'vue';

const dataJobs = new DataJobs();
const getPaginateData = reactive(dataJobs.handlePagination());

const emit = defineEmits(['backPage', 'getPaginateData.backPage', 'firstOnes', 'getPaginateData.firstOnes'])
const sendBackPage = () => {    
    emit('backPage', getPaginateData.backPage())
};

const sendFirstOnes = () => {
    emit('firstOnes', getPaginateData.firstOnes)
}
</script>
<template>
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
            <a href="#" @click="getPaginateData.backPage"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Précedente</a>
            <a href="#" @click="getPaginateData.nextPage"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Suivante</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Page
                    {{ ' ' }}
                    <span class="font-medium">{{ getPaginateData.page }}</span>
                    {{ ' ' }}
                    de
                    {{ ' ' }}
                    <span class="font-medium">{{ Math.ceil(getPaginateData.respData.length / getPaginateData.perPage) }}</span>
                    {{ ' ' }}
                    -
                    {{ ' ' }}
                    <span class="font-medium">{{ getPaginateData.respData.length }}</span>
                    {{ ' ' }}
                    annonces
                </p>
            </div>
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a href="#" @click="sendPaginateData"
                        class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                        <span class="sr-only">Previous</span>
                        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                    </a>
                    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                    <!-- <a href="#" v-for="item in Math.ceil(respData.length / perPage)" :key="item" @click="() => goToPage(item)"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">{{ item }}
                    </a> -->
                    <div class="">
                        <a href="#" v-for="item in sendFirstOnes" :key="item" @click="getPaginateData.goToPage(item)"
                            class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">{{ item }}
                        </a>
                    </div>
                    <span
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...
                    </span>
                    <a href="#" v-for="item in getPaginateData.getLastOnes()" :key="item" @click="getPaginateData.goToPage(item)"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                        {{ item }}
                    </a>

                    <a href="#" @click="getPaginateData.nextPage"
                        class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                        <span class="sr-only">Next</span>
                        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
                    </a>
                </nav>
            </div>
        </div>
    </div>
</template>

<style>

</style>
