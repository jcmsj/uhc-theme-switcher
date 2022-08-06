import { theme } from "./instance"
import { Theme } from "./Theme"

export function loadASAP() {
    const root = document.querySelector(":root") as HTMLElement //SE!

    function css(v:Theme){ 
        if (root) {
            root.style.setProperty("--prefers-color-scheme", v)
            root.dataset.theme = v
        }
    }

    theme.subscribe(css)

    if (root) {
        theme.set(theme.converter(root.dataset.theme))
    }  

    const preferenceDark = window.matchMedia("(prefers-color-scheme: dark)")
    const prefersDark = root?.dataset.theme == Theme.dark || preferenceDark.matches
    if (!theme.load() && prefersDark)
        theme.set(Theme.dark)

    //Keeps the switch synced with changes of the os theme.
    preferenceDark.onchange = function() {
        theme.update(v => {
            const isUnsynced = this.matches && v != Theme.light
            return isUnsynced ? theme.not(v):v
        })
    }

    //Start syncing here
    theme.subscribe(theme.sync)
}