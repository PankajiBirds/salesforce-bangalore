import { LightningElement, api } from 'lwc';

export default class DesignAttributeExample extends LightningElement {

    @api dynamicLabel;
    @api isHide;
    @api color;
}