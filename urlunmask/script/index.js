document.getElementById('inputstring').addEventListener('input', () => {
    document.getElementById("outputstring").value = document.getElementById("inputstring").value.replace(/\(slash\)/g, "\/").replace(/\(dot\)/g, "\.");
})

