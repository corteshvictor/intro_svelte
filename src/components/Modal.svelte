<script>
  import { createEventDispatcher } from "svelte";
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from "sveltestrap";

  const dispatch = createEventDispatcher();
  const closeModal = () => dispatch("closemodal");
</script>

<Modal isOpen>
  <ModalHeader toggle={closeModal}>
    <slot name="header" />
  </ModalHeader>

  <ModalBody>
    <slot />
  </ModalBody>

  <ModalFooter>
    <Button color="primary" on:click={closeModal}>Close</Button>
  </ModalFooter>

</Modal>
