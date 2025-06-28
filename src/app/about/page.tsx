
export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">about.</h1>
      <h2 className="text-2xl font-bold mb-4">
        i'm <span className="underline">zandi</span>, an aspiring full-stack developer with loads of ambiguous hobbies and interests.
      </h2>
      <p>
        i'm using zandi as my online alias. if you know me from linkedin, here's more on me!
        if you know me from any other platforms, this is another nerdy side of me.
      </p>
      <br></br>
      <p>
        i'm currently studying computing science in the netherlands. as i'm finishing up my first year, not all my courses have gone that well,
        but i'm pushing through. i'm planning on diversifying my schedule next year past the mandatory courses.
      </p>
      <br></br>
      <p>
        i did one internship last summer at a startup called <a href="https://www.homii.nl" target="_blank" rel="noopener noreferrer">homii</a>.
        i worked on the backend of their platform, which is a platform for managing your utility bills, specifically electricity and gas.
      </p>
      <br></br>
      <p>
        i'm currently doing an internship at a cancer research company called <a href="https://www.cc-diagnostics.com" target="_blank" rel="noopener noreferrer">cc diagnostics</a>.
        as a full-stack developer, i'm in charge of the development of the upcoming tool which will help researchers in the cervical cancer field.
        <br></br>
        my tech stack is a mix of python with fastapi and react.
      </p>
      <br></br>
        <h2 className="text-2xl font-bold mb-4">
        now, my interests vary massively, which is why i can never really pin down what i'm doing.
        </h2>
            i'm currently interested in the following:
            <ul className="list-disc list-inside">
            <li>full-stack development (react, next.js, go, fastapi)</li>
            <li>ui/ux design (currently learning figma)</li>
            <li>devops (currently a working progress)</li>
            <li>low-level programming (kind of a noob rn honestly, but i'm learning arm assembly)</li>
            </ul>
            but also:
            <ul className="list-disc list-inside">
                <li>the marvel cinematic universe</li>
                <li>reading (from trash motivational books to sci-fi)</li>
                <li>learning new languages, whether spoken or programming</li>
                <li>procrastinating the meaning of life</li>
                <li>hard techno (shoutout holy priest, asbek and fantasm)</li>
                <li>ambient music</li>
            </ul>
            here's one of my fav songs:
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
                i'm not about to write my whole life story here, but thanks for sticking till the end!
                check out whatever blog posts are out. i'm planning on writing more in the future.
    </main>
  );
}