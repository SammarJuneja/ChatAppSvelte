<script>
  import { route } from "../../stores/store";
</script>

<div class="grid justify-center items-center">
    <h1 class="text-white text-2xl flex items-center justify-center mt-20">Welcome to the Open Chat</h1>
    <div class="ho mt-40 mb-10 p-10 rounded-2xl bg-log-tab text-white text-lg mx-auto">
        <button on:click={() => { $route.path = "/signup"}} class="bg-signup-button my-2 py-1 flex items-center justify-center w-40 rounded-2xl">
            <h3>Signup</h3>
        </button>
        <button on:click={() => { $route.path = "/login"}} class="bg-login-button my-2 py-1 flex items-center justify-center w-40 rounded-2xl">
            <h3>Login</h3>
        </button>
    </div>
</div>

<!-- 
    "app-background": "#16181e",
    "log-tab": "#050811",
    "signup-button": "#1f2b49",
    "login-button": "#323746"
 -->