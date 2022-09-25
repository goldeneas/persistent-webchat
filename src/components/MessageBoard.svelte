<script lang="ts">
    import Message from "./Message.svelte";
    import { getMessages } from "../scripts/database";
    import { onMount } from "svelte";

    let messages: message[] = [];
</script>

<div class="absolute border-4 w-[98vw] h-[94vh] left-3">
    <svelte:component this={Message} text="as" username="asd" timestamp="asd" />
</div>