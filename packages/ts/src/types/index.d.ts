interface CommonResponse<T>{
    code:number
    message:string
    result:T
}

type DayBefore=CommonResponse<{
    latest:string[]
}>
