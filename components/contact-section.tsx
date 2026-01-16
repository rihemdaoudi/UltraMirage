"use client";

import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageSquare } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-28 bg-linear-to-r from-orange-400 to-yellow-300 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">GET IN TOUCH</h2>
          <p className="mt-4 text-lg">Have questions? Our team is here to help.</p>
        </div>

        {/* Contact Rows */}
        <div className="space-y-12">
          {/* International Sales */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="text-gray-900">
              <p>Beaumont House</p>
              <p>Kingswood Warren Park</p>
              <p>Woodland Way</p>
              <p>Surrey KT20 6AD</p>
              <p>United Kingdom</p>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-semibold">International Sales</h3>
              <p>Ultra Mirage Sports International Ltd</p>
              <p>
                <a href="mailto:organisation@ultramirage.com" className="text-primary underline">
                  organisation@ultramirage.com
                </a>
              </p>
            </div>
          </div>
          <hr className="border-gray-900" />

          {/* Communication & Sponsorship */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="text-gray-900">
              <p>Dar El Harka</p>
              <p>42, rue du Pacha</p>
              <p>Médina de Tunis 1006</p>
              <p>Tunis – Tunisia</p>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-semibold">Communication & Sponsorship</h3>
              <p>
                <a href="mailto:organisation@ultramirage.com" className="text-primary underline">
                  organisation@ultramirage.com
                </a>
              </p>
            </div>
          </div>
          <hr className="border-gray-900" />

          {/* Association */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="text-gray-900 md:text-left">
              <h3 className="text-xl font-semibold">Association Ultra Marathon Tunisie</h3>
              <p>
                <a href="mailto:info@ultramirage.com" className="text-primary underline">
                  info@ultramirage.com
                </a>
              </p>
              <p>WhatsApp: +44 77 4 89 62 89 4</p>
              <p>Bank RIB: BIAT 08 305 0000620076139 60</p>
              <p>IBAN: TN59 0830 5000 0620 0761 3960</p>
              <p>BIC: BIATTNTT</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl h-64">
          <iframe
            src="https://www.google.com/maps?q=Dar+El+Harka,+Medina+de+Tunis&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>

        {/* Contact Us CTA */}
        <div className="container mt-16 text-center max-w-4xl mx-auto">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold"
              >
                Contact Us
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-150 max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Contact Us</DialogTitle>
                <DialogDescription>
                  Fill out the form below and our team will contact you shortly.
                </DialogDescription>
              </DialogHeader>

              <ContactForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">Thank you for contacting us. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#F5C542]" /> Name *
          </Label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542]"
            placeholder="Your full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#F5C542]" /> Email *
          </Label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542]"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-[#F5C542]" /> Phone *
        </Label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542]"
          placeholder="+216 XX XXX XXX"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-[#F5C542]" /> Message *
        </Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542] resize-none"
          placeholder="Your message..."
        />
      </div>

      <div className="flex justify-end pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold px-10 py-4 text-lg"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

