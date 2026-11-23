"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transactionResponse = {
    data: "Transaction successful",
    status: 200
};
const transactionStatus = {
    data: true,
    status: 200
};
function getLength(array) {
    return array.length;
}
getLength(["apple", "banana", "cherry"]); // returns 3
getLength([1, 2, 3, 4, 5]); // returns 5
// -----------------    ADVANCED GENERICS    -----------------
function userState(initialValue) {
    let value = initialValue;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
userState("Hello"); // returns ["Hello", function]
userState(42); // returns [42, function]
userState({ name: "John Doe", email: "helo@example.com", isLoggedIn: true }); // returns [{ name: "John Doe", email: "
userState(null); // returns null
//# sourceMappingURL=generics.js.map