<script>
  import DogItem from "./DogItem.svelte";
  import Modal from "./Modal.svelte";

  let characters = [];
  fetch("https://rickandmortyapi.com/api/character/")
    .then(response => response.json())
    .then(data => (characters = data.results));

  let selectedCaharacter = null;

  const selectItemHandler = event => {
    const { id } = event.detail;
    selectedCaharacter = characters.find(character => character.id === id);
  };

  const closeModalHandler = () => (selectedCaharacter = null);
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #menu {
    background-color: #253a46;
    padding: 20px;
  }

  #characters {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
  }
  h1 {
    text-align: center;
  }
</style>

<header id="menu" />
<h1>Our characters</h1>
<section id="characters">
  {#each characters as { name, image, id }, index}
    <DogItem {name} {image} {id} on:selectitem={selectItemHandler} />
  {/each}
</section>
<article>
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
</article>
