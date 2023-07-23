export interface IcompleteUser {
    id: number;
    name: string;
    email: string;
    password: string;
    address: string;
    roles: Array<string>;
    items:Array<Object>

}