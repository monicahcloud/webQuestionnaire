import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import img from '../assets/static.svg'

const WebDesignQuestionnaire = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_kwpafw8', 'template_blsn607', form.current, {
        publicKey: 'XnLTFneXRVkwkphGD',
      })
      .then(
        () => {
          document.getElementById('questionnaire-form').reset()
          alert('SUCCESS!')
        },
        (error) => {
          alert('FAILED to send...', error.text)
        }
      )
  }
  const [formData, setFormData] = useState({
    date: '',
    client: '',
    businessName: '',
    email: '',
    phone: '',
    productsAndServices: '',
    idealCustomers: '',
    newOrRedesign: '',
    projectGoals: [],
    websitePurpose: [],
    websiteFeatures: [],
    pageRequirements: [],
    brandingGuidelines: [],
    technicalRequirements: [],
    services: [],
    brandImage: {},
    timeframe: '',
    budget: '',
    additionalNotes: '',
  })
  //  const handleSubmit = (e) => {
  //    e.preventDefault()
  //    console.log('Form Submitted:', formData)
  //  }

  const handleChange = (e) => {
    const { name, type } = e.target
    const value = e.target.value
    const isChecked = e.target.checked

    if (type === 'checkbox') {
      if (isChecked) {
        // If checked, add the value to the array
        setFormData({
          ...formData,
          [name]: [...new Set([...formData[name], value])], // Use Set to avoid duplicates
        })
      } else {
        // If unchecked, remove the value from the array
        setFormData({
          ...formData,
          [name]: formData[name].filter((item) => item !== value),
        })
      }
    } else {
      // Handle other input types (text, textarea, etc.)
      setFormData({ ...formData, [name]: value })
    }
  }

  const options = [
    ['Greyscale', 'Colorful'],
    ['Authoritative', 'Friendly'],
    ['Minimalistic', 'Complex'],
    ['Conservative', 'Nonconventional'],
    ['Masculine', 'Feminine'],
    ['Professional', 'Casual'],
    ['Luxurious', 'Natural'],
    ['Serious', 'Fun'],
    ['Classic', 'Modern'],
    ['Non-Interactive', 'Interactive'],
    ['Retro', 'Futuristic'],
    ['Elegant', 'Sporty'],
    ['Safe', 'Extreme'],
  ]

  const handleOptionChange = (index, value) => {
    setFormData((prevData) => {
      const updatedBrandImage = { ...prevData.brandImage, [index]: value }
      return { ...prevData, brandImage: updatedBrandImage }
    })
  }

  const goals = [
    {
      id: 1,
      title: 'Clear design and logical structure',
    },
    {
      id: 2,
      title: 'Custom Content Management System',
    },
    {
      id: 3,
      title: 'Content Management System platform',
    },
    {
      id: 4,
      title: 'Multilingualism ',
    },
    {
      id: 5,
      title: 'Sell products',
    },
    {
      id: 6,
      title: 'Promote new services',
    },
    {
      id: 7,
      title: 'Establishing a brand',
    },
    {
      id: 8,
      title: 'Improving company image',
    },
  ]

  const questions = [
    {
      id: 1,
      title: 'eCommerce',
    },
    {
      id: 2,
      title: 'Business',
    },
    {
      id: 3,
      title: 'Blog',
    },
    {
      id: 4,
      title: 'Portfolio',
    },
    {
      id: 5,
      title: 'Event',
    },
    {
      id: 6,
      title: 'Membership',
    },
    {
      id: 7,
      title: 'Personal',
    },
    {
      id: 8,
      title: 'Education',
    },
    {
      id: 9,
      title: 'Non-Profit',
    },
    {
      id: 10,
      title: 'Social Media',
    },
    {
      id: 11,
      title: 'Other',
    },
  ]
  const requirements = [
    {
      id: 1,
      title: 'Website design',
    },
    {
      id: 2,
      title: 'Email design',
    },
    {
      id: 3,
      title: 'Landing page',
    },
    {
      id: 4,
      title: 'HTML/CSS/JS Project',
    },
    {
      id: 5,
      title: 'CMS platform',
    },
  ]
  const services = [
    {
      id: 1,
      title: 'Website development',
    },
    {
      id: 2,
      title: 'Logo Design',
    },
    {
      id: 3,
      title: 'Image Optimization',
    },
    {
      id: 4,
      title: 'Website Maintenance',
    },
    {
      id: 5,
      title: 'Custom Illustrations',
    },
    {
      id: 6,
      title: 'Custom Animations',
    },
  ]

  const pages = [
    {
      id: 1,
      title: 'Homepage',
    },
    {
      id: 2,
      title: 'Product Page',
    },
    {
      id: 3,
      title: 'Product Demo Page',
    },
    {
      id: 4,
      title: 'Shipping Page',
    },
    {
      id: 5,
      title: 'Pricing Page',
    },
    {
      id: 6,
      title: 'Booking/Scheduling Page',
    },
    {
      id: 7,
      title: 'Login/Sign Up page',
    },
    {
      id: 8,
      title: 'Account Page',
    },
    {
      id: 9,
      title: 'Blog',
    },
    {
      id: 10,
      title: 'About Page ',
    },
    {
      id: 11,
      title: 'Contact Page',
    },
    {
      id: 12,
      title: 'Search Page',
    },
    {
      id: 13,
      title: 'Custom 404 Page',
    },
  ]
  const features = [
    {
      id: 0,
      title: 'Image Slider',
    },
    {
      id: 1,
      title: 'Image Gallery',
    },
    {
      id: 3,
      title: 'Blog',
    },
    {
      id: 4,
      title: 'Online Ordering',
    },
    {
      id: 5,
      title: 'Online Payment',
    },
    {
      id: 6,
      title: 'Shopping Cart',
    },
    {
      id: 7,
      title: 'Login/Registration',
    },
    {
      id: 8,
      title: 'Newsletter',
    },
    {
      id: 9,
      title: 'Search',
    },
    {
      id: 10,
      title: 'Video Streaming ',
    },
    {
      id: 11,
      title: 'Forms',
    },
    {
      id: 12,
      title: 'Social Media Buttons',
    },
    {
      id: 13,
      title: 'Call to Action buttons',
    },
    {
      id: 14,
      title: 'Pricing Tables',
    },
    {
      id: 15,
      title: 'Maps',
    },
    {
      id: 16,
      title: 'Other',
    },
  ]
  const branding = [
    {
      id: 1,
      title: 'Color and Font ',
    },
    {
      id: 2,
      title: 'Logo',
    },
    {
      id: 3,
      title: 'Tagline',
    },
    {
      id: 4,
      title: 'Images',
    },
    {
      id: 5,
      title: 'Sitemap',
    },
    {
      id: 6,
      title: 'Content',
    },
  ]

  return (
    <div className="min-h-screen antialiased pt-10 bg-gray-100 flex items-center justify-center p-6">
      <form
        id="questionnaire-form"
        className="bg-white p-6 rounded shadow-lg w-full max-w-3xl space-y-6"
        ref={form}
        onSubmit={sendEmail}
        // onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-center">
          <img
            src={img}
            className="w-48 h-48 mr-4 -rotate-12 "
            alt="complete design"
          />
          <h1 className="text-7xl font-bold text-center text-cyan-600">
            WebDesign <span className="text-cyan-800"> Questionnaire</span>{' '}
          </h1>
        </div>

        {/* General Info */}
        <div className="form-control">
          <label className="label text-2xl font-bold">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>

        <div className="form-control">
          <label className="label text-2xl font-bold">Name</label>
          <input
            required
            type="text"
            name="client"
            value={formData.client}
            onChange={handleChange}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Enter name"
          />
        </div>

        <div className="form-control">
          <label className="label text-2xl font-bold">Business Name</label>
          <input
            required
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Enter business name"
          />
        </div>

        <div className="form-control">
          <label className="label text-2xl font-bold">Email Address</label>
          <input
            required
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Enter your email address"
          />
        </div>
        <div className="form-control">
          <label className="label text-2xl font-bold">Phone Number</label>
          <input
            required
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Enter your phone number"
          />
        </div>
        <h1 className="text-4xl font-bold text-center ">
          {' '}
          Brand-Related Questions
        </h1>
        {/* Products and Services */}
        <div className="form-control">
          <label className="label text-2xl font-bold">New or Redesign</label>
          <textarea
            name="newOrRedesign"
            value={formData.newOrRedesign}
            rows={4}
            onChange={handleChange}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Do you want to build a new website or redesign an existing one?"
          />
        </div>

        <div className="form-control">
          <label className="label text-2xl font-bold">
            Products and Services
          </label>
          <textarea
            name="productsAndServices"
            value={formData.productsAndServices}
            rows={4}
            onChange={handleChange}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="What are your products and services?"
          />
        </div>

        {/* Ideal Customers */}
        <div className="form-control">
          <label className="label text-2xl font-bold">Ideal Customers</label>
          <textarea
            name="idealCustomers"
            value={formData.idealCustomers}
            onChange={handleChange}
            rows={4}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Describe your ideal customers"
          />
        </div>

        {/* Project Goals */}
        <div className="form-control">
          <label className="label text-2xl font-bold">Project Goals</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-lg">
            {goals.map((goal) => (
              <div key={goal.id} className="flex items-center gap-2">
                <input
                  name="projectGoals"
                  type="checkbox"
                  value={goal.title}
                  onChange={handleChange}
                  className="checkbox"
                />
                <span>{goal.title}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Website Purpose */}
        <div className="form-control">
          <label className="label text-2xl font-bold">Website Purpose</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-lg">
            {questions.map((question) => (
              <div key={question.id} className="flex items-center gap-2">
                <input
                  name="websitePurpose"
                  type="checkbox"
                  value={question.title}
                  onChange={handleChange}
                  className="checkbox"
                />
                <span>{question.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="form-control">
          <label className="label text-2xl font-bold">
            Technical Requirements
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-lg">
            {requirements.map((requirement) => (
              <div key={requirement.id} className="flex items-center gap-2">
                <input
                  name="technicalRequirements"
                  type="checkbox"
                  value={requirement.title}
                  onChange={handleChange}
                  className="checkbox"
                />
                <span>{requirement.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="form-control">
          <label className="label text-2xl font-bold">Pages Requirements</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-lg">
            {pages.map((page) => (
              <div key={page.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="pageRequirements"
                  value={page.title}
                  onChange={handleChange}
                  className="checkbox"
                />
                <span>{page.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="form-control">
          <label className="label text-2xl font-bold">Website Features</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-lg">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-2">
                <input
                  name="websiteFeatures"
                  type="checkbox"
                  value={feature.title}
                  onChange={handleChange}
                  className="checkbox"
                />
                <span>{feature.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Branding Guidelines */}
        <div className="form-control">
          <label className="label text-2xl font-bold">
            Branding Guidelines
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-lg">
            {branding.map((page) => (
              <div key={page.id} className="flex items-center gap-2">
                <input
                  name="brandingGuidelines"
                  type="checkbox"
                  value={page.title}
                  onChange={handleChange}
                  className="checkbox"
                />
                <span>{page.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="form-control">
          <label className="label text-2xl font-bold">
            Additional Services
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-lg">
            {services.map((page) => (
              <div key={page.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="services"
                  value={page.title}
                  onChange={handleChange}
                  className="checkbox"
                />
                <span>{page.title}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="form-control">
          <label className="label text-2xl font-bold">Brand Image</label>
          <h3 className="text-lg">
            How do you envision your website image? (Choose one of each)
          </h3>
          <div className="grid grid-cols-2 gap-4 text-lg">
            {options.map(([option1, option2], index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <input
                    name={`brandImage-${index}`} // Unique name per pair for grouping
                    type="checkbox"
                    value={option1}
                    checked={formData.brandImage[index] === option1}
                    onChange={() => handleOptionChange(index, option1)}
                    className="checkbox checkbox-primary"
                  />
                  <label>{option1}</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    name={`brandImage-${index}`} // Same name ensures mutual exclusivity within the pair
                    type="checkbox"
                    value={option2}
                    checked={formData.brandImage[index] === option2}
                    onChange={() => handleOptionChange(index, option2)}
                    className="checkbox checkbox-primary"
                  />
                  <label>{option2}</label>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeframe */}
        <div className="form-control">
          <label className="label text-2xl font-bold">Timeframe</label>
          <input
            type="text"
            name="timeframe"
            value={formData.timeframe}
            onChange={handleChange}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="What is your timeframe?"
          />
        </div>

        {/* Budget */}
        <div className="form-control">
          <label className="label text-2xl font-bold">Budget</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="What is your budget?"
          />
        </div>

        {/* Additional Notes */}
        <div className="form-control">
          <label className="label text-2xl font-bold">Additional Notes</label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            rows={4}
            onChange={handleChange}
            className="ring-1 ring-gray-300 w-full rounded-md px-4 mt-2 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            placeholder="Any additional notes, comments, or requests?"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          value="Send"
          className="btn bg-cyan-500 w-1/4  rounded text-2xl font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default WebDesignQuestionnaire
