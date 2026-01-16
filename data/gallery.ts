export type GalleryItem = {
  id: number;
  src: string;
  category: "race" | "participants" | "location";
  alt: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery/Race1.jpg",
    category: "race",
    alt: "Runners crossing the desert at sunset",
  },
  {
    id: 2,
    src: "/images/gallery/Participant1.jpg",
    category: "participants",
    alt: "Ultra Mirage marathon participants",
  },
  {
    id: 3,
    src: "/images/gallery/location1.jpg",
    category: "location",
    alt: "Palm trees and desert architecture in Tozeur",
  },
  {
    id: 4,
    src: "/images/gallery/Race2.jpg",
    category: "race",
    alt: "Runners crossing the desert at sunset",
  },
  {
    id: 5,
    src: "/images/gallery/Participant2.jpg",
    category: "participants",
    alt: "Ultra Mirage marathon participants",
  },
  {
    id: 6,
    src: "/images/gallery/Participant3.jpg",
    category: "participants",
    alt: "Ultra Mirage marathon participants",
  },
  {
    id: 7,
    src: "/images/gallery/Participant4.jpg",
    category: "participants",
    alt: "Ultra Mirage marathon participants",
  },
  {
    id: 8,
    src: "/images/gallery/PArticipant5.jpg",
    category: "participants",
    alt: "Ultra Mirage marathon participants",
  },
 
];
