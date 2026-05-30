export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  details: string[];
  images: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Oceanic Resin Serving Tray",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1772459125358-e587337c4a92?auto=format&fit=crop&q=80&w=800",
    category: "Resin Art",
    description: "A stunning handcrafted serving tray featuring high-quality epoxy resin that mimics the deep blue ocean waves crashing against a sandy shore. Perfect for entertaining or as a decorative centerpiece.",
    details: [
      "Hand-poured epoxy resin",
      "Sustainable acacia wood base",
      "Heat resistant up to 50°C",
      "Dimensions: 14 x 10 inches"
    ],
    images: [
      "https://images.unsplash.com/photo-1772459125358-e587337c4a92?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1776972334890-018cb3b3e3c6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1772459125358-e587337c4a92?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "2",
    name: "Custom Floral Preservation Frame",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1776972334890-018cb3b3e3c6?auto=format&fit=crop&q=80&w=800",
    category: "Custom Photo Frames",
    description: "Preserve your special memories with our custom floral frames. We use a specialized drying process to keep the vibrant colors of your flowers intact within a premium wooden frame.",
    details: [
      "Real dried flowers",
      "UV-protected glass",
      "Hand-finished oak frame",
      "Customizable layout"
    ],
    images: [
      "https://images.unsplash.com/photo-1776972334890-018cb3b3e3c6?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1772459125358-e587337c4a92?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "3",
    name: "Minimalist Ceramic Vase Set",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1776584615508-e70141dc7823?auto=format&fit=crop&q=80&w=800",
    category: "Home Decor",
    description: "A set of three hand-thrown ceramic vases with a matte stone finish. Their minimalist silhouette complements any modern interior while celebrating the beauty of imperfection.",
    details: [
      "Hand-thrown on a potter's wheel",
      "Natural stone glaze",
      "Waterproof interior",
      "Set of 3 different sizes"
    ],
    images: [
      "https://images.unsplash.com/photo-1776584615508-e70141dc7823?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1776972334890-018cb3b3e3c6?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "4",
    name: "Personalized Leather Journal",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1777446695149-927b3aec69e1?auto=format&fit=crop&q=80&w=800",
    category: "Personalized Gifts",
    description: "Hand-stitched full-grain leather journal that ages beautifully over time. Includes high-quality cream paper and can be personalized with initials or a short quote.",
    details: [
      "Full-grain vegetable-tanned leather",
      "160 pages of 120gsm paper",
      "Hand-stitched binding",
      "Free monogramming"
    ],
    images: [
      "https://images.unsplash.com/photo-1777446695149-927b3aec69e1?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1776584615508-e70141dc7823?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "5",
    name: "Abstract Gold Leaf Wall Art",
    price: 150.00,
    image: "https://images.unsplash.com/photo-1772459125358-e587337c4a92?auto=format&fit=crop&q=80&w=800",
    category: "Home Decor",
    description: "A unique abstract piece featuring genuine 24k gold leaf accents on a textured canvas. Each piece is hand-painted and signed by the artist.",
    details: [
      "24k gold leaf accents",
      "Gallery-wrapped canvas",
      "Ready to hang",
      "Certificate of authenticity included"
    ],
    images: [
      "https://images.unsplash.com/photo-1772459125358-e587337c4a92?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1776972334890-018cb3b3e3c6?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "6",
    name: "Macrame Wall Hanging",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1776584615508-e70141dc7823?auto=format&fit=crop&q=80&w=800",
    category: "Home Decor",
    description: "Intricately knotted macrame wall hanging made from 100% organic cotton cord on a natural driftwood branch. Adds a bohemian touch to any room.",
    details: [
      "100% organic cotton",
      "Natural driftwood branch",
      "Hand-knotted in our studio",
      "Dimensions: 20 x 30 inches"
    ],
    images: [
      "https://images.unsplash.com/photo-1776584615508-e70141dc7823?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1776972334890-018cb3b3e3c6?auto=format&fit=crop&q=80&w=800"
    ]
  }
];
