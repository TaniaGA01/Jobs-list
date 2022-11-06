<script setup lang="ts">
import DataJobs from "../services/helpers/allJobs";

import { reactive } from 'vue';

const dataJobs = new DataJobs();
const getPaginateData = reactive(dataJobs.handlePagination());

</script>
<template>
    <div class="pb-24 pt-12 max-sm:pt-24">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div class="flex items-center justify-between">
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
                            <span class="font-medium">{{ Math.ceil(getPaginateData.respData.length / getPaginateData.perPage)
                            }}</span>
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
                            <a href="#" @click="getPaginateData.backPage()"
                                class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                <span class="sr-only">Précedente</span>
                                <span> {{ `<` }} </span>
                            </a>
                            <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                            <!-- <a href="#" v-for="item in Math.ceil(respData.length / perPage)" :key="item" @click="() => goToPage(item)"
                                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">{{ item }}
                                    </a> -->
                            <div class="pagination">
                                <div class="pagination-content">
                                    <a href="#" v-for="item in getPaginateData.firstOnes()" :key="item" @click="getPaginateData.goToPage(item)"
                                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">{{
                                        item }}
                                    </a>
                                </div>
                            </div>
                            <span
                                class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">...
                            </span>
                            <a href="#"  @click="getPaginateData.goToPage(getPaginateData.lastPage)"
                                class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                {{ getPaginateData.getLastOne() }}
                            </a>
            
                            <a href="#" @click="getPaginateData.nextPage"
                                class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                                <span class="sr-only">Suivante</span>
                                <span>></span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="static max-sm:pt-12 grid grid-cols-3 gap-4 max-sm:grid-cols-1 mt-6">
                <div v-for="job in getPaginateData.paginatedData" :key="job.id" :id="`${job.id}`" class="bg-white p-12">
                    <p>Intitulé du poste</p>
                    <h2 class="text-2xl mb-6">{{ job.intitule }} : </h2>
                    <div class="line-clamp-4 mb-6">
                        <small>Description du poste :</small>
                        <p>{{ job.description }}</p>
                    </div>
                    <div class="mb-6">
                        <small>Commune :</small>
                        <p>{{ job.lieuTravail.libelle}}</p>
                    </div>
                    <div class="mb-6">
                        <small>Entreprise :</small>
                        <p>
                        <p>{{ job.entreprise.nom}}</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <Pagination /> -->
    
</template>

<style>
.pagination {
    width: 50px;
    height: 38px;
    contain: strict;
}
.pagination-content {
    display: flex;
}
.pagination a{
    width: 50px;
    display: flex;
    justify-content: center;
}
</style>
