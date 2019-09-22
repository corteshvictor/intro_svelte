<script>
  import { PaginationItem, PaginationLink } from "sveltestrap";
  export let page;
</script>

<PaginationItem>
  <PaginationLink href="#">{page}</PaginationLink>
</PaginationItem>
