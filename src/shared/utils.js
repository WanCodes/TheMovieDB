
/*
    Method for checking if 1 array matches all objects of another array
*/
export const ArrayContainsArray = ( superset, subset ) => {
    if (0 === subset.length) {
        return false;
      }
      return subset.every(value => {
        return (superset.indexOf(value) >= 0);
      });
}
/*
    Methos to sort object array
*/
export const CompareValues = (key, order='asc') => {
    return (a, b) => {
      if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }