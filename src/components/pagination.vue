<script lang="ts">
import DataJobs from "../services/helpers/allJobs";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
const dataJobs = new DataJobs();

export default {
    setup() {
        const handlePaginationValue = dataJobs.handlePagination();
        return { ...handlePaginationValue };
    },
};
</script>
<template>
    <div class="pb-24 pt-12 max-sm:pt-24">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div class="static max-sm:pt-12 grid grid-cols-3 gap-4 max-sm:grid-cols-1">
                <div v-for="job in paginatedData" :key="job.id" :id="`${job.id}`" class="bg-white p-12">
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
    <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
            <a href="#" @click="backPage"
                class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Précedente</a>
            <a href="#" @click="nextPage"
                class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Suivante</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    {{ ' ' }}
                    <span class="font-medium">1</span>
                    {{ ' ' }}
                    to
                    {{ ' ' }}
                    <span class="font-medium">10</span>
                    {{ ' ' }}
                    of
                    {{ ' ' }}
                    <span class="font-medium">97</span>
                    {{ ' ' }}
                    results
                </p>
            </div>
            <div>
                <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <a href="#" @click="backPage"
                        class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                        <span class="sr-only">Previous</span>
                        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
                    </a>
                    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                    <a href="#" v-for="item in Math.ceil(respData.length / perPage)" :key="item" @click="() => goToPage(item)"
                        class="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">{{ item }}</a>
                    
                    <a href="#" @click="nextPage"
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
