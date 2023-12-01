export function usePagination(pagination?: Object) {
    const total = ref(0)
    const pageSize = ref(pagination?.pageSize || 10)
    const pageNo = ref(1)

    function sizeChange(size: number) {
        pageSize.value = size
    }

    function currentChange(num: number) {
        pageNo.value = num
    }

    return {
        total,
        pageSize,
        pageNo,
        currentChange,
        sizeChange
    }
}
