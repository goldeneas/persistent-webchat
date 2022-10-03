function ABORT(message: string) {
    console.log("ABORT:", message);
    window.location.href = "/error";
}

function ERROR(message: string) {
    console.log("ERROR:", message);
}

function LOG(message: string) {
    console.log("LOG:", message);
}

function IS_EMPTY(str: string) {
    // check if input doesn't have spaces and if the input is not null
    return (!/\S/.test(str) || str === "");
}

export { ABORT, ERROR, LOG, IS_EMPTY }