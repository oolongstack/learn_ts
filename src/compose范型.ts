// function compose<R>(...funcs: Function[]): (...args: any[]) => R;

// function compose<R>(...funcs): (...args: any[]) => R {
//   return (...args) => {
//     let result = args[0];
//     for (let i = 0; i < funcs.length; i++) {
//       result = funcs[i](result);
//     }
//     return result;
//   };
// }
// const one = () => {};
// const two = () => {};

// compose<any>(one, two);

type Func<T extends any[], R> = (...a: T) => R;

/**
 * one functions
 */

function compose<F extends Function>(f: F): F;

function compose<A, T extends any[], R>(
  f1: (a: A) => R,
  f2: Func<T, A>
): Func<T, R>;

export {};
