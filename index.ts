#!/usr/bin/env node
import { Bank } from "./Bank.js";
import prompt from 'prompt';

console.log((`

        _   _   _   _   _   _   _     _   _     _   _   _   _   _   _  
        / \ / \ / \ / \ / \ / \ / \   / \ / \   / \ / \ / \ / \ / \ / \ 
       ( D | E | V | E | L | O | P ) ( B | Y ) ( S | E | N | S | E | I )
        \_/ \_/ \_/ \_/ \_/ \_/ \_/   \_/ \_/   \_/ \_/ \_/ \_/ \_/ \_/ 


        `)
    );


async function Banking() {
    let myAccount=new Bank;
    let input:number;
    console.log(`Starting Balance,${myAccount.getBalance}\n`);
    console.log('Make a Debit Transaction');
    input=Number((await prompt.get([{name:"Input",description:"Enter Amount : ",type:"number",conform:(value)=>{if(isNaN(value)){return false}return true;}}])).Input)
    console.log(myAccount.Debit(input));

    console.log('\nMake a Credit Transaction');
    input=Number((await prompt.get([{name:"Input",description:"Enter Amount : ",type:"number",conform:(value)=>{if(isNaN(value)){return false}return true;}}])).Input)
    console.log(myAccount.Credit(input));

    console.log(`Your final balance : ${myAccount.getBalance}`);

}

Banking();