import { writable } from "svelte/store";

export const url = "https://chat.kipteam.net";
export const route = writable({ path: "/" });