import { reactive, ref, computed, onBeforeMount } from "vue"
import { createJobsList } from '../helpers/getJobsConnexion'


export default class service {

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
            respData.slice((page.value - 1) * perPage, page.value * perPage)
        );

        const translatePagination = (): void => {
            const getPaginationDivContent = document.querySelector('.pagination-content') as HTMLElement
            getPaginationDivContent.style.transition = 'all 0.25s ease 0s'
            const pagesValue = []

            if (page.value >= 4) {
                pagesValue.push(page.value)
                pagesValue.forEach(element => {
                    if (element) {
                        getPaginationDivContent.style.position = `absolute`
                        getPaginationDivContent.style.right = `1px`
                    }
                })
            }
        }

        const nextPage = (): void => {
            if (page.value !== Math.ceil(respData.length / perPage)) {
                page.value += 1;
            }
            translatePagination()
        };

        const backPage = (): void => {
            if (page.value !== 1) {
                page.value -= 1;
            }
            translatePagination()
        };

        const goToPage = (numPage: number) => {
            page.value = numPage;
            translatePagination()
        };

        const firstPage = (): number => {
            return Math.ceil(page.value = 1)
        }

        const firstOnes = (): any => {
            if (page.value) {
                return Math.ceil(respData.length / perPage)
            }
            translatePagination()
        }

        const middleOnes = (): any => {
            if (page.value) {
                return Math.ceil(page.value)
            }
            translatePagination()

        }

        const lastPage = (): number => {
            return Math.ceil(respData.length / perPage)
        }

        return {
            respData, paginatedData, perPage, page, nextPage, backPage, goToPage, firstPage, firstOnes, middleOnes, lastPage
        };
    }

}