import Header from '../components/Header'
import Footer from '../components/Footer'
import { teamMembers } from '@/lib/data'
import Link from 'next/link'

export const metadata = {
  title: 'About Us',
  description: 'Learn about THE SCRIBOR — House of Paper, our story, mission, and the passionate team behind Ahmedabad\'s favorite stationery store.',
}

export default function About() {
  return (
    <>
      <Header />
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary-teal to-primary-sky text-white">
          <div className="container-custom text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl mb-6">
              About THE SCRIBOR
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Where passion for paper meets curated excellence
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-white dark:bg-slate-800">
          <div className="container-custom max-w-4xl">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-8 text-center">
              Our Story
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                THE SCRIBOR was born from a simple love — a love for the tactile joy of paper, the smooth glide of a quality pen, and the endless possibilities held within a blank notebook. Founded in the heart of Ahmedabad, we set out to create more than just a store; we wanted to build a haven for students, professionals, artists, and anyone who believes that the right tools can spark creativity and productivity.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Every product in our collection is handpicked with care. We believe in quality over quantity, in timeless designs over fleeting trends, and in the power of thoughtful curation. Whether you're a student preparing for exams, an artist seeking the perfect canvas, or someone looking for a meaningful gift, we're here to help you find exactly what you need.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Today, THE SCRIBOR stands as Ahmedabad's trusted destination for books, stationery, and gifts. We're proud to serve our community with personalized service, sustainable choices, and a commitment to making every visit a delightful experience.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-padding bg-neutral-bg dark:bg-slate-900">
          <div className="container-custom">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-12 text-center">
              Our Mission & Values
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-8 text-center">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-text dark:text-white mb-3">
                  Quality First
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We curate only the finest products that meet our high standards for durability, design, and functionality.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-text dark:text-white mb-3">
                  Affordability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Premium doesn't have to mean expensive. We offer competitive prices and regular promotions to make quality accessible.
                </p>
              </div>
              
              <div className="card p-8 text-center">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="font-poppins font-semibold text-xl text-neutral-text dark:text-white mb-3">
                  Sustainability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We prioritize eco-friendly products and use recyclable packaging to minimize our environmental footprint.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white dark:bg-slate-800">
          <div className="container-custom">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-12 text-center">
              Meet Our Team
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="card p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-white text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-poppins font-semibold text-xl text-neutral-text dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-teal font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In-Store Experience */}
        <section className="section-padding bg-neutral-bg dark:bg-slate-900">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-text dark:text-white mb-6">
              In-Store Experiences & Events
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              THE SCRIBOR is more than a retail space — it's a community hub. We regularly host art workshops, book launches, stationery showcases, and creative meetups. Whether you're looking to learn a new skill, meet fellow enthusiasts, or simply browse in a welcoming environment, our store is your creative sanctuary.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎨</div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-neutral-text dark:text-white mb-2">
                    Art Workshops
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Monthly workshops on watercolor, calligraphy, bullet journaling, and more.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📚</div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-neutral-text dark:text-white mb-2">
                    Book Launches
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Meet local authors and discover new releases at our intimate book events.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">✨</div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-neutral-text dark:text-white mb-2">
                    Product Showcases
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Be the first to explore new collections and seasonal arrivals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="font-poppins font-semibold text-lg text-neutral-text dark:text-white mb-2">
                    Community Meetups
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Connect with fellow stationery lovers and creative minds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-primary text-white">
          <div className="container-custom text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Meet Us in Store
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Experience THE SCRIBOR in person. We'd love to show you around and help you discover your next favorite product.
            </p>
            <Link
              href="/contact"
              className="btn-primary bg-white text-primary-teal hover:bg-gray-100 inline-block"
            >
              Visit Us Today
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
