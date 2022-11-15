import { Sorted } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([8, -2, 66, 18, -39]);

const sorted = new Sorted(numbersCollection);
sorted.sort();

console.log(numbersCollection.data);