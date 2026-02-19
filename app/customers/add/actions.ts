
"use server";
import {createCustomer} from "../../../services/customerService";

export default async function addCustomer(prevState:any, formData:FormData){
    // perform the insert operation and return the updated state
    try{
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const address = formData.get("address") as string;

        const data={
            name:name,
            email:email,
            phone:phone,
            address:address
        }
        // call http rest api if API is residing outside the application 
        const result = await createCustomer(data);
        return {
            message: `Customer added successfully with id ${result.id}!`,
            success: true
        }
    }
    catch(error){
        return {
            message: "Failed to add customer. Please try again.",
            success: false
        }
    }
} 