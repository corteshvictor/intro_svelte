<script>
  import { Pagination, PaginationItem, PaginationLink } from "sveltestrap";
  import { createEventDispatcher } from "svelte";

  export let info;

  const dispatch = createEventDispatcher();

  const changePage = page => {
    // if (page !== current_page) {
    dispatch("change", page);
    // }
  };
</script>

<Pagination size="lg">
  <PaginationItem>
    <PaginationLink first href="#" />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink previous href="#" />
  </PaginationItem>
  <!-- {#each { length: info.pages } as _, index}
    <PageItem page={index} />
  {/each} -->
  <PaginationItem>
    <PaginationLink href="javascript:void(0)" on:click={() => changePage(1)}>
      1
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="javascript:void(0)" on:click={() => changePage(2)}>
      2
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink href="javascript:void(0)" on:click={() => changePage(3)}>
      3
    </PaginationLink>
  </PaginationItem>
  <PaginationItem>
    <PaginationLink next href="#" />
  </PaginationItem>
  <PaginationItem>
    <PaginationLink last href="#" />
  </PaginationItem>
</Pagination>
