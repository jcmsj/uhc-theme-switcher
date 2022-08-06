<script lang=ts>
import { themeFrom, useStorableTheme } from ".";

import { onMount } from "svelte";
import { Theme } from "./Theme";
const theme = useStorableTheme("t", themeFrom)

export function loadASAP() {
    const root = document.querySelector(":root") as HTMLElement

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
    if (!theme.load() && preferenceDark)
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
onMount(loadASAP)
</script>

<button on:click={theme.toggle} class=theme-switcher>
{$theme==Theme.dark ? '☼':'☾'}
</button>
<style>
button {
    right: 0;
    margin: 1vh 1vw;
}
</style>