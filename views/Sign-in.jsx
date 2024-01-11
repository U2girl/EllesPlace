import React from 'react'

export default function SignIn() {
  return (
    <div>
        <h2>Sign In</h2>
        <form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required/>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required/>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required/>

    <button type="submit">Submit</button>
  </form>

    </div>
  )
}

