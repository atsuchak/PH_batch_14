interface Response<T> {
    data: T;
    status: number;
}

const transactionResponse: Response<string> = {
    data: "Transaction successful",
    status: 200
};

const transactionStatus: Response<boolean> = {
    data: true,
    status: 200
}

function getLength<item>(array: item[]): number {
    return array.length;
}

getLength<string>(["apple", "banana", "cherry"]); // returns 3
getLength<number>([1, 2, 3, 4, 5]); // returns 5



// -----------------    ADVANCED GENERICS    -----------------

function userState<T> (initialValue: T): [T, (newValue: T) => void] {
    let value = initialValue;

    function setValue(newValue: T) {
        value = newValue;
    }

    return [value, setValue];

} 

userState<string>("Hello"); // returns ["Hello", function]
userState<number>(42); // returns [42, function]

interface User {
    name: string;
    email: string;
    isLoggedIn: boolean;
}

userState<User>({ name: "John Doe", email: "helo@example.com", isLoggedIn: true }); // returns [{ name: "John Doe", email: "
userState<User | null>(null); // returns null