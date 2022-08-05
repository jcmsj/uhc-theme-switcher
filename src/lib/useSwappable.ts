import { writable } from 'svelte/store';
import type { Switch } from './Switch';
import type { Swappable } from './Swappable';

export function useSwappable<T>(s:Switch<T>):Swappable<T> {
    const value = writable(s.off)
    const not = (v:T) => v == s.on ? s.off:s.on;
    const toggle = () => value.update(not);
    return {...value, not, toggle}
}