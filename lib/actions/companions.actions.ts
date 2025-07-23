'use server'; //because this taps into our database and mutates it 

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";

//creating a learning companion  
export const createCompanion = async(formData: CreateCompanion) => { 
    const {userId: author} = await auth(); //renaming userId to author 
    const supabase = createSupabaseClient(); 

    const {data, error} = await supabase
        .from('companions')
        .insert({...formData, author})
        .select(); //returns all the columns, seperated by commas 
    if(error || !data) throw new Error(error?.message || 'Failed to create a companion');
    return data[0]; //returns the first part of the data, the newly created companion 

}
