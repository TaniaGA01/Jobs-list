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
            respData.slice((page.value - 1) * perPage, page.value * perPage)
        );

        const nextPage = () => {
            if (page.value !== Math.ceil(respData.length / perPage)) {
                page.value += 1;
            }
        };

        const backPage = () => {
            if (page.value !== 1) {
                page.value -= 1;
            }
        };

        const goToPage = (numPage: number) => {
            page.value = numPage;
        };

        return { respData, paginatedData, perPage, page, nextPage, backPage, goToPage };
    }

}