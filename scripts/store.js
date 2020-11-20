'use strict';
import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id){
    return this.items.find(currentItem => currentItem.id === id)
}

function addItem(name){
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } catch (e) {console.log(e.message)}
}

function findAndToggleChecked(id){
    let currentItem = this.findById(id);
    currentItem.checked = !currentItem.checked;
}

function findAndUpdateName(id, newName){
    try {
        item.validateName(newName);
        let currentItem = this.findById(id);
        currentItem.name = newName;
    } catch (e) {`Cannot update name: ${e.message}`}
}

function findAndDelete(id){
    this.items = this.items.filter(currentItem => currentItem.id !== id);
}

function toggleCheckedFilter(){
    this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    items,
    hideCheckedItems
}