<script setup lang="ts">
import DataJobs from "../services/helpers/allJobs";
import { reactive } from 'vue';

const dataJobs = new DataJobs();
const getPaginateData = reactive(dataJobs.handlePagination());
</script>
<template>
    <div class="pb-12 sm:pt-24">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            
            <!-- Page -->
            <div class="static max-sm:pt-12 grid grid-cols-3 gap-4 max-sm:grid-cols-1 mt-8 max-sm:mt-1">
                <div v-for="job in getPaginateData.paginatedData" :key="job.id" :id="`${job.id}`" class="bg-white p-12 rounded-lg border border-indigo-500">
                    <p class="text-sm text-gray-500">Intitulé du poste</p>
                    <h2 class="text-2xl mb-6 text-indigo-600 uppercase">{{ job.intitule }} </h2>
                    <div class="line-clamp-4 mb-6">
                        <small class="text-sm text-gray-500">Description du poste</small>
                        <p>{{ job.description }}</p>
                    </div>
                    <div class="mb-6">
                        <small class="text-sm text-gray-500">Commune</small>
                        <p>{{ job.lieuTravail.libelle}}</p>
                    </div>
                    <div class="mb-6">
                        <small class="text-sm text-gray-500">Entreprise</small>
                        <p>
                        <p>{{ job.entreprise.nom}}</p>
                        </p>
                    </div>
                </div>
            </div>
            <!-- <Pagination /> -->
            <div class="flex items-center justify-between mt-12">
                <div class="flex flex-1 justify-between sm:hidden">
                    <a href="#" @click="getPaginateData.backPage"
                        class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Précedente</a>
                    <a href="#" @click="getPaginateData.nextPage"
                        class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Suivante</a>
                </div>
                <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p class="text-md text-gray-400">
                            Page {{ ' ' }}
                            <span class="text-indigo-600">{{ getPaginateData.page }}</span>
                            {{ ' ' }} de {{ ' ' }}
                            <span class="text-indigo-600">{{ Math.ceil(getPaginateData.respData.length / getPaginateData.perPage)
                            }}</span>
                            {{ ' ' }} - {{ ' ' }}
                            <span class="text-indigo-600">{{ getPaginateData.respData.length }}</span>
                            {{ ' ' }} annonces
                        </p>
                    </div>
                    <div>
                        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <a href="#" @click="getPaginateData.backPage()"
                                class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                <span class="sr-only">Précedente</span>
                                <span class="text-gray-400"> {{ `<` }} </span>
                            </a>
                            <div class="pagination">
                                <div class="pagination-content">
                                    <div v-for="(item, ind) in getPaginateData.firstOnes()" :key="item">
                                        <a v-if="ind < 3" href="#" @click="getPaginateData.goToPage(item)"
                                            :class="[getPaginateData.page === item ? 'relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20': 'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20']">{{
                                            item}}
                                        </a>
                                    </div>
                                    <div v-for="(item, ind) in getPaginateData.MiddleOnes()" :key="item">
                                        <a href="#" v-if="ind > 2" @click="getPaginateData.goToPage(item)"
                                            :class="[getPaginateData.page === item ? 'relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20': 'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20']">{{
                                            item }}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <span
                                class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...
                            </span>
                            <a href="#" @click="getPaginateData.goToPage(getPaginateData.lastPage)"
                                class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                {{ getPaginateData.lastOne() }}
                            </a>
                            <a href="#" @click="getPaginateData.nextPage"
                                class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                <span class="sr-only">Suivante</span>
                                <span class="text-gray-400">></span>
                            </a>
                        </nav>
                    </div>
                </div>
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
.pagination a{
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
