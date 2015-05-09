/*
 Custom type definition of jasmine (because the full d.ts file is not available on github yet).
 - Willem Odendaal 09/May/2015
 */

declare function describe(feature:string, testSuite:Function);
declare function it(testDescription:string, test:Function);

declare function expect(spy:Function):any;
declare function expect(actual:any):any;
