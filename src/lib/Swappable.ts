import type { Writable } from "svelte/store"

export interface Swappable<T> extends Writable<T> {
    not:(this:void, v:T)=>T
    toggle:() => void
}