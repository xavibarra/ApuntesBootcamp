import { defineStore } from 'pinia';

export const usePiniaStore = defineStore('tasks', {
    state: () => ({
        brand: 'Nike'
    }),
    actions: {}
});