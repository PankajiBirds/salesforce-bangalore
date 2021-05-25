import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactControllerLWC.getContactList';

export default class ContactListApex extends LightningElement {

    /*
        We have 3 ways to call the apex method
        1.  wire as property
        2.  wire as function
        3.  wire as impurity
    */

    //  as property
    @wire(getContactList) contactList;

}