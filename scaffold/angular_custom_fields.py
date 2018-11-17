# String to add Angular User Add

user_add_edit_string = """ <div class="form-group">
                                <input type="{type}" class="form-control input-underline input-lg" id="{field}" 
                                         required    formControlName = "{field}" placeholder=" {field}">

                                         <div *ngIf="{field}.invalid && ({field}.dirty || {field}.touched)"
                                                class="alert alert-danger">

                                            <div *ngIf="{field}.errors.required">
                                                {field} is required.
                                            </div>
                                            
                                            
                                            </div>
                            </div> """

#Add to module-add.component.ts

FormControl_string = """
       {field}: new FormControl('', [  Validators.required,]),
       """

getter_string = """

            get {field}() {{ return this.{Resource}AddForm.get('{field}'); }}

            """

attribute_string = """

             "{field}" : this.{Resource}AddForm.value.{field},
                      """

#Add to module-edit.component.ts
edit_FormControl_init_string = """
    
              "{field}" : res.data.attributes.{field},

              """
edit_FormControl_string = """

                  "{field}" : this.{Resource}EditForm.value.{field},
                """  
              
########### module.component.html Fields ##########
table_header_field = """
                         <th>{Field}</th>"""
table_row_field = """
                         <td>{{{{ {resource}.attributes.{field} }}}}</td>"""
