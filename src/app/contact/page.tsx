import React from 'react'

export default function page() {
  return (
    <div className="bg-white text-zinc-800">

    
      <section className="h-[260px] bg-zinc-100 flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-blue-500">
            Contact Us
          </h1>
          <p className="mt-2 text-blue-300">
            We're here to help you anytime
          </p>
        </div>
      </section>

      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

          <form className="space-y-5">
            <div>
              <label className="text-sm text-blue-600">Your Name</label>
              <input
                className="w-full border border-blue-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm text-blue-600">Email</label>
              <input
                className="w-full border border-blue-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-sm text-blue-600">Message</label>
              <textarea
                className="w-full border border-blue-300 p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Write your message"
              />
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>

          <div className="bg-zinc-50 border border-blue-200 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold text-blue-500">
              BuyNest
            </h3>

            <p className="mt-4 text-blue-600">
              Your trusted ecommerce destination for quality products.
            </p>

            <div className="mt-6 space-y-2 text-blue-700">
              <p>📧 support@buynest.com</p>
              <p>📞 +91 1111111111</p>
              
            </div>
          </div>

        </div>
      </section>

      
      <section className="h-[400px] w-full">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d250608.30730450636!2d75.82045176572265!3d11.057001309333062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1766732489500!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

    </div>
  )
}

