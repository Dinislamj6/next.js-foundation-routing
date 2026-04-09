
    const blogs = [
        {
            id: 1,
            title: "Understanding Client-Side Rendering (CSR)",
            author: "John Doe",
            date: "2026-04-01",
            category: "Web Development",
            content: "Client-side rendering means the browser builds the UI using JavaScript after receiving a basic HTML file from the server."
        },
        {
            id: 2,
            title: "Server-Side Rendering (SSR) Explained",
            author: "Jane Smith",
            date: "2026-04-03",
            category: "Web Development",
            content: "Server-side rendering generates the full HTML on the server for each request, improving SEO and initial load performance."
        },
        {
            id: 3,
            title: "What is Static Site Generation (SSG)?",
            author: "Alex Johnson",
            date: "2026-04-05",
            category: "Web Development",
            content: "SSG generates static HTML pages at build time, making websites extremely fast and SEO-friendly."
        },
        {
            id: 4,
            title: "React vs Next.js: Which One to Choose?",
            author: "Emily Davis",
            date: "2026-04-07",
            category: "Frontend",
            content: "React is a library for building UI, while Next.js is a framework that adds features like SSR and SSG."
        }
    ];


const BlogDetailsPage = async ({params}) => {
    const {blogId} = await params;
    console.log("show me res", blogId);
    const blog = blogs.find(blog => blog.id === parseInt(blogId));
   
     
    return (
        <div className="text-center">
            <h2 className="text-3xl font-bold">Blog details Coming</h2>
            <p>{blog.content}</p>
           
        </div>
    );
};

export default BlogDetailsPage;