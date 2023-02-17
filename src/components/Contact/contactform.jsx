import React from 'react'

export default function contactform() {

  return (
    <div className="Contact-form">
        <div className="md:pl-5">
            <form>
              <div className="form-control">
                <div className="form-group">
                  <label for='First Name'>First Name</label>
                  <input type='text' name='firstname' placeholder='John' />
                </div>
                <div className="form-group">
                  <label for='Last Name'>Last Name</label>
                  <input type='text' name='lastname' placeholder='Doe' />
                </div>
              </div>
              <div className="form-control">
                <div className="form-group">
                  <label for='Email'>Email</label>
                  <input type='email' name='mail' placeholder='example@mail.com' />
                </div>
                <div className="form-group">
                  <label for='Phone'>Phone</label>
                  <input type='number' name='phone' placeholder='+02 254 5245' />
                </div>
              </div>
              <div className="form-control">
                <label for='Check'>What is the website do you need?</label>
                  <div className="check-box">
                    <input type="radio" value="Web Design" name="gender" /> Web Design
                    <input type="radio" value="Web Developemnt" name="gender" /> Web Developemnt
                    <input type="radio" value="Other" name="gender" /> Other
                  </div>
              </div>
              <div className="form-control mt-2">
                  <label for='Message'>Message</label>
                  <textarea name='message' className='h-[10em]' placeholder='Type your message' rows='10' />
              </div>
              <div className="text-right py-3">
                <button className='Contact-submit'>Send Message</button>
              </div>
            </form>
        </div>
    </div>
  )
}
