class EmployeePayrollData {
    //getter and setters method
    get name(){
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");

        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect';

    }

    get profileImage() {
        return this._profileImage;
    }

    set profileImage(profileImage) {
        return this._profileImage = profileImage;
    }

    get department() {
        return this._department;
    }

    set department(Department) {
        return this._department = department;
    }

    get note() {
        return this._note;
    }

    set note(note) {
        return this._note = note;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        return this._id = id;
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        return this._salary = salary;
    }

    get genger() {
        return this._gender;
    }

    set gender(gender) {
        return this._gender = gender;
    }

    get StartDate() {
        return this._StartDate;
    }

    // should be within 30 days of joining...
    set StartDate(StartDate) {
        let currentDate = new Date();

        if (startDate > currentDate) {
            throw "StartDate is my Future Date";
        }

        var difference = Math.abs(currentDate.getTime - startDate.getTime());
        if (difference / (1000 * 60 * 60 * 24) > 30) {
            throw "Start Date is beyond 30 days."
        }
        return this._sStartDate = StartDate;
    }

    toString() {
        return "id :" + this._id + ", name : " + this._name + ", salary : " + this._salary 
            + ", department : " + this.department + ", gender : " + this.gender + ", profileImage : " + this._profileImage 
            + ", StartDate : " + this.StartDate + ", note : " + this._note;
    } 


}