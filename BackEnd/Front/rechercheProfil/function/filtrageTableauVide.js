import{ receptionBdd } from '../search.js';

export function filtrageTableauVide(){

    function removeNullValues (obj){
        for (let key in obj) {
          if (obj[key] === null) {
            delete obj[key];
          }
        }
      };
      
      const objetCandidatSansNull = receptionBdd.map(obj => {
        removeNullValues(obj);
        return obj;
      });
      
      console.log(objetCandidatSansNull);

      return objetCandidatSansNull
    }

    



