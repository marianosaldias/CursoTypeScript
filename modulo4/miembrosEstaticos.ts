(function () {
    class User {

        public name: string;
        private _age: number;
        
        public get age(): number {
            return this._age;
        }
        public set age(v: number) {
            this._age = v;
        }

        private _id: number;
        public get id(): number {
            return this._id;
        }

        private static users: Array<User> = [];

        public static addUser(user: User): number {
            let Id: number = this.users.length + 1;
            user._id = Id;
            this.users.push(user);
            return Id;
        }

        public static removeUser(id: number): void {
            let userIndex = -1;
            this.users.forEach((value: User, index) => {
                if (value.id === id) {
                    userIndex = index;
                }
            });

            if (userIndex > -1) {
                this.users.splice(userIndex, 1);
            }
        }
        
        public static readUser(): void {
            console.log(this.users);
        }

    }

    let user1: User = new User();
    user1.name = "Felipe";
    user1.age = 999;
    User.addUser(user1);
    
    // No puedo leer User.users[0] porque users es static
    // Solo lo puedo hacer con la clase User
    // Solucion: hacer una funcion e invocarla desde afuera para leer el array
    // console.log(User.users[0]);
    User.readUser();    


})();
