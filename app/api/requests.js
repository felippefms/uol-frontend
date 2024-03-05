import { instance } from "./api";

export function GetAllHeroes(callback) {
    instance.get('/heroes')
        .then((response) => {
            const usersList = response.data
            callback(usersList);
        })
        .catch(() => {
            console.log();
        });
};

export function CreateHero(hero) {
    const name = hero.nome
    const email = hero.email
    const phoneNumber = hero.telefone
    const heroGroup = hero.grupo

    instance.post('/heroes', {name, email, phoneNumber, heroGroup})
        .then((response) => {
        })
        .catch(() => {
            console.log();
        });
};