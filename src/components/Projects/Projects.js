import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import school from "../../Assets/Projects/school.png";
import watchEcommerce from "../../Assets/Projects/watch_ecommerce.png";
import gymManagement from "../../Assets/Projects/gym_management.png";
import gamingLanding from "../../Assets/Projects/gaming_landing.png";
import wecareInventory from "../../Assets/Projects/wecare_inventory.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecasting"
              description="A modern React weather application that lets users search cities and explore real-time forecasts, daily weather, and detailed conditions with a clean, responsive interface."
              ghLink="https://github.com/AYUSH12-byte/Weather-Forecasting"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="School Management System"
              description="A comprehensive school management web application built with Laravel and Blade templates, offering role-based portals for students, teachers, and administrators."
              ghLink="https://github.com/AYUSH12-byte/School-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watchEcommerce}
              isBlog={false}
              title="E-commerce Website"
              description="A modern, responsive e-commerce website for luxury watches built with HTML, CSS, and JavaScript. Features product catalog, team portfolios, blog content about watchmaking technology, and research."
              ghLink="https://github.com/AYUSH12-byte/E-commerce-Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gymManagement}
              isBlog={false}
              title="Gym Membership Management"
              description="A GUI-based database management system for gyms, designed using Java Swing to track membership subscriptions, client information, and attendance status."
              ghLink="https://github.com/AYUSH12-byte/GYM-Membership-Management-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gamingLanding}
              isBlog={false}
              title="Gaming Console Hub"
              description="Gaming Console Hub Landing Page showcasing the latest gaming consoles, providing users with information about various gaming options. Built using HTML, CSS, and JavaScript."
              ghLink="https://github.com/AYUSH12-byte/gaming-console-landing-page"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wecareInventory}
              isBlog={false}
              title="WeCare Inventory Management"
              description="An inventory management tool built using Python for tracking resources, managing item listings, and monitoring stock levels efficiently."
              ghLink="https://github.com/AYUSH12-byte/WeCare-Inventery-Management"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
