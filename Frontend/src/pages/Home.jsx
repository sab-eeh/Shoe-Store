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

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.products);
    });
  }, []);

  /* ================= CATEGORY GROUPING ================= */

  const grouped = {
    men: products.filter((p) => p.category.startsWith("men")),
    kids: products.filter((p) => p.category.startsWith("kids")),
    sports: products.filter((p) => p.category.includes("sports")),
    casual: products.filter((p) => p.category.includes("casual")),
  };

  return (
    <Page>
      {/* ================= HERO ================= */}
      <section className="container-app">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-slate-50 to-white p-10 sm:p-16 shadow-soft"
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
              Designed for Movement.
              <br />
              <span className="text-primary">Built for Everyday.</span>
            </h1>

            <p className="mt-5 text-lg text-muted max-w-2xl">
              Explore premium footwear crafted for comfort, performance, and
              modern lifestyles.
            </p>

            <SearchBar />

            <div className="mt-8 flex gap-4">
              <Link to="/products">
                <Button size="lg">Shop Collection</Button>
              </Link>
              <Link to="/orders">
                <Button size="lg" variant="outline">
                  Track Orders
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= CATEGORY SECTIONS ================= */}

      <CategorySection
        title="Men's Collection"
        subtitle="Performance & lifestyle shoes for men"
        products={grouped.men}
        link="/products?gender=men"
      />

      <CategorySection
        title="Sports Shoes"
        subtitle="Built for speed, comfort, and endurance"
        products={grouped.sports}
        link="/products?type=sports"
      />

      <CategorySection
        title="Casual Wear"
        subtitle="Everyday comfort with modern design"
        products={grouped.casual}
        link="/products?type=casual"
      />

      <CategorySection
        title="Kids Collection"
        subtitle="Lightweight and durable shoes for kids"
        products={grouped.kids}
        link="/products?gender=kids"
      />

      {/* ================= CTA ================= */}
      <section className="container-app mt-32 mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-border bg-primary p-12 text-white text-center shadow-soft"
        >
          <h2 className="text-3xl font-extrabold">Find Your Next Pair</h2>
          <p className="mt-3 text-white/90">
            Design, durability, and comfort—built for you.
          </p>

          <div className="mt-8">
            <Link to="/products">
              <Button size="lg" variant="secondary">
                Browse All Products
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Newsletter />
    </Page>
  );
}

/* ================= REUSABLE CATEGORY SECTION ================= */

function CategorySection({ title, subtitle, products, link }) {
  if (products.length === 0) return null;

  return (
    <section className="container-app mt-28">
      <SectionHeading
        title={title}
        subtitle={subtitle}
        right={
          <Link to={link}>
            <Button>View All</Button>
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
        {products.slice(0, 4).map((product) => (
          <motion.div key={product._id} variants={fadeUp}>
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
