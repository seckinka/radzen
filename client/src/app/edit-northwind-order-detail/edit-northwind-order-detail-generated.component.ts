/*
  This file is automatically generated. Any changes will be overwritten.
  Modify edit-northwind-order-detail.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { FormComponent } from '@radzen/angular/dist/form';

import { NorthwindService } from '../northwind.service';

export class EditNorthwindOrderDetailGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('form0') form0: FormComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  _location: Location;

  _subscription: Subscription;

  northwind: NorthwindService;

  northwindorderdetail: any;

  getNorthwindOrdersResult: any;

  getNorthwindOrdersCount: any;

  getNorthwindProductsResult: any;

  getNorthwindProductsCount: any;

  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.northwind = this.injector.get(NorthwindService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.northwind.getNorthwindOrderDetailById(this.parameters.OrderID, this.parameters.ProductID)
    .subscribe((result: any) => {
      this.northwindorderdetail = result;
    }, (result: any) => {

    });

    this.northwind.getNorthwindOrders(null, (<any>this.form0.fields.find(f => f.property == 'OrderID')).pageSize, 0, null, null, true)
    .subscribe((result: any) => {
      this.getNorthwindOrdersResult = result.value;

      this.getNorthwindOrdersCount = result['@odata.count'];
    }, (result: any) => {

    });

    this.northwind.getNorthwindProducts(null, (<any>this.form0.fields.find(f => f.property == 'ProductID')).pageSize, 0, null, null, true)
    .subscribe((result: any) => {
      this.getNorthwindProductsResult = result.value;

      this.getNorthwindProductsCount = result['@odata.count'];
    }, (result: any) => {

    });
  }

  form0Cancel(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }

  form0Submit(event: any) {
    this.northwind.updateNorthwindOrderDetail(this.parameters.OrderID, this.parameters.ProductID, event)
    .subscribe((result: any) => {
      if (this.dialogRef) {
        this.dialogRef.close();
      } else {
        this._location.back();
      }
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to update OrderDetail` });
    });
  }

  form0LoadData(event: any) {
    if (event.property == 'OrderID') {
          this.northwind.getNorthwindOrders(`${event.filter}`, event.top, event.skip, `${event.orderby}`, null, true)
      .subscribe((result: any) => {
          this.getNorthwindOrdersResult = result.value;

      this.getNorthwindOrdersCount = result['@odata.count'];
      }, (result: any) => {
    
      });
    }

    if (event.property == 'ProductID') {
          this.northwind.getNorthwindProducts(`${event.filter}`, event.top, event.skip, `${event.orderby}`, null, true)
      .subscribe((result: any) => {
          this.getNorthwindProductsResult = result.value;

      this.getNorthwindProductsCount = result['@odata.count'];
      }, (result: any) => {
    
      });
    }
  }
}