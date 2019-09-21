<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let id;
  export let name;
  export let image;
</script>

<style>
  article {
    cursor: pointer;
  }
</style>

<article on:click={() => dispatch('selectitem', { id })}>
  <h1>{name}</h1>
  <img alt={name} src={image} />
</article>
