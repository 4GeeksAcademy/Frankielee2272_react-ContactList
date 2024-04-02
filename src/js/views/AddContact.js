import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  
  return (
    <div>
      <h1>Add Contact</h1>
      <form>
  <div class="mb-3">
    <label for="inputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="inputName"/>
  </div>
  <div class="mb-3">
    <label for="inputEmail" class="form-label">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="inputEmail"/>
  </div>
  <div class="mb-3">
    <label for="inputPhone" class="form-label">Phone Number</label>
    <input onChange={(e)=>setPhone(e.target.value)} type="tel" class="form-control" id="inputPhone"/>
  </div>
  <div class="mb-3">
    <label for="inputAddress" class="form-label">Address</label>
    <input onChange={(e)=>setAddress(e.target.value)}type="text" class="form-control" id="inputAddress"/>
  </div>
 
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  );
};
