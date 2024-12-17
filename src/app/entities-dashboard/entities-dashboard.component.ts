import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { NgFor } from '@angular/common';
import { IEntity } from '../../interfaces';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-entities-dashboard',
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './entities-dashboard.component.html',
  styleUrl: './entities-dashboard.component.css',
})

export class EntitiesDashboardComponent implements OnInit {
  entities: IEntity[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    const savedEntities = this.localStorageService.getItem('entities');

    if (typeof savedEntities === 'string') {
      this.entities = JSON.parse(savedEntities);
    }
  }

  entityForm: FormGroup = new FormGroup({
    type: new FormControl('Física'),
    document: new FormControl(''),
    name: new FormControl(''),
    tradeName: new FormControl(''),
    zipCode: new FormControl(''),
    address: new FormControl(''),
    neighborhood: new FormControl(''),
    city: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  });

  saveEntity() {
    this.entities.push(this.entityForm.value);

    this.localStorageService.setItem('entities', JSON.stringify(this.entities));

    this.entityForm = new FormGroup({
      type: new FormControl('Física'),
      document: new FormControl(''),
      name: new FormControl(''),
      tradeName: new FormControl(''),
      zipCode: new FormControl(''),
      address: new FormControl(''),
      neighborhood: new FormControl(''),
      city: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl('')
    });
  }

  checkZip() {
    if (this.entityForm.value.zipCode.length === 9) {
      fetch("https://viacep.com.br/ws/" + this.entityForm.value.zipCode + "/json/")
        .then((zipInfo) => zipInfo.json())
        .then((addressJson) => {
          console.log(addressJson)

          this.entityForm.setValue({
            ...this.entityForm.value,
            address: addressJson.logradouro,
            city: addressJson.localidade,
            neighborhood: addressJson.bairro
          })
        })
    }
  }
}
