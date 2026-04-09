import Link from "next/link";

const BlogsPage = () => {
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

    return (
        <div>
            <h2 className="text-3xl font-bold mb-4">Blogs</h2>
            {
                blogs.map(blog => (
                    <div key={blog.id} className="card bg-base-100 card-sm shadow-sm grid grid-cols-2 mb-4">
                        <div className="card-body">
                            <h2 className="card-title text-center">{blog.title}</h2>
                        
                            <div className="justify-end card-actions">
                               <Link href={`/blogs/${blog.id}`}> <button className="btn btn-primary">Show details</button></Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default BlogsPage;