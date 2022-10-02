<script lang="ts">
    import Message from "./Message.svelte";
    import { messages } from "../scripts/stores"
</script>

<div class="absolute border-4 w-[98vw] h-[94vh] left-3">
    {#each $messages as message}
    <svelte:component this={Message} text={message.text} username={message.username} timestamp={message.timestamp} />
    {/each}
</div>