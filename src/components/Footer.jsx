const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 border-t border-purple-500/20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()}{' '}
          <span className="text-purple-400 font-semibold">Tinku Shekhar Das</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
