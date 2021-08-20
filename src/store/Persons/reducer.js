const initialState = [
    {
        id: 0,
        name: "Will",
        surname: "McConnel",
        get fullName() {
            return `${this.name} ${this.surname}`;
        },
        avatarSrc: "/image/avatar1.png",
        role: "Approver"
    },
    {
        id: 1,
        name: "John",
        surname: "Smith",
        get fullName() {
            return `${this.name} ${this.surname}`;
        },
        avatarSrc: "/image/avatar2.png",
        role: "Approver"
    },
    {
        id: 2,
        name: "Mike",
        surname: "Smith",
        get fullName() {
            return `${this.name} ${this.surname}`;
        },
        avatarSrc: "/image/avatar3.png",
        role: "Approver"
    },
    {
        id: 3,
        name: "Katrin",
        surname: "Brown",
        get fullName() {
            return `${this.name} ${this.surname}`;
        },
        avatarSrc: "/image/avatar4.png",
        role: "Registrar"
    },
];

export const personsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}