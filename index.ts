import { of } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/filtering/takewhile
// Example 3: Difference between takeWhile and filter
// emit 3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3
const srcList$ = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);

// allow values until value from source equals 3, then complete
// output: [3, 3, 3]
srcList$
  .pipe(takeWhile((it) => it === 3))
  .subscribe((val) => console.log('takeWhile', val));

// output: [3, 3, 3, 3, 3, 3, 3]
srcList$
  .pipe(filter((it) => it === 3))
  .subscribe((val) => console.log('filter', val));
