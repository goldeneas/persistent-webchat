<script lang="ts">
    export let text: string;
    export let username: string;
    export let timestamp: string;
</script>

<div class="bg-white border-2 rounded-md w-fit h-fit px-2">
    <p>
        <span class="font-medium">{username}</span>
        <span class="font-normal">{text}</span>
        <span class="font-extralight text-xs">{timestamp}</span>
    </p>
</div>