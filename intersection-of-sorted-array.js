// arr1=[1, 3, 4, 5, 7], arr2=[2, 3, 5, 6]
const intersectionOfSortedArray = (arr1, arr2) => {
  const result = [];
  let a1 = 0;
  let a2 = 0;
  while (a1 < arr1.length - 1 && a2 < arr2.length - 1) {
    if (arr1[a1] === arr2[a2]) {
      result.push(arr1[a1]);
      a1++;
      a2++;
    } else if (arr1[a1 + 1] < arr2[a2 + 1]) a1++;
    else a2++;
  }
  return [result[0], result[result.length - 1]];
};

console.log(intersectionOfSortedArray([1, 3, 4, 5, 7], [2, 3, 4, 5, 6]));
