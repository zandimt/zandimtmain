import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 bg-champagne dark:bg-dark-purple min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-dark-purple dark:text-champagne">about.</h1>
        <Link
          href="/"
          className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne transition"
        >
          ← return
        </Link>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-dark-purple dark:text-champagne">
        i&apos;m <span className="underline text-caribbean-current dark:text-dark-cyan">zandi</span>, an aspiring full-stack developer with loads of ambiguous hobbies and interests.
      </h2>
      <p className="text-dark-cyan dark:text-desert-sand mb-4">
        i&apos;m using zandi as my online alias. if you know me from linkedin, here&apos;s more on me!
        if you know me from any other platforms, do not engage.
      </p>
      <br></br>
      <p className="text-dark-cyan dark:text-desert-sand mb-4">
        i&apos;m currently studying computing science in the netherlands. as i&apos;m finishing up my first year, not all my courses have gone that well,
        but i&apos;m pushing through. i&apos;m planning on diversifying my schedule next year past the mandatory courses.
      </p>
      <br></br>
      <p className="text-dark-cyan dark:text-desert-sand mb-4">
        i did one internship last summer at a startup called <a href="https://www.homii.nl" target="_blank" rel="noopener noreferrer" className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne">homii</a>.
        i worked on the backend of their platform, which is a platform for managing your utility bills, specifically electricity and gas.
      </p>
      <br></br>
      <p className="text-dark-cyan dark:text-desert-sand mb-4">
        i&apos;m currently doing an internship at a cancer research company called <a href="https://www.cc-diagnostics.com" target="_blank" rel="noopener noreferrer" className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne">cc diagnostics</a>.
        as a full-stack developer, i&apos;m in charge of the development of the upcoming tool which will help researchers in the cervical cancer field.
        <br></br>
        my tech stack is a mix of python with fastapi and react.
      </p>
      <br></br>
        <h2 className="text-2xl font-bold mb-4 text-dark-purple dark:text-champagne">
        now, my interests vary massively, which is why i can never really pin down what i&apos;m doing.
        </h2>
            <p className="text-dark-cyan dark:text-desert-sand mb-2">i&apos;m currently interested in the following:</p>
            <ul className="list-disc list-inside text-dark-cyan dark:text-desert-sand mb-4">
            <li>full-stack development (react, next.js, go, fastapi)</li>
            <li>ui/ux design (currently learning figma)</li>
            <li>devops (currently a working progress)</li>
            <li>low-level programming (kind of a noob rn honestly, but i&apos;m learning arm assembly)</li>
            </ul>
            <p className="text-dark-cyan dark:text-desert-sand mb-2">but also:</p>
            <ul className="list-disc list-inside text-dark-cyan dark:text-desert-sand mb-4">
                <li>the marvel cinematic universe</li>
                <li>reading (from trash motivational books to sci-fi)</li>
                <li>learning new languages, whether spoken or programming</li>
                <li>procrastinating the meaning of life</li>
                <li>hard techno (shoutout holy priest, asbek and fantasm)</li>
                <li>ambient music</li>
            </ul>
            <p className="text-dark-cyan dark:text-desert-sand mb-4">here&apos;s one of my fav songs:</p>
            <div className="mt-8">
              <iframe 
                style={{borderRadius: "12px"}} 
                src="https://open.spotify.com/embed/track/0oPTWt05jiLscvsAbS9Fi4?utm_source=generator" 
                width="300" 
                height="152" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              />
            </div>
            <br></br>
            <p className="text-dark-cyan dark:text-desert-sand">
                i&apos;m not about to write my whole life story here, but thanks for sticking till the end!
                check out whatever blog posts are out. i&apos;m planning on writing more in the future.
            </p>
    </main>
  );
}