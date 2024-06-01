<script lang="ts">
  import "../app.css";
  import { route } from "../stores/store";
  import Greet from "./logging/Greet.svelte";
  import Login from "./logging/Login.svelte";
  import Signup from "./logging/Signup.svelte";
</script>


<!-- Routing function needed -->
{#if $route.path == "/"}
 <Greet />
{:else if $route.path == "/login"}
 <Login />
{:else if $route.path == "/signup"}
 <Signup />
{/if}