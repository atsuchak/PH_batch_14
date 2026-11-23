"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
const offDay = Day.Sunday;
console.log(offDay); // Output: 6
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["Moderator"] = "Moderator";
})(Roles || (Roles = {}));
console.log(Roles.Admin); // Output: Admin
const alu = {
    name: 'Potol',
    role: Roles.Moderator
};
console.log(alu.role); // Output: Moderator
//# sourceMappingURL=enum.js.map