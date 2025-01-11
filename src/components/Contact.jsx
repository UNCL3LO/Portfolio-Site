import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
    <form className='bg-yellow-200  min-h-[280px] flex flex-col p-2 m-2 rounded-md green-pink-gradient shadow-card'>
      <label className="text-black" for="email" name="Email">Email</label>
      <input placeholder='email' ></input>
      <label for="email" name="Email">Email</label>
      <input placeholder='email' ></input>

    </form>
    </div>
  )
}

export default Contact