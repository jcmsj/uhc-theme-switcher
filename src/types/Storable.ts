import type { Functor } from "./Functor"
import type { Maybe } from "./Maybe"
import type { Swappable } from "./Swappable"

export interface Storable<T> extends Swappable<T> {
    load: () => boolean,
    converter: Functor<Maybe<string>, T>
    sync: (v:T) => void|boolean
}