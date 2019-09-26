class Form {
    constructor(fieldArr){
        this.fieldArr = fieldArr;
    }

    validateEmpty(){
        for (let i=0; i<this.fieldArr.length-1; i++){
            if (this.fieldArr[i].checkIfError() && this.fieldArr[i].checkIfEmpty()){
                this.fieldArr[i].removeErrorChild();
                this.fieldArr[i].appendErrorChild('value is required');
            } else if (this.fieldArr[i].checkIfEmpty()){
                this.fieldArr[i].appendErrorChild("value is required");
            }
        }
     }

     validateName(){
        if (!this.fieldArr[0].checkIfEmpty() && this.fieldArr[0].checkIfError()){
            this.fieldArr[0].removeErrorChild();
            this.fieldArr[0].invalidToValidInputAction();
        } else if (!this.fieldArr[0].checkIfEmpty()){
            this.fieldArr[0].validInputAction();
         }
     }

     validateCar(){
        if (!this.fieldArr[1].checkIfEmpty() && !this.fieldArr[1].checkIfError()){
            if (!this.fieldArr[1].checkHasProperNumInputs()){
                this.fieldArr[1].appendErrorChild('must include year, make and model separated by commas');
                this.fieldArr[1].invalidInputAction();
            } else if (this.fieldArr[1].checkHasProperNumInputs() && !this.fieldArr[1].checkCarYear()){
                this.fieldArr[1].appendErrorChild('year must be between 1900 and current year');
                this.fieldArr[1].invalidInputAction();
            } else if (this.fieldArr[1].checkHasProperNumInputs() && this.fieldArr[1].checkCarYear()) {
                this.fieldArr[1].validInputAction();
            }
        } else if (!this.fieldArr[1].checkIfEmpty() && this.fieldArr[1].checkIfError()) {
            if (!this.fieldArr[1].checkHasProperNumInputs()){
                this.fieldArr[1].removeErrorChild();
                this.fieldArr[1].appendErrorChild('must include year, make and model separated by commas');
                this.fieldArr[1].invalidInputAction();
            } else if (this.fieldArr[1].checkHasProperNumInputs() && !this.fieldArr[1].checkCarYear()){
                this.fieldArr[1].removeErrorChild();
                this.fieldArr[1].appendErrorChild('year must be between 1900 and current year');
                this.fieldArr[1].invalidInputAction();
            } else if (this.fieldArr[1].checkHasProperNumInputs() && this.fieldArr[1].checkCarYear()) {
                this.fieldArr[1].removeErrorChild();
                this.fieldArr[1].invalidToValidInputAction();
            }
        }
     }

     validateDate(){
        if(!this.fieldArr[2].checkIfEmpty()){
            if (!this.fieldArr[2].checkIsFuture() && this.fieldArr[2].checkIfError()){
                this.fieldArr[2].removeErrorChild();
                this.fieldArr[2].appendErrorChild('date must be in the future');
                this.fieldArr[2].invalidInputAction();
            } else if (!this.fieldArr[2].checkIsFuture() && !this.fieldArr[2].checkIfError()){
                this.fieldArr[2].appendErrorChild('date must be in the future');
                this.fieldArr[2].invalidInputAction();
            } else if (this.fieldArr[2].checkIsFuture() && this.fieldArr[2].checkIfError()){
                this.fieldArr[2].removeErrorChild();
                this.fieldArr[2].invalidToValidInputAction();
            } else if (this.fieldArr[2].checkIsFuture() && !this.fieldArr[2].checkIfError()){
                this.fieldArr[2].validInputAction();
            }
        }
     }

     validateDays(){
        if (!this.fieldArr[3].checkIsNum() && !this.fieldArr[3].checkIfEmpty()){
            if (this.fieldArr[3].checkIfError()){
                this.fieldArr[3].removeErrorChild();
                this.fieldArr[3].appendErrorChild('days must be a number');
                this.fieldArr[3].invalidInputAction();
            } else if (!this.fieldArr[3].checkIfError()){
                this.fieldArr[3].appendErrorChild('days must be a number');
                this.fieldArr[3].invalidInputAction();
            }
        } else if (!this.fieldArr[3].checkIfEmpty() && !this.fieldArr[3].checkIsBetweenOneAndThirty()){
            if (this.fieldArr[3].checkIfError()){
                this.fieldArr[3].removeErrorChild();
                this.fieldArr[3].appendErrorChild('days must be between 1 and 30');
                this.fieldArr[3].invalidInputAction();
            } else if (!this.fieldArr[3].checkIfError()){
                this.fieldArr[3].appendErrorChild('days must be between 1 and 30');
                this.fieldArr[3].invalidInputAction();
            }
        } else if (!this.fieldArr[3].checkIfEmpty() && this.fieldArr[3].checkIfError()){
            this.fieldArr[3].removeErrorChild();
            this.fieldArr[3].invalidToValidInputAction();
        } else if (!this.fieldArr[3].checkIfEmpty() && !this.fieldArr[3].checkIfError()){
            this.fieldArr[3].validInputAction();
        }
    }

     validateCreditCard(){
        if (!this.fieldArr[4].checkIfEmpty() && this.fieldArr[4].checkIsCreditCardNum()){
            if (!this.fieldArr[4].checkIfError()){
                this.fieldArr[4].validInputAction();
            } else if (this.fieldArr[4].checkIfError()){
                this.fieldArr[4].removeErrorChild();
                this.fieldArr[4].invalidToValidInputAction();
            }
        } else if (!this.fieldArr[4].checkIfEmpty() && !this.fieldArr[4].checkIfError()){
            this.fieldArr[4].appendErrorChild('must be a valid credit card number');
            this.fieldArr[4].invalidInputAction();
        } else if (!this.fieldArr[4].checkIfEmpty() && this.fieldArr[4].checkIfError()){
            this.fieldArr[4].removeErrorChild();
            this.fieldArr[4].appendErrorChild('must be a valid credit card number');
            this.fieldArr[4].invalidInputAction();
        }
     }

     validateCVV(){
        if (!this.fieldArr[5].checkIsThreeNums() && !this.fieldArr[5].checkIfEmpty()){
            if (this.fieldArr[5].checkIfError()){
                this.fieldArr[5].removeErrorChild();
                this.fieldArr[5].appendErrorChild('CVV must be a 3-digit number');
                this.fieldArr[5].invalidInputAction();
            } else if (!this.fieldArr[5].checkIfError()) {
                this.fieldArr[5].appendErrorChild('CVV must be a 3-digit number');
                this.fieldArr[5].invalidInputAction();
            }
        } else if (!this.fieldArr[5].checkIfEmpty()){
            if (this.fieldArr[5].checkIfError()){
                this.fieldArr[5].removeErrorChild();
                this.fieldArr[5].invalidToValidInputAction();
            } else if (!this.fieldArr[5].checkIfError()) {
                this.fieldArr[5].validInputAction();
            }
        }
     }

     validateExp(){
         if (this.fieldArr[6].checkIfError() && this.fieldArr[6].checkIsFutureMonthAndDay()){
             this.fieldArr[6].removeErrorChild();
             this.fieldArr[6].invalidToValidInputAction();
         } else if (!this.fieldArr[6].checkIfError() && this.fieldArr[6].checkIsFutureMonthAndDay()){
             this.fieldArr[6].validInputAction();
         } else if (!this.fieldArr[6].checkIfError() && !this.fieldArr[6].checkIsFutureMonthAndDay() && !this.fieldArr[6].checkIfEmpty()){
            this.fieldArr[6].appendErrorChild('exp must be a valid future date');
            this.fieldArr[6].invalidInputAction();
         } else if (this.fieldArr[6].checkIfError() && !this.fieldArr[6].checkIsFutureMonthAndDay() && !this.fieldArr[6].checkIfEmpty()){
            this.fieldArr[6].removeErrorChild();
            this.fieldArr[6].appendErrorChild('exp must be a valid future date');
            this.fieldArr[6].invalidInputAction();
         }
     }

     getAndAppendPrice(){
         if (this.fieldArr[7].checkNoErrors()){
             let cost = this.fieldArr[7].calculateTotalCost();
             let costText = '' + cost;
             let creditCard = this.fieldArr[4].getCardBrand();
             this.fieldArr[7].appendPriceChild(costText, creditCard);
         }
     }
}

class Field {
    constructor(fieldId){
        this.field = document.getElementById(fieldId);
    }

    getFieldId(){
        return this.field.id;
    }

    checkIfEmpty(){
        if (this.field.value.trim() == ''){
            return true;
        } else {
            return false;
        }
    }

    checkIfError(){
        let lastChildAtt = this.field.parentElement.lastElementChild.classList;
        if (lastChildAtt.contains('error')){
            return true;
        } else {
            return false;
        }
    }

    appendErrorChild(message){
        let child = document.createElement('p');
        child.innerHTML = "<span style='color:#FF0000'> *" + message +  " </span>";
        child.classList.add("error");
        child.classList.add("input-hint");
        this.field.parentNode.classList.remove('input-valid');
        this.field.parentNode.classList.add('input-invalid');
        this.field.parentElement.appendChild(child);
    }

    removeErrorChild(){
        this.field.parentElement.removeChild(this.field.parentElement.childNodes[this.field.parentElement.childNodes.length-1]);
    }

    validInputAction(){
        this.field.parentNode.classList.add('input-valid');
    }

    invalidInputAction(){
        this.field.parentNode.classList.remove('input-valid');
        this.field.parentNode.classList.add('input-invalid');
    }

    invalidToValidInputAction(){
        this.field.parentNode.classList.remove('input-invalid');
        this.field.parentNode.classList.add('input-valid');
    }
}

class NameField extends Field {
    constructor(fieldId){
        super(fieldId);
    }

    checkIsName(){
        let nameCheck = new RegExp('^[\p{L}\s\'.-]$');
        if (!nameCheck.test(this.field.value)){
            return false;
        } else {
            return true;
        }
    }
}

class CarField extends Field {
    constructor(fieldId){
        super(fieldId);
    }

    checkHasProperNumInputs(){
        let carInfo = this.field.value.split(',');
        if (carInfo.length != 3){
            return false;
        } else if (carInfo.length == 3) {
            return true;
        }
    }

    checkCarYear(){
        let date = new Date();
        let carYear = parseInt(this.field.value.split(',')[0]);
        if (isNaN(carYear)){
            return false;
        } else if (carYear <= 1900 || carYear > date.getFullYear()){
            return false;
        } else {
            return true;
        }
    }
}

class DateField extends Field {
    constructor(fieldId){
        super(fieldId);
    }

    getReservationDate(){
        return this.field.value;
    }

    checkIsFuture(){
        let currDate = new Date();
        let givenDate = new Date(this.field.value);
        if (givenDate.getTime() <= currDate.getTime()){
            return false;
        } else {
            return true;
        }
    }
}

class DaysField extends Field {
    constructor(fieldId){
        super(fieldId);
    }

    getDays(){
        return parseInt(this.field.value);
    }

    checkIsNum(){
        if (isNaN(this.field.value)){
            return false;
        } else {
            return true;
        }
    }

    checkIsBetweenOneAndThirty(){
        let val = parseInt(this.field.value);
        if (val < 1 || val > 30){
            return false;
        } else {
            return true;
        }
    }
}

class CreditCardField extends Field {
    constructor(fieldId){
        super(fieldId);
    }

    checkIsCreditCardNum(){
        let creditCardNum = this.field.value.trim();
        let regex = new RegExp("^[0-9]{16}$");
        if (!regex.test(creditCardNum)){
            return false
        }

        let sum = 0;
        for (var i = 0; i < creditCardNum.length; i++) {
        let intVal = parseInt(creditCardNum.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
        }

        if (!(sum % 10) == 0){
            return false;
        } else {
            return true;
        }
    }

    getCardBrand(){
        let creditCardNum = this.field.value.trim();
        let firstNum = creditCardNum.charAt(0);
        if (firstNum == '3'){
            return 'American Express';
        } else if (firstNum == '4'){
            return 'Visa';
        } else if (firstNum == '5'){
            return 'MasterCard';
        } else if (firstNum == '6'){
            return 'Discover Card';
        } else {
            return 'generic credit card'
        }
    }
}

class CVVField extends Field {
    constructor(fieldId){
        super(fieldId);
    }

    checkIsThreeNums(){
        if (isNaN(this.field.value) || this.field.value.length != 3){
            return false;
        } else {
            return true;
        }
    }
}

class ExpField extends Field {
    constructor(fieldId){
        super(fieldId);
    }

    checkIsFutureMonthAndDay(){
        let regex = new RegExp('^[0-1][0-9]/[0-3][0-9]$');
        if (!regex.test(this.field.value)){
            return false;
        } else {
            let expVal = this.field.value.split("/");
            let currDate = new Date();
            let year = currDate.getFullYear().toString().substring(2, 4);
            let month = currDate.getMonth() + 1;
            if (!(expVal[0] >= month) && expVal[1] == year){
                return false;
            } else if (expVal[1] < year){
                return false;
            } else if (expVal[0] > 12){
                return false;
            } else {
                return true;
            }
        }
    }
}

class Price {
    constructor(givenDate, daysParked){
        this.givenDate = givenDate;
        this.daysParked = daysParked;
    }

    checkNoErrors(){
        if (document.querySelector('.error') != null){
            return false;
        } else {
            return true;
        }
    }

    calculateTotalCost(){
        let date = new Date(this.givenDate);
        let cost = 0;
        for (let i=0; i<this.daysParked; i++){
            date = new Date(date.getTime() + 86400000);
            if (date.getDay() == 0 || date.getDay() == 6){
                cost += 7;
            } else {
                cost += 5;
            }
        }
    return cost;
    }

    appendPriceChild (costText, creditCard){
        let butt = document.getElementById('submit-button');
        if (butt.parentElement.lastElementChild.classList.contains('price')){
            let child = document.createElement('p');
            child.innerHTML = "<span >" + "your total cost is: $" + costText + ' on your ' + creditCard + " </span>";
            child.classList.add("price")
            butt.parentElement.removeChild(butt.parentElement.childNodes[butt.parentElement.childNodes.length-1]);
            butt.parentElement.appendChild(child);
        } else {
            let child = document.createElement('p');
            child.innerHTML = "<span >" + "your total cost is: $" + costText + ' on your ' + creditCard + " </span>";
            child.classList.add("price")
            butt.parentElement.appendChild(child);
        }
    }
}

const sub = document.getElementById("submit-button");

sub.addEventListener("click", function(event) {
    let name = new NameField('name');
    let car = new CarField('car-info');
    let date = new DateField('start-date');
    let days = new DaysField('days');
    let creditCard = new CreditCardField('credit-card');
    let cvv = new CVVField('cvv');
    let exp = new ExpField('expiration');
    let price = new Price(date.getReservationDate(), days.getDays())
    let fieldArr = []
    fieldArr.push(name);
    fieldArr.push(car);
    fieldArr.push(date);
    fieldArr.push(days);
    fieldArr.push(creditCard);
    fieldArr.push(cvv);
    fieldArr.push(exp);
    fieldArr.push(price);
    let newForm = new Form(fieldArr);
    newForm.validateEmpty();
    newForm.validateCar();
    newForm.validateName();
    newForm.validateDate();
    newForm.validateDays();
    newForm.validateCreditCard();
    newForm.validateCVV();
    newForm.validateExp();
    newForm.getAndAppendPrice();
    event.preventDefault();
});