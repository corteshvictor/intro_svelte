<script>
  import getCharacters from "./data.js";
  import DogItem from "../components/DogItem.svelte";
  import Modal from "../components/Modal.svelte";
  import Pagination from "../components/Pagination.svelte";
  import Loading from "../components/Loading.svelte";

  let info = {};
  let characters = [];
  let selectedCaharacter = null;
  let loading = false;

  const changePage = params => {
    loading = true;

    getCharacters(params)
      .then(data => {
        characters = data.results;
        info = data.info;
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        loading = false;
      });
  };

  changePage();

  const selectItemHandler = event => {
    const { id } = event.detail;
    selectedCaharacter = characters.find(character => character.id === id);
  };

  const closeModalHandler = () => (selectedCaharacter = null);

  const handleChangePage = ({ detail }) => {
    const page = detail;
    changePage(page);
  };
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .header {
    background-color: #253a46;
    padding: 20px;
  }

  .characters {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    grid-row-gap: 30px;
  }

  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .detail-content {
    text-align: center;
  }

  .footer,
  .spinner {
    display: grid;
    justify-items: center;
    margin-top: 40px;
  }
</style>

<header class="header" />
<h1>Our characters</h1>

{#if loading}
  <section class="spinner">
    <Loading />
  </section>
{:else}
  <section class="characters">
    {#each characters as { name, image, id }, index}
      <DogItem {name} {image} {id} on:selectitem={selectItemHandler} />
    {/each}
  </section>
{/if}

{#if selectedCaharacter !== null}
  <Modal on:closemodal={closeModalHandler}>
    <h2 slot="header">{selectedCaharacter.name}</h2>
    <div class="detail-content">
      <p>species: {selectedCaharacter.species}</p>
      <p>gender: {selectedCaharacter.gender}</p>
      <img alt={selectedCaharacter.name} src={selectedCaharacter.image} />
    </div>
  </Modal>
{/if}

<footer class="footer">
  <Pagination {info} on:change={handleChangePage} />
</footer>
