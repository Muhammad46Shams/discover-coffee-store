import React from 'react'

export default async function Page({
    params
    } : { 
    params: Promise<{ id :string}> 
    }) {

    const  { id }  = await params;

    console.log(id,'id');
    
  return (
    <div>
      <h4>this is parametrize coffee : {id}</h4>
    </div>
  )
}
