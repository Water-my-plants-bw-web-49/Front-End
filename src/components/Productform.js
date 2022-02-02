import React, { useState } from "react";
import axiosWithAuth from "./utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const initialFormValues = {
  nickname: "",
  species: "",
  h2oFrequency: "",
};

export default function ProductForm (props) {

    const {push} = useHistory()
    const [formValue, setFormValue] = useState(initialFormValue);

    const postNewItem = newItem => {
        axiosWithAuth().post(`/items`, newItem)
          .then(res => {
              console.log(res)
              push('/products')
          })
          .catch(err => {
              console.error(err)
          })
    }

    const onChange = event => {
        setFormValues({
            ...formValues,
            [event.target.name]: .


        })
    }
    const submitItem= () => {
        const newItem = {
            item_name: formValues.product,
            item_description: formValues.description,
            item_price: formValues.price,
            item_location : formValues.location
        }
        postNewItem(newItem)
    }
    const onSubmit = evt => {
        evt.preventDefault()
        submitItem()
    }
    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className = 'form group'>
                <h2>Add Product</h2>
                <div className="form-group"></div>
                <label> Product </label>
                  <input
                  name= 'product'
                  type = 'text'
                  value={formValues.product}
                  onChange={onChange}
                  id='product-input'
                  />

                  <label> Description</label>
                    <input
                    name='description'
                    type = 'text'
                    value = {formValues.description}
                    onChange = {onChange}
                    id = 'description input'
                    />

                    <label> Price </label>
                    <input 
                    name='price'
                    type = 'text'
                    value={formValues.price}
                    id='price-input'
                    />

                    <label>Location</label> 
                     <input
                     name='location'
                     type='text'
                     value={formValues.location}
                     onChange={onChange}
                     id='location-input'
                     /> 

       </div>
       <button id ='submit-button'>
           Add Products
       </button>
       
        </form>
    )
}

