const dateOfBirth = document.getElementById('date');
dateOfBirth.max = new Date().toISOString().split('T')[0];
const result = document.getElementById('result')

const age = document.getElementById('calculate')
age.addEventListener (('click'), () => {
    let birthDate = new Date(dateOfBirth.value)
    
    let d1 = birthDate.getDate()
    let m1 = birthDate.getMonth() + 1
    let y1 = birthDate.getFullYear()


    let today = new Date()

    let d2 = today.getDate()
    let m2 = today.getMonth() + 1
    let y2 = today.getFullYear()

    let d3;
    let m3;
    let y3;

    y3 = y2 - y1;
    
    if(m1 <= m2){
        m3 = m2 - m1
    }
    else{
        y3--
        m3 = 12 + m2 - m1
    }

    if(d1 <= d2){
        d3 = d2 - d1;
    }
    else{
        m3--
        d3 = getDate(y1, m1, 0) + d2 - d1
    }
    
    if(m3<0){
        m3 = 11
        y3--
    }
     
    result.innerHTML = `You are<span> ${y3} </span>year,<span> ${m3} </span>months,<span> ${d3} </span>days old`
})

function getDate(year, month){
    return new Date(year, month, 0).getDate()
}


