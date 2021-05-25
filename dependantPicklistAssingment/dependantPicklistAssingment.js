import { LightningElement } from 'lwc';

export default class DependantPicklistAssingment extends LightningElement {

    data = [
        {
            "India" : [
                {
                    "Rajasthan" : [                        
                        {label : "Ajmer", value : "Ajmer"},
                        {label : "Jaipur", value : "Jaipur"}
                    ],
                    "Madhya Pradesh" : [
                        {label : "Ujjain", value : "Ujjain"},
                        {label : "Bhopal", value : "Bhopal"}
                    ]
                }                
            ],
            "England" : [
                {label : "UK", value : "UK"},
                {label : "London", value : "London"}                
            ]
        }
    ]

    states = [];
    cities = [];

    country;

    get countries(){        
        var countryArray = [];
        for(let key in this.data[0]){
            var country = {label : key, value : key}
            countryArray.push(country);
        }
        return countryArray;
    }

    handleCountry(event){
        this.states = [];
        this.country = event.target.value;        
        for(let key in this.data[0][this.country][0]){                        
            var state = {label : key, value : key}
            this.states.push(state);
        }        
    }

    handleState(event){
        this.cities = [];
        const state = event.target.value;                
        for(let city in this.data[0][this.country][0][state]){            
            this.cities.push(this.data[0][this.country][0][state][city]);
        }
    }
}