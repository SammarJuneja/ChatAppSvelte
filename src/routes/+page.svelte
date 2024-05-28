<script lang="ts">
import "../app.css";
import Login from "../lib/+Login.svelte";
import Signup from "../lib/+Signup.svelte";
</script>


<!-- <h1>Welcome to the chat app</h1> -->

<div class="bg-gray-900 grid h-full pb-96">
    <h1 class="text-white text-2xl flex items-center justify-center mt-20">Welcome to the Chat app</h1>
    <div class="mt-40 border-2 mb-10 p-10 rounded-2xl border-gray-950 bg-gray-950 text-white text-lg mx-auto hover:p-12">
        <button class="bg-blue-700 my-2 py-1 flex items-center justify-center w-40 rounded-md hover:p-2">
            <h3>Signup</h3>
        </button>
        <button class="bg-neutral-700 my-2 py-1 flex items-center justify-center w-40 rounded-md hover:p-2">
            <h3>Login</h3>
        </button>
    </div>
</div>