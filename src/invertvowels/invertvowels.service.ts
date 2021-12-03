import { Injectable } from '@nestjs/common';

@Injectable()
export class InvertvowelsService {

    async getInvertVowel( word: string) {
        let vowels = [];
        let newWord = "";

        //get vowels in orginal order
        for(let i = 0; i <= word.length - 1; i++) {

            let vowel = "aeiou".indexOf(word.charAt(i));

            if(vowel >= 0) { 
                vowels.push(word.charAt(i));
            }
        }

        //get the new string with inverted vowels
        let index = vowels.length-1;  
        for(let j = 0; j <= word.length - 1; j++) {

            let vowel = "aeiou".indexOf(word.charAt(j));

            if(vowel >= 0) {
                newWord = newWord + vowels[index];
                index--;
            }else {
                newWord = newWord + word.charAt(j);
            }

        }

        return  ;
        
    }
}
