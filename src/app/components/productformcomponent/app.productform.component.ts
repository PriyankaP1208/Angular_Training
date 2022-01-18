import {Component, OnInit, Input} from '@angular/core';
import {Categories,Manufacturers} from './../../models/constants';
import {ProductLogic, ProductInfo} from './../../models/logic';
import { FormGroup, FormControl, Validators } from "@angular/forms"; 
import {CustomValidation} from './app.custom.validators';

@Component({
    selector: 'app-productform-component',
    templateUrl:'app.productform.view.html'
})
export class ProductFormComponent implements OnInit{
    products:Array<ProductInfo>;
    product: ProductInfo;
    private logic:ProductLogic;
    categories = Categories;
    manufacturers = Manufacturers;
    columnHeaders:Array<string>;
    private _setElement;
    //private _setElement:string;
    frmProduct:FormGroup;

    constructor(){
        this.product = new ProductInfo(0,'','','','','',0);
        this.products= new Array<ProductInfo>();
        this.logic = new ProductLogic();
        this.columnHeaders = new Array<string>();   
        this._setElement = ''; 
        console.log('Constructor Called');
        this.frmProduct = new FormGroup({
            ProductRowId: new FormControl(this.product.ProductRowId,
                 Validators.compose([
                     Validators.required,
                     Validators.minLength(2),
                     Validators.maxLength(10),
                     Validators.pattern('[0-9]+'),
                     CustomValidation.checkEven   
                 ])),
            ProductId: new FormControl(this.product.ProductId,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(10),
                    
                ])),
            ProductName: new FormControl(this.product.ProductName,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(20),
                    Validators.pattern('^[A-Z]{1}[a-z]{1,}'),
                    
                ])),
            CategoryName: new FormControl(this.product.CategoryName),
            Manufacturer: new FormControl(this.product.Manufacturer),
            Description: new FormControl(this.product.Description,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('^[A-Z]{1}[a-z]{1,}'),
                    
                ])),
            BasePrice: new FormControl(this.product.BasePrice)
        });
    }
    // the method from OnInit interface
    ngOnInit(): void {
        console.log('ngOnInit Called');
        // Read all public members of the ProductInfo class
        this.columnHeaders = Object.keys(this.product);
        this.products = this.logic.getProducts();
    }

    clear():void{
        this.product = new ProductInfo(0,'','','','','',0);
        this.frmProduct.setValue(this.product);
        
    }
    save():void {
        this.products = this.logic.registerProduct(this.frmProduct.value);
        this.frmProduct.setValue(this.frmProduct);
        //this.frmProduct = this.logic.registerProduct(this.product);
    }

    // getSelectedProduct(prd:ProductInfo):void {
    //     // this.product = prd;
    //     // a new blank object is created and then data and schema from prd is copied in it
    //     this.product = Object.assign({}, prd);
    // }

    getSelectedProduct(event:any):void {
        // read value received from the event 
        console.log(event);
        this.product = event;
    }

    @Input()
    set setElement(val){
        this._setElement = val;
    }
    get setElement(){
        return this._setElement;
    }
}