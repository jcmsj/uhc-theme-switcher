import type { Storable } from "./types/Storable"
import type { Functor } from "./types/Functor"
import type { Maybe } from "./types/Maybe"
import { Theme } from "./Theme"
import { useTheme } from "./useTheme"

export function useStorableTheme(key:string, converter:Functor<Maybe<string>, Theme>):Storable<Theme> {
    const theme = useTheme()

    function load() {
        const s:string|null = localStorage.getItem(key)
        if (s) {
            theme.set(converter(s))
            return true;
        }
        return false;
    }
    
    /* Syncing must be initiated by user
     */
    function sync(v:Theme) {
        try {
            localStorage.setItem(key, v)
        } catch (e) {
            console.log("Unable to save theme", e);
        }
    }
    return {...theme, load, sync, converter}
}

export function themeFrom(v:Maybe<string>) {
    return v == Theme.dark ? Theme.dark:Theme.light
}