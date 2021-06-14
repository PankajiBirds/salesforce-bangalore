import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationSerivcesExample extends NavigationMixin(LightningElement) {

    handleHomePage() {
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'home'
            }
        });
    }

    handleChatterPage() {
        this[NavigationMixin.Navigate]({
            type : 'standard__namedPage',
            attributes : {
                pageName : 'chatter'
            }
        })
    }

    handleWebPage() {
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes : {
                url : 'https://www.google.com/'
            }
        })
    }

    handleNewAccount() {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',            
                actionName : 'new'
            }
        })
    }

    handleEditAccount() {
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes : {
                recordId : '0015g000004DGPfAAO',                 // pass any account id
                actionName : 'edit'
            }
        })
    }

    handleViewAccount() {
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes : {
                recordId : '0015g000004DGPfAAO',
                actionName : 'view'
            }
        })
    }

    handleContactList() {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'list'
            },
            state : {
                filterName : '00B5g000004LoFEEA0'           //          pass filter api name , filter id
            }
        })
    }

    handleAccountRelationShip() {
        this[NavigationMixin.Navigate]({
            type : 'standard__recordRelationshipPage',
            attributes : {
                recordId : '0015g000004DGPfAAO',                
                relationshipApiName : 'Contacts',
                actionName : 'view'
            }
        })
    }

    handleContactObject() {
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Contact',
                actionName : 'home'
            }
        })
    }
}