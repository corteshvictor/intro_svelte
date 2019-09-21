<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  const closeModal = () => dispatch("closemodal");
</script>

<style>
  .modal {
    text-align: center;
    /* position: relative;  */
    margin: 7% auto;
    padding: 30px 50px;
    background-color: #fafafa;
    color: #333;
    border-radius: 3px;
    width: 50%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
  }
</style>

<div class="back" on:click={closeModal} />
<div class="modal" id="openModal">
  <div>
    <header>
      <slot name="header" />
    </header>
    <div class="content">
      <slot />
    </div>
    <footer>
      <slot name="footer">
        <button on:click={closeModal}>Close</button>
      </slot>
    </footer>
  </div>
</div>
