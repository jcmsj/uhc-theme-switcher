<script>
import Switcher from "./switcher.svelte";
import { theme } from "./instance";
import { loadASAP } from "./matchPreference";
</script>
<Switcher {theme} onmount={loadASAP}/>
<style lang=sass>
@import "./at-root"
@import "./scheme"
</style>