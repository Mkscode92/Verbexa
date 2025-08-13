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

// we also need to be able to fetch the companions to display them in the companions library 
export const getAllCompanions = async ({limit = 10, page = 1, subject, topic, durationMin, durationMax}: GetAllCompanions) => { 
    const supabase = createSupabaseClient();

    let query = supabase.from('companions').select();

    // basically will allow us to get specific companions via subject and topic 
    // if(subject && topic && durationMin && durationMax) { 
    //     query = query.ilike('subject', `%${subject}%`)
    //     .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    //     .gte('duration', durationMin)
    //     .lte('duration', durationMax)
    // } else if(subject) { 
    //     query = query.ilike('subject', `%${subject}%`)
    // } else if (topic)  {
    //     query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
    // } else if(durationMin) { 
    //     query = query.gte('duration', durationMin)
    // } else if(durationMax) { 
    //     query = query.lte('duration', durationMax)
    // }

    if (subject) {
        query = query.ilike('subject', `%${subject}%`);
    }
    if (topic) {
        query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
    }
    if (durationMin) {
        query = query.gte('duration', durationMin);
    }
    if (durationMax) {
        query = query.lte('duration', durationMax);
    }

    // so essentially we start at the first page, showing limit # of elements and then that up to the last page 
    query = query.range((page - 1) * limit, page * limit - 1) 
    const {data: companions, error} = await query; // retrieve values 
    if(error) throw new Error(error.message); 
    return companions;
}