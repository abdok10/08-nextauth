import { Button } from "@components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import {
  ArrowRight,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  LayoutDashboard,
  Users,
  BarChart,
  Sliders,
  Puzzle,
  HeadphonesIcon,
} from "lucide-react";

function Home() {
  const testimonials = [
    {
      text: "This SaaS has transformed our workflow. It's intuitive, powerful, and the support is outstanding.",
      name: "John Doe",
      title: "CEO, Tech Corp",
    },
    {
      text: "We've seen a significant boost in productivity since adopting this platform. Highly recommended!",
      name: "Jane Smith",
      title: "CTO, Innovate Inc.",
    },
    {
      text: "The customizable workflows have allowed us to tailor the software to our specific needs. It's been a game-changer.",
      name: "Mike Johnson",
      title: "Operations Manager, Flex Solutions",
    },
    {
      text: "The real-time collaboration features have improved our team's communication and efficiency tremendously.",
      name: "Sarah Lee",
      title: "Project Manager, Agile Teams",
    },
    {
      text: "The analytics provided by this SaaS have given us valuable insights into our processes. We're now making data-driven decisions.",
      name: "Chris Taylor",
      title: "Data Analyst, Insight Corp",
    },
    {
      text: "Customer support has been exceptional. Any issues we've had were resolved quickly and professionally.",
      name: "Emily Brown",
      title: "Customer Success Manager, Happy Clients",
    },
  ];
  const features = [
    {
      icon: LayoutDashboard,
      title: "Intuitive Dashboard",
      description:
        "Easily manage your tasks and projects with our user-friendly dashboard.",
    },
    {
      icon: Users,
      title: "Real-time Collaboration",
      description:
        "Work seamlessly with your team in real-time, boosting productivity.",
    },
    {
      icon: BarChart,
      title: "Advanced Analytics",
      description: "Gain valuable insights with our powerful analytics tools.",
    },
    {
      icon: Sliders,
      title: "Customizable Workflows",
      description: "Tailor the platform to fit your unique business processes.",
    },
    {
      icon: Puzzle,
      title: "Seamless Integrations",
      description:
        "Connect with your favorite tools and services effortlessly.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our dedicated support team is always ready to assist you.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="px-4 py-20 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Simplify Your Workflow
        </h1>
        <p className="mb-8 text-xl text-gray-600">
          Boost productivity and streamline your tasks with our intuitive SaaS
          solution.
        </p>
        <Button className="text-lg">
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-white">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          Key Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-50 border-none shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 overflow-hidden bg-gray-100">
        <h2 className="mb-12 text-3xl font-bold text-center text-gray-900">
          What Our Customers Say
        </h2>
        <div className="flex overflow-hidden px-4">
          {[...testimonials, ...testimonials, ...testimonials].map(
            (testimonial, index) => (
              <Card
                key={index}
                className="w-80 flex-shrink-0 mx-4 bg-white shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription>{testimonial.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{testimonial.text}</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Get in Touch
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>
                Fill out the form below and we will get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Input type="text" placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={4} />
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 text-center bg-gray-50">
        <h2 className="mb-4 text-3xl font-bold text-gray-900">
          Ready to Get Started?
        </h2>
        <p className="mb-8 text-xl text-gray-600">
          Join thousands of satisfied customers and take your productivity to
          the next level.
        </p>
        <Button className="text-lg">
          Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="text-gray-400">
                We{"'"}re on a mission to simplify workflows and boost
                productivity for teams worldwide.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Features", "Pricing", "Blog", "Contact"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect With Us</h3>
              <div className="flex space-x-4">
                {[Twitter, Facebook, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Subscribe to Our Newsletter
              </h3>
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button variant="secondary">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2023 Your SaaS Company. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
