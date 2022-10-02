function ERROR(message: string) {
    console.log("ERROR:", message);
    window.location.href = "/error";
}

function LOG(message: string) {
    console.log("LOG:", message);
}

function validateInput(input: string) {
    // check if input doesn't have spaces and if the input is not null
    return (/[^ ]/.test(input) && input !== "");
}

export { LOG, ERROR, validateInput}