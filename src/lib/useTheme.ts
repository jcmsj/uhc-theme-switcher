import { Theme } from "./Theme"
import { useSwappable } from "./useSwappable"

export function useTheme() {
    return useSwappable({on:Theme.dark, off:Theme.light})
}