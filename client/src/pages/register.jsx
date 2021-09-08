import React from 'react'

function register() {
    return (
    <>
     <div>
        <h1>Register</h1>
        <form>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <br />
            <label>
                Confirm Password:
                <input type="password" name="confirmPassword" />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
     </div>
    </>
    )
}

export default register
