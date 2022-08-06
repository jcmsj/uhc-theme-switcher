import { writable } from 'svelte/store';
import type { Either } from './Either';
import type { Swappable } from './Swappable';

export function useSwappable<T>(s:Either<T>):Swappable<T> {
    const value = writable(s.right)
    const not = (v:T) => v == s.left ? s.right:s.left;
    const toggle = () => value.update(not);
    return {...value, not, toggle}
}