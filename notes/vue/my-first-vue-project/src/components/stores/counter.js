import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0
    }),
    actions: {
        increase() {
            return this.count += 1;
        },
        decrease() {
            return this.count -= 1;
        }
    }
});