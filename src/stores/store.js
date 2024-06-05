import { writable } from "svelte/store";

export const apiUrl = "https://chat.kipteam.net/api/v2";
export const route = writable({ path: "/" });