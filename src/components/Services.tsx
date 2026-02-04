import { Sparkles, Droplets, Shield, Zap, Star, Wrench } from 'lucide-react'

interface Service {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: 'Exterior Wash',
    description: 'Complete exterior cleaning that removes dirt, grime, and road debris.',
    features: ['Hand wash', 'Wheel cleaning', 'Tire shine', 'Drying & buffing'],
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Full Detailing',
    description: 'Comprehensive interior and exterior detailing for a showroom finish.',
    features: ['Interior vacuum', 'Leather treatment', 'Paint correction', 'Wax application'],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Paint Protection',
    description: 'Advanced ceramic coating and paint protection film services.',
    features: ['Ceramic coating', 'Paint sealant', 'UV protection', 'Long-lasting shine'],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Quick Wash',
    description: 'Fast and efficient exterior wash for busy schedules.',
    features: ['Express service', 'Exterior wash', 'Tire shine', 'Quick dry'],
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Premium Package',
    description: 'Our most comprehensive service for the ultimate car care experience.',
    features: ['Full detailing', 'Paint protection', 'Engine bay clean', 'Interior deep clean'],
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: 'Custom Services',
    description: 'Tailored detailing solutions to meet your specific needs.',
    features: ['Custom packages', 'Specialty vehicles', 'Fleet services', 'Consultation'],
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional car detailing services tailored to keep your vehicle looking its absolute best
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mr-3"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect Border */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="text-gray-900 font-semibold hover:text-gray-700 transition-colors"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Vehicle?
            </h3>
            <p className="text-gray-300 mb-6">
              Contact us today to schedule your appointment
            </p>
            <a
              href="tel:+16614358547"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
