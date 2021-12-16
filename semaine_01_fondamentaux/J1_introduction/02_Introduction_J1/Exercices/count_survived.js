const fs = require('fs');

fs.readFile('./Data/titanic.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const lines = data.split(/\r?\n/).filter(d => d != '').slice(1);
    console.log(lines);
    
    let statistic = {
        survived : 0,
        survived_female : 0,
        survived_male : 0,
    };

    for(const line of lines){
        // assignation par décomposition
        const [s, sex] = [line.split(',')[1], line.split(',')[5]] ;
        statistic.survived += parseInt(s);
        // on ajoute 0 ou 1 donc on compte bien le nombre de survivants
        if(sex == 'female') statistic.survived_female += parseInt(s);
        if(sex == 'male') statistic.survived_male += parseInt(s);
    }

    console.log(statistic);
  });


