import { Theme } from "./Theme"
import { useSwappable } from "./useSwappable"

export function useTheme() {
    return useSwappable({left:Theme.dark, right:Theme.light})
}