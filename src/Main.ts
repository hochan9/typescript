import {Person} from "./Person";
import {Agent} from "./Agent";

const hochan: Person = new Person('hochan',  'FA', 0,  new Agent());

console.log(`처음`);
hochan.introduce();
console.log(`팀 이동`);
hochan.join('test', 10);
hochan.introduce();

console.log(`Agent 변경`);
hochan.managedBy(new Agent('bigin'));
hochan.introduce();
console.log(`계약 기간 변경`);
hochan.extendContract(12);
hochan.introduce();

console.log(`이직`);
hochan.leave();
hochan.introduce();