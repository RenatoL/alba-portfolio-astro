import { defineCollection, z } from 'astro:content';                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                
 const productions = defineCollection({                                                                                                                                                                                                                                                         
   type: 'content',                                                                                                                                                                                                                                                                             
   schema: z.object({                                                                                                                                                                                                                                                                           
     title: z.string(),                                                                                                                                                                                                                                                                         
     description: z.string(),                                                                                                                                                                                                                                                                   
     thumbnailUrl: z.string(),                                                                                                                                                                                                                                                                  
     videoUrl: z.string().optional(),                                                                                                                                                                                                                                                           
     btsImages: z.array(z.object({                                                                                                                                                                                                                                                              
       image: z.string(),                                                                                                                                                                                                                                                                       
       caption: z.string()                                                                                                                                                                                                                                                                      
     })).optional()                                                                                                                                                                                                                                                                             
   })                                                                                                                                                                                                                                                                                           
 });                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                
 export const collections = {                                                                                                                                                                                                                                                                   
   productions: productions                                                                                                                                                                                                                                                                     
 };