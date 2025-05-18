import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MousePointer2,
  Mail,
  Layout,
  Palette,
  Sparkles,
  Layers,
  Star,
} from "lucide-react";
import { useEffect, useRef } from "react";

const Landing = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 },
    );

    // Select all elements with the reveal class
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        revealElements.forEach((el) => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div className="min-h-screen landing-gradient overflow-hidden">
      {/* Hero Section with enhanced animations */}
      <header className="container mx-auto px-4 py-20 md:py-32 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-28 h-28 rounded-full bg-purple-200/70 filter blur-md"
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute bottom-10 left-[10%] w-24 h-24 rounded-xl bg-blue-200/60 filter blur-sm"
            animate={{
              y: [0, 30, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/4 w-16 h-16 rounded-lg bg-yellow-200/60 filter blur-sm hidden lg:block"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 25, 0],
            }}
            transition={{
              duration: 7,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 2,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-pink-200/50 filter blur-md hidden lg:block"
            animate={{
              scale: [1, 0.9, 1],
              x: [0, -15, 0],
            }}
            transition={{
              duration: 9,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 3,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            className="inline-block mb-6 px-6 py-2.5 bg-purple-100 rounded-full text-lotus-primary font-semibold"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(155, 135, 245, 0.5)",
            }}
          >
            <Sparkles className="inline-block mr-2 h-5 w-5" /> Newsletter
            Builder Made Easy
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-creative font-bold mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Create Beautiful
            <motion.div
              className="lotus-text-gradient block mt-2"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Newsletters
            </motion.div>
            <motion.span
              className="block mt-1 text-3xl md:text-4xl font-elegant text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              In Minutes, Not Hours
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-elegant"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our intuitive drag-and-drop newsletter builder helps you create
            professional-looking content without any design skills.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/app">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="shine-effect px-8 py-6 bg-lotus-primary hover:bg-lotus-secondary text-white text-lg rounded-lg shadow-lg shadow-lotus-primary/20 border border-white/10"
                >
                  Try Builder Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </Link>

            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 border-2 border-lotus-primary text-lotus-primary hover:bg-lotus-primary/10 shadow-lg"
            >
              View Templates
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-lotus-primary">500+</div>
              <div className="text-sm text-gray-500">Templates</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-lotus-primary">10k+</div>
              <div className="text-sm text-gray-500">Happy Users</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-lotus-primary">99%</div>
              <div className="text-sm text-gray-500">Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Features Section with scroll animations */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lotus-subtle/20 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal fade-bottom">
            <motion.div
              className="inline-block mb-3 px-4 py-1.5 bg-lotus-subtle rounded-full text-lotus-primary font-medium text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Powerful Features
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-creative font-bold mb-4">
              <span className="lotus-text-gradient">Features</span> That Make
              Newsletter Creation Easy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to create professional newsletters that engage
              your audience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl card-hover reveal fade-bottom"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 mb-6 bg-purple-100 rounded-xl flex items-center justify-center text-lotus-primary">
                <Layout className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Drag & Drop Editor</h3>
              <p className="text-gray-600">
                Simply drag elements into place to build your perfect newsletter
                layout without any coding.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl card-hover reveal fade-bottom"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 mb-6 bg-blue-100 rounded-xl flex items-center justify-center text-blue-500">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Magic Structure</h3>
              <p className="text-gray-600">
                Generate beautiful newsletter layouts with just one click using
                our AI-powered structure templates.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl card-hover reveal fade-bottom"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 mb-6 bg-green-100 rounded-xl flex items-center justify-center text-green-500">
                <Palette className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Customizable Design</h3>
              <p className="text-gray-600">
                Personalize every aspect of your newsletter with custom colors,
                fonts, and layouts.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl card-hover reveal fade-bottom"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 mb-6 bg-pink-100 rounded-xl flex items-center justify-center text-pink-500">
                <Layers className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Template Gallery</h3>
              <p className="text-gray-600">
                Browse through hundreds of professionally designed templates to
                jumpstart your newsletter.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl card-hover reveal fade-bottom"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-16 h-16 mb-6 bg-amber-100 rounded-xl flex items-center justify-center text-amber-500">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Export Options</h3>
              <p className="text-gray-600">
                Export your newsletter as PDF, HTML or integrate directly with
                popular email platforms.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl card-hover reveal fade-bottom"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-16 h-16 mb-6 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-500">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Content Assistance</h3>
              <p className="text-gray-600">
                Get intelligent content suggestions and automated formatting for
                professional results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-lotus-subtle/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal fade-bottom">
            <motion.div
              className="inline-block mb-3 px-4 py-1.5 bg-white rounded-full text-lotus-primary font-medium text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Simple Process
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-creative font-bold mb-4">
              How It <span className="lotus-text-gradient">Works</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Create stunning newsletters in just three simple steps
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl max-w-xs text-center reveal fade-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-lotus-primary text-white flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Choose a Template</h3>
              <p className="text-gray-600">
                Select from a variety of professionally designed templates or
                start from scratch.
              </p>
            </motion.div>

            <div className="hidden md:block">
              <motion.div
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <ArrowRight className="h-10 w-10 text-lotus-primary" />
              </motion.div>
            </div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl max-w-xs text-center reveal fade-bottom"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-lotus-secondary text-white flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Customize Content</h3>
              <p className="text-gray-600">
                Add your text, images, and customize every element to match your
                brand.
              </p>
            </motion.div>

            <div className="hidden md:block">
              <motion.div
                animate={{
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 0.5,
                }}
              >
                <ArrowRight className="h-10 w-10 text-lotus-primary" />
              </motion.div>
            </div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl max-w-xs text-center reveal fade-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 mb-6 rounded-full bg-purple-400 text-white flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Export & Share</h3>
              <p className="text-gray-600">
                Export your newsletter as PDF or HTML and share it with your
                audience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal fade-bottom">
            <motion.div
              className="inline-block mb-3 px-4 py-1.5 bg-lotus-subtle rounded-full text-lotus-primary font-medium text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What People Say
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-creative font-bold mb-4">
              Loved by <span className="lotus-text-gradient">Creators</span>{" "}
              Worldwide
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                quote:
                  "This newsletter builder has saved our team countless hours. The templates are beautiful and the customization options are exactly what we needed.",
              },
              {
                name: "Michael Chen",
                role: "Content Creator",
                quote:
                  "The drag-and-drop interface is so intuitive, and the Magic Structure feature is a game changer. I can create professional newsletters in minutes!",
              },
              {
                name: "Emily Rodriguez",
                role: "Small Business Owner",
                quote:
                  "As someone with no design experience, this tool has been invaluable. My newsletters now look professionally designed and my open rates have improved.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 reveal fade-bottom"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-lotus-primary to-lotus-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 lotus-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjItMS44LTQtNC00cy00IDEuOC00IDQgMS44IDQgNCA0IDQtMS44IDQtNHptMCAwIi8+PC9nPjwvZz48L3N2Zz4=')] bg-[length:60px] opacity-50"></div>
        </div>

        <motion.div
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-creative font-bold text-white mb-6">
            Ready to Create Your Next Newsletter?
          </h2>
          <p className="text-white text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Join thousands of users who create engaging newsletters in minutes.
          </p>
          <Link to="/app">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-white text-lotus-primary hover:bg-gray-100 px-10 py-7 text-lg font-bold rounded-xl shadow-2xl"
              >
                Start Building Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>
          </Link>

          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [20, 0] }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {[
              "Intuitive",
              "Time-Saving",
              "Creative",
              "Professional",
              "Customizable",
            ].map((tag, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white"
              >
                {tag}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="font-creative text-2xl font-bold lotus-text-gradient">
                Newsletter Builder
              </h2>
              <p className="text-gray-600 text-sm">
                © 2025 All rights reserved
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
              <div>
                <h4 className="font-bold mb-4">Product</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-lotus-primary"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-lotus-primary"
                    >
                      Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-lotus-primary"
                    >
                      Integrations
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-lotus-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-lotus-primary"
                    >
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-lotus-primary"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-lotus-primary"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-lotus-primary"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-lotus-primary"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-10 pt-10 flex flex-col md:flex-row items-center justify-between">
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="#" className="text-gray-500 hover:text-lotus-primary">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-lotus-primary">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-lotus-primary">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-lotus-primary text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-lotus-primary text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-lotus-primary text-sm"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
