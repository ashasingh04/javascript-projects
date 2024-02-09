
let launchcode = {
    organization: 'nonprofit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function (num){
        //creating a object
        let numObj = {
            2: 'Launch',
            3: 'Code',
            5: 'Rocks'
        }
        let result = '';
        for (let divisible in numObj)
        {
            if(num % Number(divisible) === 0){
                if(result.length > 0 && Number(divisible) === 5){
                    result += ' ';
                } 
                result += numObj[divisible];
            }
        }
        /*
        let result = '';
        if(num % 2 === 0){
            result += 'Launch';
        }
        if(num % 3 === 0){
            result += 'Code';
        }
        if(num % 5 === 0){
            if(result.length > 0){
                result += ' ';
            }            
            result += 'Rocks';            
        }
        */


        if (result.length > 0){
            result += '!';
            if (result === 'Launch Rocks!')
            {
                result = 'Launch Rocks! (CRASH!!!!)';
            }
        }else{
            return "Rutabagas! That doesn't work.";
        }
        return result;      
    }
}

module.exports = launchcode;

