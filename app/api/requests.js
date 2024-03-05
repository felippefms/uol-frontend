import { instance } from "./api";

export function GetAllUsers() {
    instance.get('/heroes')
        .then((response) => {
            const usersList = response.data
            console.log(usersList);
        })
        .catch(() => {
            console.log();
        });
};