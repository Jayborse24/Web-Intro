let isUpdate = false;
let employPayrollObject = {};

window.addEventListener('DOMContentLoaded', (event) => {
        validateName();
        salaryOutput();
        validateDate();
});

function salaryOutput() {
    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function() {
        output.textContent = salary.value;
    });
}

function validateName(){
    const name = document.querySelector('name');
    const textError = document.querySelector('.textError');
    name.addEventListener('input', function() {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            checkName(name.value);
            textError.textContent = "";
        } catch (e) {
            console.error(e);
            textError.textContent = e;
        }
    })
}

function validateDate() {
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');

    day.addEventListener('input', checkDate);
    month.addEventListener('input', checkDate);
    year.addEventListener('input', checkDate);
}

function checkDate() {
    const dateError = document.querySelector('.date-error');
    try {
        let date = day.value + month.value + " " + year.value;
        checkStartDate(new Date(Date.parse(date)));
        dateError.textContent = "";
    } catch (e) {
        dateError.textContent = e;
    }
}

function redirect() {
    console.log("redirect")
    resetForm();
    window.location.replace(site_properties.home_page)
}

const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try{
        //let empData = setEmployeePayrollObject();
        //createAndUpdateStorage(empData);

        setEmployeepayrollObject();
        if(site_properties.use_local_storage.match("true")) {
            createAndUpdateStorage();
            alert("Data Storage With Name "+setEmployeepayrollObject._name);
            redirect();
        }else
            createOrUpdateEmployeeInJsonServer();
            //alert("Data Update With Name "+employPayrollObject._name);
            //redirect();

            }catch (e) {
                console.log(e)
                return;
            }
    }
}


const setEmployeePayrollObject = () => {

    //Here we are directly store values in employPayrollObject
    if(!isUpdate && site_properties.use_local_storage.match("true")) {
        employPayrollObject.id=createNewEmpId();
    }
    employPayrollObject._name = getInputValueId('#name');
    employPayrollObject._profilePic = getInputValueId('[name=profile]').pop();
    employPayrollObject._gender = getInputValueId('[name=gender]').pop();
    employPayrollObject._department = getInputValueId('[name=department]').pop();
    employPayrollObject._salary = getInputValueId('#salary');
    employPayrollObject._note = getInputValueId('#notes').replace(/\s/g, ' ');
    let date = getInputValueId('#day') + " " + getInputValueId('#month') + " " + getInputValueId('#year') + " ";
setEmployeePayrollObject._startDate = Date.parse(date);

}