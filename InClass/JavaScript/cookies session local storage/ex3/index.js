export const apiRequest = () => {
    return fetch('world.json').then(res => res.json());
};