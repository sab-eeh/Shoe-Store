import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Page from "../components/common/Page";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import SearchBar from "../components/common/SearchBar";
import ProductCard from "../components/product/ProductCard";
import Newsletter from "../components/common/Newsletter";
import { getProducts } from "../api/products.api";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.products); // 🔥 SHOW ALL PRODUCTS
    });
  }, []);

  return (
    <Page>
      {/* ================= HERO ================= */}
      <section className="container-app">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-slate-50 to-white p-10 sm:p-16 shadow-soft"
        >
          <div className="max-w-3xl">
            <motion.h1
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
            >
              Designed for Movement.
              <br />
              <span className="text-primary">Built for Everyday.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="mt-5 text-lg text-muted max-w-2xl"
            >
              Explore premium footwear crafted for comfort, performance, and
              modern lifestyles.
            </motion.p>

            <SearchBar />

            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/products">
                <Button size="lg">Shop Collection</Button>
              </Link>
              <Link to="/orders">
                <Button size="lg" variant="outline">
                  Track Orders
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Decorative blur */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </motion.div>
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="container-app mt-24">
        <SectionHeading
          title="Shop by Category"
          subtitle="Curated collections for every need"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.value}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group"
            >
              <Link
                to={`/products?category=${cat.value}`}
                className="flex h-32 flex-col justify-center rounded-2xl border border-border bg-surface p-6 shadow-softSm transition group-hover:shadow-soft"
              >
                <div className="text-sm uppercase tracking-wider text-muted">
                  Category
                </div>
                <div className="mt-2 text-lg font-extrabold">{cat.label}</div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= ALL PRODUCTS ================= */}
      <section className="container-app mt-28">
        <SectionHeading
          title="Our Collection"
          subtitle={`Explore all ${products.length} available products`}
          right={
            <Link to="/products">
              <Button variant="ghost">View Filters</Button>
            </Link>
          }
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div key={product._id} variants={fadeUp}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="container-app mt-32">
        <SectionHeading
          title="Why ShoeStore"
          subtitle="Built with care, precision, and scalability"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <Feature
            title="Premium Materials"
            desc="High-quality construction engineered for long-term comfort."
          />
          <Feature
            title="Fast & Fluid UI"
            desc="Optimized interactions, smooth animations, and responsive layouts."
          />
          <Feature
            title="Future Ready"
            desc="Frontend-first architecture designed for seamless backend scaling."
          />
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="container-app mt-36 mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-primary p-12 text-white shadow-soft text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Find Your Next Pair
          </h2>
          <p className="mt-3 text-white/90 max-w-xl mx-auto">
            Discover footwear that blends design, durability, and everyday
            comfort.
          </p>

          <div className="mt-8 flex justify-center">
            <Link to="/products">
              <Button size="lg" variant="secondary">
                Browse Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Newsletter />
    </Page>
  );
}

/* ================= SUB COMPONENTS ================= */

function Feature({ title, desc }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-border bg-surface p-8 shadow-softSm"
    >
      <h3 className="text-lg font-extrabold">{title}</h3>
      <p className="mt-3 text-sm text-muted leading-relaxed">{desc}</p>
    </motion.div>
  );
}

/* ================= DATA ================= */

const categories = [
  { label: "Men", value: "men" },
  { label: "Women", value: "women" },
  { label: "Kids", value: "kids" },
  { label: "Sports", value: "sports" },
  { label: "Casual", value: "casual" },
];
