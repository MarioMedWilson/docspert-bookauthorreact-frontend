import React from 'react'
import { Formik , Form ,Field , ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function BookForm(props) {
    const initValues = props.initValues || {
        title:'',
        description:'',
        price:0
    }
    const handleSubmit = (values)=>{
        props.onSubmit(values)
    }

    const validationSchema = Yup.object({
        title:Yup.string().required().min(6 , 'title must be more than 6 character'),
    })

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {()=>( 
            <Form>
                <div className='mb-3'>
                    <label htmlFor="title" className="form-label">Book Title</label>
                </div>
                <div className='mb-3'>
                    <label htmlFor="description" className="form-label">Book Description</label>
                </div>
                <div className='mb-3'>
                    <label htmlFor="price" className="form-label">Book Price</label>
                </div>
                <button type='submit' className='btn btn-dark'>Submit</button>
            </Form>
        )
        }
    </Formik>
  )
}
