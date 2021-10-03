
class Tenantroom {
// define parameters :
   constructor(
   name,
   type,
   hasbathroom,
   hastoilet,
   haskitchen,
   haswatermeter,
   haselectricitymeter,
   price,
   available,

   )  {
        // define properties : 
       this.name = name;
       this.type = type;
       this.hasbathroom = hasbathroom;
       this.hastoilet = hastoilet;
       this.haskitchen = haskitchen;
       this.haswatermeter = haswatermeter;
       this.haselectricitymeter = haselectricitymeter,
       this.price = price,
       this.available = available
      }

      isavailable (isitavailable){
          this.available = isitavailable;
      }
      newupdatedprice (newprice){
          this.price = newprice;
      }

    }

    export default Tenantroom;