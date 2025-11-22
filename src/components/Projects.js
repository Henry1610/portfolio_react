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
      visitLink: "https://prostoreecommerce.vercel.app/",
      githubLink: "https://github.com/Henry1610/Ecommerce_NodeJS_Project",
    },
    {
      id: 2,
      title: "Shopee Clone",
      subtitle: "Shopee clone UI ( React )",
      description: `A responsive Shopee-style e-commerce frontend built with React and Redux. The platform allows users to browse products, search with filters, view product details, and manage their cart . Integrated Firebase Authentication provides secure login, registration, and password management. Enhanced with reusable custom hooks, debounced search, and route-based code splitting for scalability and performance.`,
      image: "/images/Screenshot 2025-10-03 154736.png",
      visitLink: "https://shopee-react-front-end.vercel.app/",
      githubLink: "https://github.com/Henry1610/Shopee_React_FrontEnd",
    },
    {
      id: 3,
      title: "Henry Library",
      subtitle: "Build ( React )",
      description: `The PHP (MVC) Library Management Application allows users to register/login, browse and view book details, add books to a borrowing cart, submit borrowing requests, and track borrowing–return history. It supports a wishlist, book reviews, email notifications, and VNPay payment for borrowing fees or fines. The admin area provides CRUD operations for books/categories/users, approves borrowing–return requests, and manages transactions and fines.`,
      image: "/images/Screenshot 2025-10-03 161409.png",
      visitLink: "https://library.lovestoblog.com/",
      githubLink: "https://github.com/Henry1610/Library_PHP",
    }
  ];

  return (
    <div className="text-dark min-vh-100 font-inter container py-4">
      <h1 className="display-5 fw-bold mb-1 ">PROJECTS</h1>
      <p className="text-uppercase small text-secondary mb-4 ">
        A Collection Of My Recent Works
      </p>

      {projects.map((project) => (
        <main key={project.id} className="px-3 px-md-5 py-4 shadow rounded mb-5">
          <section className="row justify-content-center align-items-center">

            {/* Cột hình ảnh */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <img
                src={project.image}
                alt={project.title}
                className="img-fluid rounded border border-dark"
              />
            </div>

            {/* Cột nội dung */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <h2 className="fw-semibold fs-4 mb-2">{project.title}</h2>
              <p className="fst-italic text-secondary small mb-3">
                {project.subtitle}
              </p>
              <p className="small text-secondary mb-4" style={{ lineHeight: "1.6" }}>
                {project.description}
              </p>

              <div className="d-flex gap-2 justify-content-center justify-content-md-end">
                <a
                  href={project.githubLink}
                  className="btn btn-outline-dark btn-sm  d-flex align-items-center gap-2"
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  <FaGithub /> GitHub
                </a>

                <a
                  href={project.visitLink}
                  className="btn btn-dark btn-sm  d-flex align-items-center gap-2"
                  target="_blank" 
                  rel="noopener noreferrer" 
                >
                  <FaExternalLinkAlt /> Visit Page
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
