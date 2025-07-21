import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 bg-champagne dark:bg-dark-purple min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-dark-purple dark:text-champagne">contact.</h1>
        <Link
          href="/"
          className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne transition"
        >
          ← return
        </Link>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4 text-dark-purple dark:text-champagne">
          let&apos;s <span className="underline text-caribbean-current dark:text-dark-cyan">connect</span>!
        </h2>
        
        <p className="text-dark-cyan dark:text-desert-sand mb-4">
          feel free to reach out if you want to collaborate, have any questions, or just want to say hi!
        </p>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-dark-purple dark:text-champagne mb-2">email</h3>
            <a 
              href="mailto:contact@zandimt.com" 
              className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne transition"
            >
              contact@zandimt.com
            </a>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-dark-purple dark:text-champagne mb-2">social media</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne transition"
              >
                linkedin
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne transition"
              >
                github
              </a>
            </div>
          </div>
        </div>
        
        <p className="text-dark-cyan dark:text-desert-sand text-sm">
          thanks for visiting! looking forward to hearing from you.
        </p>
      </div>
    </main>
  );
} 