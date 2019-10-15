
export type Debates = Debate[];
export class Debate 
{
    Id : number;
    Titulo : String;
    Tema:String;
    Autor:number;
    AutorName:String;
    FechaPublicacion:Date;
    FechaVencimiento:Date;
    Estado :boolean;
    Rate : number;
    RatingCount : number;
    Average : number;
}
