document.addEventListener("submit", (event) => {
    event.preventDefault();
    meta = moment(document.getElementById("meta").value, "H:m");
    entrada = moment(document.getElementById("entrada").value, "H:m");
    almoco = moment(document.getElementById("almoco").value, "H:m");
    volta = moment(document.getElementById("volta").value, "H:m");

    ja_cumprido = moment.duration(almoco - entrada);
    console.log(ja_cumprido._data.hours);
    console.log(parseInt(meta.format("HH")));
    if (ja_cumprido._data.hours > parseInt(meta.format("HH"))) {
        document.getElementById("saida").textContent =
            "Você já cumpriu " + meta.format("HH") + " ou mais horas! 😎";
        document.getElementById("saira_as").hidden = "True";
        document.getElementById("alert_green").hidden = "";
        return;
    }
    faltam = meta.subtract(ja_cumprido);
    hora_saida = volta.add(moment.duration(faltam.format("HH:mm:ss")));
    document.getElementById("saida").textContent =
        hora_saida.format("HH:mm").toString() + " 🎉";
    document.getElementById("alert_green").hidden = "";
});

document.getElementById("reload").addEventListener("click", (event) => {
    window.location.reload();
});