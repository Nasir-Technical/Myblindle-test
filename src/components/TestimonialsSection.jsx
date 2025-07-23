import { Star } from "lucide-react"

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emily R",
      location: "USA",
      avatar: "/images/avatars/emily.jpg",
      rating: 5,
      text: "This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!",
    },
    {
      id: 2,
      name: "Amit K",
      location: "India",
      avatar: "/images/avatars/amit.jpg",
      rating: 5,
      text: "Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.",
    },
    {
      id: 3,
      name: "Sophie M",
      location: "UK",
      avatar: "/images/avatars/sophie.jpg",
      rating: 5,
      text: "I joined just to explore, but now I can't imagine my day without it. The real-time chat and engaging communities make every interaction special!",
    },
    {
      id: 4,
      name: "Javier L",
      location: "Spain",
      avatar: "/images/avatars/javier.jpg",
      rating: 5,
      text: "Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.",
    },
    {
      id: 5,
      name: "Lucas T",
      location: "Brazil",
      avatar: "/images/avatars/lucas.jpg",
      rating: 5,
      text: "The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!",
    },
    {
      id: 6,
      name: "Nora S",
      location: "Canada",
      avatar: "/images/avatars/nora.jpg",
      rating: 5,
      text: "I've tried many social platforms, but this one truly stands out! The experience feels personal, the connections feel real, and every feature just makes sense.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>

              {/* User Info */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=random`
                    }}
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Quotes */}
        <div className="grid md:grid-cols-2 gap-8 mt-12 text-gray-500 italic px-4 md:px-12">
          <p className="text-sm md:text-base">
            This platform brings people closer in the best way possible! From reconnecting with old friends to making new ones, every moment feels special.
          </p>
          <p className="text-sm md:text-base text-right">
            A social network that actually listens to its users! The design is sleek, the features are powerful, and the experience is seamless.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 text-base font-medium">
            See More
          </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
