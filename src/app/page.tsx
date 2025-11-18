"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import AboutMetric from '@/components/sections/about/AboutMetric';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Award, CalendarDays, Crown, Facebook, Handshake, Instagram, Linkedin, Mail, MapPin, Star, Trophy, Twitter, Users, Watch } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="small"
      background="animatedAurora"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Watches", id: "watches" },
            { name: "Collections", id: "collections" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Timepiece Dubai"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Luxury Timepieces in Dubai"
          description="Discover the world's most prestigious watch collections in the heart of Dubai. Experience unparalleled craftsmanship and timeless elegance."
          tag="Premium Collection"
          tagIcon={Crown}
          buttons={[
            { text: "Explore Collection", href: "watches" },
            { text: "Visit Showroom", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456991647-cep8bv6z.jpg",
              imageAlt: "Luxury gold watch premium timepiece"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456992382-v0qjan6m.jpg",
              imageAlt: "Swiss mechanical chronograph watch"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456993134-q1qj9zha.jpg",
              imageAlt: "Premium diamond luxury watch"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="At Timepiece Dubai, we represent the pinnacle of horological excellence, bringing together the world's most coveted luxury watch brands under one prestigious roof in the heart of Dubai."
          metrics={[
            {
              icon: Award,
              label: "Years of Excellence",
              value: "25+"
            },
            {
              icon: Crown,
              label: "Luxury Brands",
              value: "50+"
            },
            {
              icon: Users,
              label: "Satisfied Clients",
              value: "10K+"
            },
            {
              icon: Star,
              label: "Expert Rating",
              value: "5.0"
            }
          ]}
        />
      </div>

      <div id="watches" data-section="watches">
        <ProductCardThree
          title="Featured Timepieces"
          description="Explore our curated selection of the world's finest luxury watches, each piece representing the pinnacle of horological craftsmanship."
          tag="Premium Collection"
          tagIcon={Watch}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Rolex Submariner Professional",
              price: "AED 32,500",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456994562-2bt6ja61.jpg",
              imageAlt: "Rolex Submariner luxury dive watch",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Omega Speedmaster Moonwatch",
              price: "AED 28,900",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456995069-5j8mrznv.jpg",
              imageAlt: "Omega Speedmaster chronograph",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Patek Philippe Calatrava",
              price: "AED 85,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456995739-y9t7bzp0.jpg",
              imageAlt: "Patek Philippe luxury dress watch",
              initialQuantity: 1
            },
            {
              id: "4",
              name: "TAG Heuer Monaco",
              price: "AED 18,500",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456996542-94fqxobl.jpg",
              imageAlt: "TAG Heuer racing chronograph",
              initialQuantity: 1
            },
            {
              id: "5",
              name: "Breitling Navitimer",
              price: "AED 22,750",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456997202-yw8wqfkf.jpg",
              imageAlt: "Breitling aviation pilot watch",
              initialQuantity: 1
            }
          ]}
          buttons={[
            { text: "View Full Collection", href: "collections" }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Legacy"
          description="Numbers that showcase our commitment to excellence and our position as Dubai's premier luxury watch destination."
          tag="Achievement"
          tagIcon={Trophy}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              value: "25",
              title: "years",
              description: "Of horological expertise in Dubai",
              icon: CalendarDays
            },
            {
              id: "2",
              value: "50+",
              title: "brands",
              description: "World's finest luxury watch makers",
              icon: Crown
            },
            {
              id: "3",
              value: "10K+",
              title: "clients",
              description: "Satisfied luxury watch collectors",
              icon: Users
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Watch Experts"
          description="Meet our team of certified horologists and luxury watch specialists who bring decades of experience to serve you."
          tag="Our Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="blur-reveal"
          members={[
            {
              id: "1",
              name: "Ahmed Al Rashid",
              role: "Master Horologist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456997951-hnxnurlr.jpg",
              imageAlt: "Ahmed Al Rashid - Master Horologist",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/ahmed-rashid" },
                { icon: Mail, url: "mailto:ahmed@timepiecedubai.com" }
              ]
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "Luxury Watch Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456998874-b6evencb.jpg",
              imageAlt: "Sarah Chen - Luxury Watch Specialist",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/sarah-chen" },
                { icon: Mail, url: "mailto:sarah@timepiecedubai.com" }
              ]
            },
            {
              id: "3",
              name: "Marco Benedetti",
              role: "Swiss Watch Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456999372-cqsoszer.jpg",
              imageAlt: "Marco Benedetti - Swiss Watch Expert",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/marco-benedetti" },
                { icon: Mail, url: "mailto:marco@timepiecedubai.com" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Client Testimonials"
          description="Discover why Dubai's most discerning watch collectors trust us with their horological investments."
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Mohammed bin Hassan",
              role: "CEO, Emirates Holdings",
              testimonial: "Exceptional service and an unparalleled collection. The team's expertise in luxury timepieces is truly remarkable. My Patek Philippe acquisition was handled with the utmost professionalism.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763456999921-99l7jb62.jpg",
              imageAlt: "Mohammed bin Hassan testimonial"
            },
            {
              id: "2",
              name: "Elena Volkov",
              role: "Art Collector",
              testimonial: "The finest watch showroom in Dubai. Their curated selection and knowledgeable staff made finding my perfect Rolex an absolute pleasure. Highly recommended for serious collectors.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763457000473-p907khks.jpg",
              imageAlt: "Elena Volkov testimonial"
            },
            {
              id: "3",
              name: "James Morrison",
              role: "Investment Banker",
              testimonial: "Outstanding expertise and service. The team helped me select an investment-grade timepiece that exceeded my expectations. Their after-sales service is exemplary.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763457001121-hfw8taii.jpg",
              imageAlt: "James Morrison testimonial"
            },
            {
              id: "4",
              name: "Dr. Rashid Ahmed",
              role: "Surgeon & Watch Enthusiast",
              testimonial: "As a longtime watch collector, I appreciate their authentic pieces and transparent dealings. The showroom atmosphere is refined and the staff truly understands horology.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763457001910-64sav8fl.jpg",
              imageAlt: "Dr. Rashid Ahmed testimonial"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Authorized Dealer"
          description="Proud authorized retailer of the world's most prestigious watch manufacturers, ensuring authenticity and warranty coverage."
          tag="Partnerships"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763457002750-rrqf89yl.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763457003583-czqgv22u.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763457004115-876qq1gs.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763457004740-1909wdxm.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763457005434-09w0lip7.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763457006106-9i82e5fr.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32pj8e1GcgiOEWWC6aYveoEdoWX/uploaded-1763457006802-i83rkau7.jpg"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Experience Luxury in Dubai"
          description="Schedule a private consultation or visit our showroom to explore the world's finest timepieces in an exclusive setting."
          tagIcon={MapPin}
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Schedule Visit"
          termsText="By submitting your information, you agree to receive exclusive updates about luxury timepieces and private viewing invitations."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Timepiece Dubai"
          copyrightText="© 2025 Timepiece Dubai. All rights reserved."
          columns={[
            {
              title: "Collections",
              items: [
                { label: "Rolex", href: "collections/rolex" },
                { label: "Patek Philippe", href: "collections/patek" },
                { label: "Omega", href: "collections/omega" },
                { label: "TAG Heuer", href: "collections/tag" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Authentication", href: "services/authentication" },
                { label: "Maintenance", href: "services/maintenance" },
                { label: "Valuations", href: "services/valuations" },
                { label: "Trade-In", href: "services/trade" }
              ]
            },
            {
              title: "Showroom",
              items: [
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Appointments", href: "contact" },
                { label: "Private Viewings", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/timepiecedubai",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/timepiecedubai",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/timepiecedubai",
              ariaLabel: "Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}