import { Award, Users, Clock, Heart } from 'lucide-react'

const stats = [
  { icon: <Award className="w-6 h-6" />, value: '100%', label: 'Satisfaction Guaranteed' },
  { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Happy Customers' },
  { icon: <Clock className="w-6 h-6" />, value: '5+', label: 'Years Experience' },
  { icon: <Heart className="w-6 h-6" />, value: 'Premium', label: 'Quality Service' },
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About ELIAS ZAMORA
              <span className="block text-gray-700">CAR DETAILING</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Welcome to ELIAS ZAMORA CAR DETAILING, where passion meets precision in automotive care. 
                We are dedicated to providing exceptional car wash and detailing services that exceed 
                your expectations.
              </p>
              <p>
                With years of experience and a commitment to excellence, we use only the finest products 
                and techniques to ensure your vehicle receives the premium treatment it deserves. From 
                quick washes to comprehensive detailing packages, we tailor our services to meet your 
                specific needs.
              </p>
              <p>
                Our team takes pride in every vehicle we service, treating each one with the same care 
                and attention to detail as if it were our own. We believe that a well-maintained vehicle 
                not only looks great but also maintains its value and performance.
              </p>
            </div>

            {/* Values */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Quality First</h4>
                <p className="text-sm text-gray-600">
                  We never compromise on quality, using only premium products and proven techniques.
                </p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Customer Focus</h4>
                <p className="text-sm text-gray-600">
                  Your satisfaction is our priority. We listen to your needs and deliver results.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Why Choose Us
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
                  >
                    <div className="flex justify-center text-white mb-3">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Elias and his team did an amazing job on my car! The attention to detail was incredible, 
                and my vehicle has never looked better. Highly recommend!"
              </p>
              <p className="text-sm font-semibold text-gray-900">
                — Satisfied Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
