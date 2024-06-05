<script lang="ts">
    import { apiUrl } from "../../stores/store";

    let userValue: string = "";
    let emailValue: string = "";
    let passValue: string = "";
    let device: string = "Iphone 15";

    async function signup() {
        try {
            const response = await fetch(`${apiUrl}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    username: userValue,
                    email: emailValue,
                    passValue: passValue,
                    device: device
                }),
            });
            const data = await response.json();
            if (response.status === 200) {
                console.log("You successfully made an account on ChatApp")
                console.log(data.accessToken, data.refreshToken)
            } else {
                console.log("There is an error")
            }
        } catch (error) {
            console.log(error)
        }
    }
</script>

<div class="grid items-center justify-center">
    <div class="grid items-center justify-center mt-48 p-5 bg-log-tab rounded-md">
        <input bind:value={userValue} type="text" class="rounded-md my-2 p-2 outline-none bg-login-button hover:border hover:border-slate-200" placeholder="Username">
        <input bind:value={emailValue} type="text" class="rounded-md my-2 p-2 outline-none bg-login-button hover:border hover:border-slate-200" placeholder="Email">
        <input bind:value={passValue} type="text" class="rounded-md my-2 p-2 outline-none bg-login-button hover:border hover:border-slate-200" placeholder="Password">
    </div>
    <div class="grid items-center justify-center">
        <button on:click={signup} class="p-2 mt-5 text-center text-white rounded-md bg-login-button hover:bg-signup-button">
            Signup
        </button>
        <button class="mt-2 text-white text-sm hover:text-blue-200">
            Already have an account? Register
        </button>
    </div>
</div>