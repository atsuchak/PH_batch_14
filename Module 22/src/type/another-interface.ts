type Role = 'admin' | 'user' | 'moderator' | 'guest';

interface User {
    name: string;
    role: Role;
    email: string;
}

interface Admin extends User {  // admin extends User
    permissions: string[];
}

interface Moderator extends User {
    moderatedSections: string[];
}

const boss: Admin = {
    name: "Boss Man",
    role: "admin",
    email: "bossman@gmail.com",
    permissions: ["manage_users", "edit_content"]
};