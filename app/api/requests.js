import { instance } from "./api";

export function GetAllUsers() {

    if (StorageService.isAdminLoggedIn() === true) {
        instance.get('/heroes')
            .then((response) => {
                const usersList = response.data
                console.log(usersList);
            })
            .catch(() => {
                console.log();
            });
    }
};