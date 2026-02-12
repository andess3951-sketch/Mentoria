function copyPix() {
    const pix = document.getElementById("pixKey");
    pix.select();
    pix.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Chave Pix copiada!");
}

function paid() {
    const phone = "5511980523954";
    const msg = "Já fiz o pagamento da Mentoria por R$17 via Pix ✅";
    window.location.href =
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
}