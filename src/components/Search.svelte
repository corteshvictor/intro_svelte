<script>
  import { Button } from "sveltestrap";
  import { searchCharacter } from "../data.js";
  import { characters } from "../stores.js";
  import { Toast, ToastBody, ToastHeader } from "sveltestrap";

  let query = "";
  let isOpen = false;
  let error = "";
  let loading = false;

  const toggle = () => (isOpen = !isOpen);

  const handleSubmit = () => {
    let loading = true;
    searchCharacter(query)
      .then(data => {
        if (data.error) {
          (isOpen = true), (error = data.error);
        } else characters.update(() => data.results);
      })
      .catch(error => {
        error = error;
      })
      .finally(() => {
        loading = false;
      });
  };
</script>

<style>
  .container-search {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 150px;
  }

  .input-button {
    display: inline-flex;
    width: 500px;
  }

  .input-search {
    width: 400px;
    border-radius: 8px 0 0 8px;
    padding-left: 20px;
    font-size: 14px;
    outline: none;
  }
</style>

<div class="container-search">
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-button">
      <input
        type="search"
        name="search"
        id="search"
        class="input-search"
        placeholder="search characters"
        bind:value={query} />
      <Button outline secondary>
        <i class="material-icons">search</i>
      </Button>
    </div>
  </form>

  <Toast {isOpen}>
    <ToastHeader {toggle}>Error</ToastHeader>
    <ToastBody>{error}</ToastBody>
  </Toast>
</div>
