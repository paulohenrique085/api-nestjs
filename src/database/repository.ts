export class UserRepository{
    private users = []

    create(user){
        this.users.push(user)
    }

    getAllUsers(){
        return this.users
    }
}