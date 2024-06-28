let dob = document.getElementById("dob");
let submit = document.getElementById("submit");
let final = document.getElementById("final");

submit.addEventListener('click', function() {
    let dobValue = new Date(dob.value);
     let month_diff = Date.now() - dobValue.getTime();
     let age_dt = new Date(month_diff);
    
     let year = age_dt.getUTCFullYear();
     let age = Math.abs(year - 1970);
    //  console.log(dobValue,month_diff,age_dt,year,age);
    final.innerHTML = "Your Age is --> " + age;
});
