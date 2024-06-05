<script lang="ts">
    import { apiUrl } from "../../stores/store";

    let emailValue: string = "";
    let passValue: string = "";
    let device: string = "Iphone 15";

    async function login() {
        try {
            const response = await fetch(`${apiUrl}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    email: emailValue,
                    passValue: passValue,
                    device: device
                }),
            });
            const data = await response.json();
            if (response.status === 200) {
                console.log("You are logged in successfully")
                console.log(data.refreshToken)
            } else {
                console.log("There is an error")
            }
        } catch (error) {
            console.log(error)
        }
    }
</script>

<div class="grid items-center justify-center">
    <div class="bg-log-tab grid items-center mt-40 p-16 rounded-lg w-60 justify-center">
        <input bind:value={emailValue} class="bg-login-button rounded-lg text-white outline-none p-3 hover:border-2 hover:border-slate-400 hover:transition-all" placeholder="Email" type="text" required>
        <input bind:value={passValue} class="bg-login-button rounded-lg text-white outline-none p-3 hover:border-2 hover:border-slate-400 hover:transition-all mt-5" placeholder="Password" type="password" required>
    </div>
    <div class="flex items-center justify-center">
        <button on:click={login} class="p-2 mt-5 w-40 bg-login-button text-white rounded-lg hover:bg-signup-button">Login</button>
    </div>
    <div class="flex items-center mt-1 justify-center">
        <button class="text-sm text-white hover:text-blue-200">Forgot password?</button>
    </div>
</div>