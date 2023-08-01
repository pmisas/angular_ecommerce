import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IItems } from '@data/interfaces/items.metadata';
import { ItemsService } from '@data/services/api/items.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id:number
  product:IItems

  
  editForm!: FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private itemsService: ItemsService
  ){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.id = id
  }
  ngOnInit(): void {
    this.itemsService.getItem(this.id).subscribe(r=>{
      if (r.error){
        console.log(r.message)
      }else{
        this.product=r.data
        console.log(r.data)
      }
    })

    this.editForm = this.formBuilder.group ({
      email: [, [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]] ,
      password: [, Validators.required],
    })

    this.editForm = this.formBuilder.group ({
      name: [ , [Validators.required,  Validators.minLength(5), Validators.maxLength(30)]],
      email: [ , [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]] ,
      password: [ , Validators.required],
      rol: [ , Validators.required],
      adress: [ ,Validators.required],
      city: [ ,Validators.required]
    })

  }

}
