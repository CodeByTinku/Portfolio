import { useState } from 'react';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState(''); // 'success' or 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult('Sending message...');
    setStatus('');

    const formData = new FormData(event.target);
    formData.append('access_key', '25c01e83-d762-49be-a531-5bfabe8ee922');
    formData.append('subject', 'New Submission from Portfolio');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setResult('Message sent successfully!');
        setStatus('success');
        event.target.reset();
      } else {
        setResult(resJson.message || 'Something went wrong!');
        setStatus('error');
      }
    } catch (error) {
      console.log(error);
      setResult('Something went wrong! Please try again.');
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => {
        setResult(null);
        setStatus('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 border-t border-purple-500/20 relative transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 fade-in">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Text and Social Links */}
          <div className="fade-in-up">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Let's Talk</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out via the form or connect with me on social media.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/codeByTinku" target="_blank" rel="noopener noreferrer" className="social-link group">
                <i className="fab fa-github text-3xl"></i>
                <span className="mt-2 text-sm">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link group">
                <i className="fab fa-linkedin text-3xl"></i>
                <span className="mt-2 text-sm">LinkedIn</span>
              </a>
              <a href="mailto:your.email@gmail.com" className="social-link group" target="_blank" rel="noreferrer">
                <i className="fas fa-envelope text-3xl"></i>
                <span className="mt-2 text-sm">Email</span>
              </a>
              <a href="https://lavanzo.in" className="social-link group" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-shopify text-3xl"></i>
                <span className="mt-2 text-sm">Lavanzo</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-200 dark:border-purple-500/20 shadow-2xl fade-in-up animation-delay-200">
            <form onSubmit={onSubmit} className="space-y-6">
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" disabled={loading} className="w-full cta-button justify-center mt-4">
                {loading ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <i className="fas fa-paper-plane ml-2"></i>
                  </>
                )}
              </button>
              {result && (
                <p
                  className={`text-sm text-center mt-4 font-medium transition-all ${
                    status === 'success' ? 'text-green-400' : status === 'error' ? 'text-red-400' : 'text-gray-400'
                  }`}
                >
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
