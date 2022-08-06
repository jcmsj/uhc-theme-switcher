<script lang=ts>
import { onMount } from "svelte";
import { Theme } from "./Theme";
import type {Storable} from "./types/Storable"
export let light = '☼'
export let dark = '☾'
export let theme: Storable<Theme>
export let onmount: () => void

onMount(onmount)
</script>
<button on:click={theme.toggle} class=theme-switcher>
{$theme==Theme.dark ? light:dark}
</button>
<style>
button {
    right: 0;
    margin: 1vh 1vw;
}
</style>