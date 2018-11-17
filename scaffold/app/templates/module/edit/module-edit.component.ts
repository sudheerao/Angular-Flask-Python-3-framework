import {{ Component, OnInit }} from '@angular/core';
import {{ {Resources}Service }} from '../{resources}.service';
import {{Router, ActivatedRoute}} from "@angular/router";
import {{ FormGroup, FormControl, Validators }} from '@angular/forms';


@Component({{
  selector: 'app-edit',
  templateUrl: './{resource}-edit.component.html',
  styleUrls: ['./{resource}-edit.component.scss']
}})
export class {Resource}EditComponent implements OnInit  {{

   {Resource}EditForm = new FormGroup({{
    
      {edit_FormControl_init_strings}
     
  }});


  

   id:number  =  parseInt(this.route.snapshot.paramMap.get('id'));
   http_errors :boolean = false;
   error_message:any;
  

  constructor(private {resources}Api: {Resources}Service, private router: Router, private route: ActivatedRoute,) {{ 
   
  }}

  ngOnInit() {{

  

    this.{resources}Api
    .get{Resource}(this.id)
    .subscribe(res => {{
       this.{Resource}EditForm.setValue({{
        

        {edit_FormControl_strings}
        

       }},
       
       error => {{
        this.http_errors = true;

          this.error_message = error // error path


      }}    )
       
       
      }});
          
      



        }}

       

        onSubmit() {{

          let {resource} = {{

        

              "data": {{
                "type": "{resources}",
                "attributes": {{
                  {edit_FormControl_fields}
              }}
                  
                }}
              
          }}

       


          this.{resources}Api
   
               .edit({resource}, this.id)
               .subscribe(res => {{
                  
                this.router.navigate(['/{resources}']);

                    }},
                    error => {{
                      this.http_errors = true;
            
                        this.error_message = error // error path
            
            
                    }}                 );
        
        }}


       



        }}





  
  

  




