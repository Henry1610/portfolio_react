import React from 'react';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Pro Store",
      subtitle: "An e-commerce platform ( MERN )",
      description: `An end-to-end e-commerce web application developed with the MERN stack (MongoDB, Express, React, Node.js). The platform enables users to browse products, manage their cart and wishlist, place orders, and complete secure payments via Stripe. Customers can maintain a shipping address book, view order history, submit reviews with images, and request cancellations or refunds. The admin dashboard provides full CRUD operations for products, categories, brands, discounts, and shipping zones, along with powerful order, user, payment, and review management tools. The system integrates JWT authentication for secure access, Cloudinary for media storage, Nodemailer for transactional emails, and Stripe for payment processing with webhook support. Fully responsive and performance-optimized, the application is designed for scalability and deployment readiness.`,
      image: "/images/Screenshot 2025-10-03 151900.png",
      visitLink: "https://proshop.io.vn/",
      githubLink: "https://github.com/Henry1610/Ecommerce_NodeJS_Project",
    },
    {
      id: 2,
      title: "Social App",
      subtitle: "Instagram clone ( PERN )",
      description: `A full-stack social media platform built with the PERN stack (PostgreSQL, Express.js, React, Node.js) and Prisma ORM. Features include post creation with media uploads, comments, reactions, reposts, follow system with private account support, real-time messaging (1-on-1 and group chats), comprehensive privacy controls, saved posts, user search, and notifications. The application integrates JWT authentication, OAuth (Facebook), OTP verification (email/SMS), Redis caching, Cloudinary media storage, Socket.io for real-time updates, RTK Query for data management, and Tailwind CSS for responsive design. Fully optimized for scalability and deployment readiness.`,
      image: "/images/Screenshot 2025-12-25 131518.png",
      visitLink: "https://insta.io.vn/",
      githubLink: [
        { label: "Frontend", url: "https://github.com/Henry1610/social-app-client" },
        { label: "Backend", url: "https://github.com/Henry1610/social-app-server" }
      ],
    },
    {
      id: 3,
      title: "Shopee Clone",
      subtitle: "Shopee clone UI ( React )",
      description: `A responsive Shopee-style e-commerce frontend built with React. The platform allows users to browse products, search with filters, view product details, and manage their cart. The system uses built-in hooks and reusable custom hooks to optimize logic. Integrated Firebase Authentication provides secure login, registration, and password management. The application features debounced search and route-based code splitting for scalability and high performance.`,
      image: "/images/Screenshot 2025-10-03 154736.png",
      visitLink: "https://shopee-react-front-end.vercel.app/",
      githubLink: "https://github.com/Henry1610/Shopee_React_FrontEnd",
    },
    {
      id: 4,
      title: "Henry Library",
      subtitle: "An Library platform ( PHP - MVC )",
      description: `The PHP (MVC) Library Management Application allows users to register/login, browse and view book details, add books to a borrowing cart, submit borrowing requests, and track borrowing–return history. It supports a wishlist, book reviews, email notifications, and VNPay payment for borrowing fees or fines. The admin area provides CRUD operations for books/categories/users, approves borrowing–return requests, and manages transactions and fines.`,
      image: "/images/Screenshot 2025-10-03 161409.png",
      visitLink: "https://library.lovestoblog.com/",
      githubLink: "https://github.com/Henry1610/Library_PHP",
    }
  ];

  return (
    <div className="text-dark min-vh-100 font-inter container py-3 py-md-4 px-2 px-md-3">
      <h1 className="display-6 display-md-5 fw-bold mb-1 text-center text-md-start">PROJECTS</h1>
      <p className="text-uppercase small text-secondary mb-3 mb-md-4 text-center text-md-start">
        A Collection Of My Recent Works
      </p>

      {projects.map((project) => (
        <main key={project.id} className="px-2 px-sm-3 px-md-5 py-3 py-md-4 shadow rounded mb-4 mb-md-5">
          <section className="row justify-content-center align-items-center">

            {/* Cột hình ảnh */}
            <div className="col-12 col-md-6 mb-3 mb-md-4 mb-lg-0">
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded border border-dark w-100"
              />
            </div>

            {/* Cột nội dung */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <h2 className="fw-semibold fs-5 fs-md-4 mb-2">{project.title}</h2>
              <p className="fst-italic text-secondary small mb-2 mb-md-3">
                {project.subtitle}
              </p>
              <p className="small text-secondary mb-3 mb-md-4" style={{ lineHeight: "1.7", fontSize: "0.9rem" }}>
                {project.description}
              </p>

              <div className="d-flex gap-1 gap-sm-2 justify-content-center justify-content-md-end flex-wrap">
                {Array.isArray(project.githubLink) ? (
                  project.githubLink.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      className="btn btn-outline-dark btn-sm d-flex align-items-center gap-1 gap-sm-2"
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.875rem", whiteSpace: "nowrap" }}
                    >
                      <FaGithub className="flex-shrink-0" /> 
                      <span className="d-none d-sm-inline">{link.label || "GitHub"}</span>
                      <span className="d-sm-none">GitHub</span>
                    </a>
                  ))
                ) : (
                  <a
                    href={project.githubLink}
                    className="btn btn-outline-dark btn-sm d-flex align-items-center gap-1 gap-sm-2"
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.875rem" }}
                  >
                    <FaGithub /> GitHub
                  </a>
                )}

                <a
                  href={project.visitLink}
                  className="btn btn-dark btn-sm d-flex align-items-center gap-1 gap-sm-2"
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.875rem", whiteSpace: "nowrap" }}
                >
                  <FaExternalLinkAlt className="flex-shrink-0" /> 
                  <span className="d-none d-sm-inline">Visit Page</span>
                  <span className="d-sm-none">Visit</span>
                </a>
              </div>
            </div>
          </section>
        </main>
      ))}
    </div>
  );
};

export default Projects;
