import React from 'react'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools"
import axios from 'axios';
const RegesterForm = styled.div`
   background-color: rgb(38, 40, 40);
  display:flex;
  justify-content:center;
`;
const Container = styled.form`
background-color: rgb(255,240,245);
padding: 30px;
width: 500px;
margin: 30px 60px;
box-shadow: 2px 2px 5px gray;
`;

const Error = styled.span`
  color: red;
  font-size: 0.8rem;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
  font-size: 1em;
  margin:10px;
  &:hover {
    background-color: midnightblue;
  }
`;
const Input = styled.input`
  padding: 12px;
  background-color: #e7e7ff;
  border: none;
  outline: none;
  border-bottom: 1px solid blue;
  border-radius: 3px;
  width: 98%;
  margin-bottom: 5px;
  &:focus {
    outline: 1px solid blue;
    border: none;
  }
`;
const Label = styled.label`
  margin:0px 20px 0px 10px;
`;

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
const RadioLabel = styled.span`
  color: #454545;
  padding: 10px 0;
`;



function RegestrationForm() {

  async function saveForm(data) {
    try {
      const response = await axios.post("http://localhost:3000/users", data);
      console.log(response.data);

      alert( "SUBMITTED")
    } catch (error) {
      console.log(error)
    }
  }
  const onSubmit= (data)=>{
// console.log(e.target)
console.log("button cliked")
    saveForm(data);
    reset();
  
  }


  const { register, control, handleSubmit, formState: { errors }, trigger, reset, watch } = useForm();
  // const{name,ref,onChange,onBlur}=register('firstName') 

  return (
    (<RegesterForm >
      <Container
        onSubmit={handleSubmit(onSubmit)}   >
        <h3>Registration Form</h3>
        <Input name='firstName' {...register("firstName", {
          required: "First Name is required",
        })}
          onBlur={(e) => trigger("firstName")}

          type='text' placeholder='First Name *' />
        <Error>{errors.firstName?.message}</Error>

        <Input name='lastName' {...register("lastName", {
          required: {
            value: true, message: "Last Name is required"
          }
        })}
          onBlur={(e) => trigger("lastName")}

          type='text' placeholder='Last Name *' />
        <Error>{errors.lastName?.message}</Error>
        <br />

        <Input
          name="email" {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Enter valid mail address",
            },
          })}
          onBlur={(e) => trigger("email")}
          placeholder="Email *"
          type="email"
        />
        <Error>{errors.email?.message}</Error>
        <br />
        <Input name="password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
              message: "Password should have min 8 letters, with ata least a symbol, upper and lower case letters and a number"
            }
          })
          }
          onBlur={(e) => trigger("password")}
          placeholder='Password' type='password'
        />
        <Error>{errors.password?.message}</Error>

        <br />
        <Input name="confirmPassword"
          {...register("confirmPassword", {
            required: "confirm password is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
              message: "Password should have min 8 letters, with ata least a symbol, upper and lower case letters and a number"
            },
            validate: (value) => value === watch("password") || "Your password does not match"
          })
          }
          onBlur={(e) => trigger("confirmPassword")}
          placeholder='Confirm Password' type='password'
        />
        <Error>{errors.confirmPassword?.message}</Error>
        <br />
        <RadioButtonContainer>
          <Label>Gender : </Label>
          <input {...register("gender")} type="radio" value="male" name="gender" /><RadioLabel>Male</RadioLabel>
          <input {...register("gender")} type="radio" value="frmale" name="gender" /><RadioLabel>Female</RadioLabel>
          <input {...register("gender")} type="radio" value="non-binary" name="gender" /><RadioLabel>Non-binary</RadioLabel>
        </RadioButtonContainer>
        <br />
        <Input name="age"
          {...register("age", {
            required: "Age is required",
            validate: (value) => value > 18 || "Age should be greater than 18"
          })}
          onBlur={(e) => trigger("age")}
          type="text" placeholder="Age"
        />
        <Error>{errors.age?.message}</Error>

        <Input name="phoneNo"
          {...register("phoneNo", {
            required: "Phone number is required",
            pattern: {
              value: /^[7-9]\d{9}$/,
              message: "Valid phone number contains 10 digits starting with 7 / 8 /9"
            }
          })
          }
          onBlur={(e) => trigger("phoneNo")}
          placeholder='Phone No' type="tel"
        />
        <Error>{errors.phoneNo?.message}</Error>

        <Input name="street"
          {...register("street", {
            required: "Street is required",
          })}
          onBlur={(e) => trigger("street")}
          placeholder='street'
        />
        <Error>{errors.street?.message}</Error>
        <Input name="city"
          {...register("city", {
            required: "city is required",
          })}
          onBlur={(e) => trigger("city")}
          placeholder='city'
        />
        <Error>{errors.city?.message}</Error>

        <Input name='state'
        {...register("state", {
          required: "State is required",
        })}
          onBlur={(e) => trigger("state")}
          placeholder='State'
        />
        <Error>{errors.state?.message}</Error>
        <Input name="zipCode"
          {...register("zipCode", {
            required: "zip code is required",
            maxLength: { value: 6, message: "Zip code must be 5 digits" },
            pattern: {
              value: /^\d{6}$/, message: "Valid Zip Code should have 6 digits"
            }
          })}
          onBlur={(e) => trigger("zipCode")}
          placeholder='zip code' type="text"
        />
        <Error>{errors.zipCode?.message}</Error>
        <br />
        <Button type="reset" onClick={() => reset()}>Reset</Button>
        <Button type="submit">Submit</Button>

      </Container>
      <DevTool control={control} />
    </RegesterForm>)
  );
}

export default RegestrationForm