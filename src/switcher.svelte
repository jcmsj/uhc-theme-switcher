<script lang=ts>
import { onMount } from "svelte";
import { Theme } from "./Theme";
import type {Storable} from "./types/Storable"
export let theme: Storable<Theme>
export let onmount: () => void

onMount(onmount)
</script>
<button on:click={theme.toggle} class=theme-switcher title="Theme switcher">
    {#if $theme == Theme.light}
        <slot name=light>☼</slot>
    {:else}
        <slot name=dark>☾</slot>
    {/if}
</button>
<style lang=sass>
@import "./scheme"
button
    right: 0
    background: none
    border: 2px solid transparent
    cursor: pointer
    @include dark
        filter: invert(1)

    &:hover
        border-color: black
        transition: border-color 500ms

        @include dark
            border-color: white

</style>