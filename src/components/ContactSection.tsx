import Link from 'next/link';

export default function ContactSection() {
    return (
      <section className="py-8 text-center transition-opacity duration-300">
        <h2 className="text-2xl font-semibold text-fuchsia-800 hover:text-white transition-colors duration-300">
          Want to add or remove a review? Send me an email
        </h2>
        <p className="text-gray-400">
          Email: <Link href="mailto:lucasbg.lobo@gmail.com">lucasbg.lobo@gmail.com</Link>
        </p>
      </section>
    );
}
