<script setup lang="ts">
import { reactive } from 'vue';
import PaginationServices from "../services/helpers/paginationServices"
import Pagination from '../components/pagination.vue'

const paginationServices = new PaginationServices();
const getPaginateData = reactive(paginationServices.handlePagination());

</script>
<template>
    <div class="pb-12">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <Pagination
                :firstOnes="getPaginateData.firstOnes()"
                :MiddleOnes="getPaginateData.MiddleOnes()"
                :goToPage="getPaginateData.goToPage"
                :currentPage="getPaginateData.page"
                :nextPage="getPaginateData.nextPage"
                :backPage="getPaginateData.backPage"
            />
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
            <!-- <Pagination :firstOnes="getPaginateData.firstOnes()" :MiddleOnes="getPaginateData.MiddleOnes()"
                :goToPage="getPaginateData.goToPage" :currentPage="getPaginateData.page" :nextPage="getPaginateData.nextPage"
                :backPage="getPaginateData.backPage" /> -->
        </div>
    </div>
</template>

<style>

</style>
