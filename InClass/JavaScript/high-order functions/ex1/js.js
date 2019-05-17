function capitalizeNames(arr) {
    const capitalizedNames = arr.map((name) => {
        const lowerName = name.toLowerCase();
        return lowerName.charAt(0).toUpperCase() + lowerName.slice(1, lowerName.length);
    });
    return capitalizedNames;
};

console.log(capitalizeNames(['john', 'JACOB', 'bogdan']));


