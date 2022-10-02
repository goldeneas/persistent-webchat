function ERROR(message: string) {
    console.log("ERROR:", message);
    window.location.href = "/error";
}

function LOG(message: string) {
    console.log("LOG:", message);
}

export { LOG, ERROR }