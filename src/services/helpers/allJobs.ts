import { onMounted, reactive, ref, computed, onBeforeMount } from "vue"
import { createJobsList } from '../helpers/getJobsConnexion'

interface IData {
    jobs: object[],
    sortJobsGroup: object[]
}

export default class service {

    data = reactive<IData>({
        jobs: [],
        sortJobsGroup: []
    })

    jobService = onMounted(async (): Promise<void> => {
        const response = await createJobsList()
        this.data.jobs = response.datas
    })

    handlePagination = () => {

        const respData: object[] = reactive([])

        onBeforeMount(async (): Promise<void> => {
            const response = await createJobsList()
            const getData = reactive(response.datas)

            getData.map((element: any) => {
                respData.push(reactive(element))
            });
        })

        let page = ref(1);

        const perPage = 9;

        const paginatedData = computed(() =>
            respData.slice((page.value - 1) * perPage, page.value * perPage)// list of 9
        );

        const lastPage = computed(() =>
            Math.ceil(respData.length / perPage)
        );

        const translatePagination = () => {
            const getPaginationDivContent = document.querySelector('.pagination-content') as HTMLElement
            getPaginationDivContent.style.transition = 'all 0.25s ease 0s'
            const pagesValue = []

            if (page.value >= 4) {
                pagesValue.push(page.value)
                pagesValue.forEach(element => {
                    if (element) {
                        getPaginationDivContent.style.position = `absolute`
                        getPaginationDivContent.style.right = `0`
                    }
                })
            }
        }

        const nextPage = () => {
            if (page.value !== Math.ceil(respData.length / perPage)) {
                page.value += 1;
            }
            translatePagination()
        };

        const backPage = () => {
            const getPaginationDiv = document.querySelector('.pagination') as HTMLElement

            if (page.value === 2) {
                getPaginationDiv.style.width = '50px'
            }
            if (page.value === 3) {
                getPaginationDiv.style.width = '100px'
            }
            if (page.value !== 1) {
                page.value -= 1;
            }
            translatePagination()
        };

        const goToPage = (numPage: number) => {
            page.value = numPage;
            const getPaginationDiv = document.querySelector('.pagination') as HTMLElement
            if (page.value === 1) {
                getPaginationDiv.style.width = '50px'
            }
            translatePagination()
        };

        const firstOnes = () => {
            const getPaginationDiv = document.querySelector('.pagination') as HTMLElement
            if (page.value === 2) {
                getPaginationDiv.style.width = '100px'
            }
            if (page.value === 3) {
                getPaginationDiv.style.width = '150px'
            }

            if (page.value) {
                return Math.ceil(page.value)
            }
            translatePagination()
        }

        const getLastOne = () => {
            const getPaginationDiv = document.querySelector('.pagination') as HTMLElement
            if (page.value === Math.ceil(respData.length / perPage)) {
                getPaginationDiv.style.width = '150px'
            }
            return Math.ceil(respData.length / perPage)
        }

        return {
            respData, paginatedData, lastPage, perPage, page, nextPage, backPage, goToPage, firstOnes, getLastOne
        };
    }

}