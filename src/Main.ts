// // import {Person} from "./Person";
// // import {Agent} from "./Agent";
// //
// // const hochan: Person = new Person('hochan',  'FA', 0,  new Agent());
// //
// // console.log(`처음`);
// // hochan.introduce();
// // console.log(`팀 이동`);
// // hochan.join('test', 10);
// // hochan.introduce();
// //
// // console.log(`Agent 변경`);
// // hochan.managedBy(new Agent('bigin'));
// // hochan.introduce();
// // console.log(`계약 기간 변경`);
// // hochan.extendContract(12);
// // hochan.introduce();
// //
// // console.log(`이직`);
// // hochan.leave();
// // hochan.introduce();
//
// import {BankAccount} from "./BankAccount";
// import {SavingsAccount} from "./SavingsAccount";
// import {BusinessCheckingAccount} from "./BusinessCheckingAccount";
// import {PersonalCheckingAccount} from "./PersonalCheckingAccount";
// //
// // const account = new BankAccount();
// // let money: number = 0;
// // console.log(`money : ${money}`);
// //
// // // money = account.withdraw(1000);
// // // console.log(`money : ${money} `);
// //
// // account.deposit(1000);
// // console.log(`money : ${account.balance}`);
// //
// // money = account.withdraw(1000);
// // console.log(`money : ${money}`);
// //
// // const savings: SavingsAccount = new SavingsAccount();
// //
// // savings.deposit(1000);
// // console.log(`bakance : ${savings.balance}`);
// //
// // console.log(`Interest applied : ${savings.calculateInterestRate()}`);
//
//
// const bca: BusinessCheckingAccount = new BusinessCheckingAccount();
// try {
//     bca.open(1001);
// } catch (e) {
//     console.log(e)
// }
// bca.open(1000);
// console.log(bca.chargeFee());
//
// const pca: PersonalCheckingAccount = new PersonalCheckingAccount();
// try {
//     pca.open(-1);
// } catch (e) {
//     console.log(e)
// }
// pca.open(1000);
// console.log(pca.chargeFee());

//
// import {Person2} from "./Person2";
// import {Occupation} from "./Occupation";
//
// const hochan: Person2 = new Person2('Hochan', Occupation.HOMELESS);
// hochan.print();
//
// const tom: Person2 = new Person2('Tom', Occupation.BUSINESSMAN);
// tom.print();
// import {ConfigClientCode} from "./week4/design-patterns/singleton/ConfigClientCode";
// import {CarClientCode} from "./week4/design-patterns/builder/CarClientCode";
// import {TypesClientCode} from "./week4/hacks/types/TypesClientCode";
//
// /* week4 - singleton */
// const singleton_code1: ConfigClientCode = new ConfigClientCode();
// singleton_code1.consume();
//
// const singleton_code2: ConfigClientCode = new ConfigClientCode();
// singleton_code2.consume();
//
//
// /* week4 - builder */
// console.log();
// const builder_code: CarClientCode = new CarClientCode();
// builder_code.consume();
// builder_code.consume2();
//
//
// /* week4 - types */
// console.log();
// const types_code: TypesClientCode = new TypesClientCode();
// types_code.consume();

import {Player} from "./week3Report/player/Player";
import {Agent} from "./week3Report/agent/Agent";
import {Teams} from "./week3Report/player/Teams";

const player: Player = new Player("hochan");

player.introduce();

player.join(Teams.SEOUL, 1);

player.introduce();

player.extendContract(5);

player.introduce();

player.managedBy(new Agent("KOREA"));
player.introduce();

