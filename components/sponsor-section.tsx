"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Building2, Mail, Phone, MessageSquare, Send } from "lucide-react";

import "swiper/css";
import "swiper/css/autoplay";

export function SponsorsSection() {
  const presentingSponsor = {
    name: "Assurances BIAT",
    logo: "/assurances-biat.png",
  };

  const sponsors = [
    { id: 2, name: "Inspiring Tunisia", logo: "/inspiring-tunisia.png" },
    { id: 2, name: "Médis", logo: "/médis.jpg" },
    { id: 3, name: "Blue Fish", logo: "/Blue Fish logo.png" },
    { id: 4, name: "Solecrypt", logo: "/solecrypt.svg" },
    { id: 5, name: "Dar Ben Gacem", logo: "/dar-ben-gacem.png" },
    { id: 6, name: "DATY Healthy Bar", logo: "/DATY-healthy-bar.jpg" },
    { id: 7, name: "Cérealis", logo: "/cerealis-logo.png" },
    { id: 8, name: "Figeac Aero Tunisia", logo: "/LOGO FIGEAC AERO TUNISIE fr.png" },
  ];

  const loopList = [...sponsors, ...sponsors];

  return (
    <section
      id="sponsors"
      className="bg-linear-to-b from-gray-50 to-background dark:from-gray-900 dark:to-background py-16 md:py-24"
    >
      {/* Header */}
      <div className="container text-center mb-12">
        <p className="text-[#F5C542] text-sm font-semibold tracking-widest uppercase mb-4">
          Our Partners
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Sponsors & Partners
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Ultra Mirage is made possible thanks to the generous support of our partners.
        </p>
      </div>

      {/* ⭐ Presenting Sponsor */}
      <div className="container">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#F5C542] to-transparent" />
          <p className="text-center text-sm uppercase tracking-widest text-[#F5C542] font-semibold">
            Presenting Sponsor
          </p>
          <div className="h-px flex-1 bg-linear-to-r from-transparent via-[#F5C542] to-transparent" />
        </div>

        <Card className="mx-auto max-w-md p-8 flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-[#F5C542]/30 shadow-xl hover:shadow-2xl transition-shadow">
          <Image
            src={presentingSponsor.logo}
            alt={presentingSponsor.name}
            width={320}
            height={160}
            className="object-contain h-32 w-auto"
            priority
          />
        </Card>
      </div>

      {/* Divider */}
      <div className="container mt-16 mb-10">
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent" />
      </div>

      {/* Official Sponsors */}
      <div className="container text-center mb-10">
        <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
          Official Sponsors & Partners
        </p>
      </div>

      {/* Carousel */}
      <div className="group cursor-pointer">
        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          slidesPerView={2}
          breakpoints={{
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {loopList.map((sponsor, index) => (
            <SwiperSlide key={`${sponsor.id}-${index}`}>
              <div className="flex items-center justify-center h-28 px-6">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={200}
                  height={100}
                  className="h-20 w-auto object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA */}
      <div className="container mt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">
            Become a Sponsor
          </h3>
          <p className="text-muted-foreground mb-6">
            Join our community of partners and support the Ultra Mirage Desert Marathon. 
            Get visibility, connect with runners, and be part of an unforgettable event.
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold"
              >
                Request for Sponsoring
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">Sponsorship Request</DialogTitle>
                <DialogDescription>
                  Fill out the form below and our team will contact you shortly.
                </DialogDescription>
              </DialogHeader>
              
              <SponsorForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

function SponsorForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    sponsorshipType: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Sponsorship request:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        sponsorshipType: "",
        budget: "",
        message: "",
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Request Sent!</h3>
        <p className="text-muted-foreground">
          Thank you for your interest. We'll contact you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="companyName" className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-[#F5C542]" />
            Company Name *
          </Label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            required
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542]"
            placeholder="Your company name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contactName">
            Contact Name *
          </Label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            value={formData.contactName}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542]"
            placeholder="Your full name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#F5C542]" />
            Email *
          </Label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542]"
            placeholder="contact@company.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#F5C542]" />
            Phone *
          </Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542]"
            placeholder="+216 XX XXX XXX"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="sponsorshipType">
            Sponsorship Package *
          </Label>
          <select
            id="sponsorshipType"
            name="sponsorshipType"
            required
            value={formData.sponsorshipType}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542]"
          >
            <option value="">Select a package</option>
            <option value="presenting">Presenting Sponsor</option>
            <option value="gold">Gold Sponsor</option>
            <option value="silver">Silver Sponsor</option>
            <option value="bronze">Bronze Sponsor</option>
            <option value="partner">Official Partner</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">
            Budget Range
          </Label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542]"
          >
            <option value="">Select budget range</option>
            <option value="5000-10000">5,000 - 10,000 TND</option>
            <option value="10000-25000">10,000 - 25,000 TND</option>
            <option value="25000-50000">25,000 - 50,000 TND</option>
            <option value="50000+">50,000+ TND</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-[#F5C542]" />
          Message
        </Label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C542]/20 focus:border-[#F5C542] resize-none"
          placeholder="Tell us about your company and how you'd like to partner with us..."
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#F5C542] hover:bg-[#e6b937] text-black font-semibold"
        >
          {isSubmitting ? "Sending..." : "Send Request"}
          <Send className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
