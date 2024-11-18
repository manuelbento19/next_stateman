import { create, persist } from "@bentoo/state-man";

export const useCounter = create (
    persist({
        name: "counter",
        data: 0,
        storage: sessionStorage
    })
)