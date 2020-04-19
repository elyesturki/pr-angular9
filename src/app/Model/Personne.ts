export class Personne {
  id: number;
  name: string;
  firstname: string;
  age: number;
  path: string;
  cin: number;
  job: string;

	constructor(id,name,firstname,age,path,cin,job) {
     this.id = id || 1;
     this.name= name || "";
      this.firstname= firstname || "";
      this.age = age || 0;
      this.path= path || "";
      this.cin=cin || 1;
      this.job =job || "";
  }

}


