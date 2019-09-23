<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let id;
  export let name;
  export let image;
</script>

<style>
  div {
    cursor: pointer;
  }

  h4 {
    text-align: center;
  }
</style>

<div on:click={() => dispatch('selectitem', { id })}>
  <h4>{name}</h4>
  <img alt={name} src={image} />
</div>
