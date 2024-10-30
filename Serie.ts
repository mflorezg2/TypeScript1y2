export class Serie{

    constructor(public id:number,public name:string, public chanel:string, 
        public seasons:number,public image:string, public description:string,public link:string){

    }

    public Prom(Se:Serie[]):number {
        let Sum:number=0
        for(let i:number=0; i<Se.length; i++){
            Sum+=Se[i].seasons
        }
        let rta:number=Sum/Se.length
        return rta;
    }
}