"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Portfolio = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [isScrolled, setIsScrolled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const cvShareLink = process.env.NEXT_PUBLIC_CV_DRIVE_LINK;

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const logos = [
		{
			name: "Next.js",
			icon: (
				<Image
					aria-hidden
					src="/svgs/nextjs.svg"
					alt="nextjs icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Angular",
			icon: (
				<Image
					aria-hidden
					src="/svgs/angular.svg"
					alt="angular icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Tailwind CSS",
			icon: (
				<Image
					aria-hidden
					src="/svgs/tailwindcss.svg"
					alt="tailwindcss icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Bootstrap",
			icon: (
				<Image
					aria-hidden
					src="/svgs/bootstrap.svg"
					alt="bootstrap icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Spring Boot",
			icon: (
				<Image
					aria-hidden
					src="/svgs/springboot.svg"
					alt="springboot icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Node.js",
			icon: (
				<Image
					aria-hidden
					src="/svgs/nodejs.svg"
					alt="nodejs icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "PostgreSQL",
			icon: (
				<Image
					aria-hidden
					src="/svgs/postgresql.svg"
					alt="postgresql icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "MariaDB",
			icon: (
				<Image
					aria-hidden
					src="/svgs/mariadb.svg"
					alt="mariadb icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "MongoDB",
			icon: (
				<Image
					aria-hidden
					src="/svgs/mongodb.svg"
					alt="mongodb icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Docker",
			icon: (
				<Image
					aria-hidden
					src="/svgs/docker.svg"
					alt="docker icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Kubernetes",
			icon: (
				<Image
					aria-hidden
					src="/svgs/kubernetes.svg"
					alt="kubernetes icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "MinIO",
			icon: (
				<svg
					role="img"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					width={64}
					height={64}
					className="fill-[#C72E49]"
				>
					<title>MinIO</title>
					<path d="M13.2072.006c-.6216-.0478-1.2.1943-1.6211.582a2.15 2.15 0 0 0-.0938 3.0352l3.4082 3.5507a3.042 3.042 0 0 1-.664 4.6875l-.463.2383V7.2853a15.4198 15.4198 0 0 0-8.0174 10.4862v.0176l6.5487-3.3281v7.621L13.7794 24V13.6817l.8965-.4629a4.4432 4.4432 0 0 0 1.2207-7.0292l-3.371-3.5254a.7489.7489 0 0 1 .037-1.0547.7522.7522 0 0 1 1.0567.0371l.4668.4863-.006.0059 4.0704 4.2441a.0566 .0566 0 0 0 .082 0 .06 .06 0 0 0 0-.0703l-3.1406-5.1425-.1484 .1425 .1484-.1445C14.4945 .3926 13.8287 .0538 13.2072 .006Zm-.9024 9.8652v2.9941l-4.1523 2.1484a13.9787 13.9787 0 0 1 2.7676-3.9277c .4645-.4645 .9648-.8643 .3847-1z" />
				</svg>
			),
		},
		{
			name: "OpenTelemetry",
			icon: (
				<Image
					aria-hidden
					src="/svgs/opentelemetry.svg"
					alt="opentelemetry icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Jaeger",
			icon: (
				<Image
					aria-hidden
					src="/svgs/jaegertracing.svg"
					alt="jaegertracing icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Jira",
			icon: (
				<Image
					aria-hidden
					src="/svgs/jira.svg"
					alt="jira icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Git",
			icon: (
				<Image
					aria-hidden
					src="/svgs/git.svg"
					alt="git icon"
					width={64}
					height={64}
				/>
			),
		},
		{
			name: "Bitbucket",
			icon: (
				<Image
					aria-hidden
					src="/svgs/bitbucket.svg"
					alt="bitbucket icon"
					width={64}
					height={64}
				/>
			),
		},
	];

	const projects = [
		{
			title: "E-commerce Platform",
			description:
				"Modern e-commerce solution built with Next.js 15, featuring advanced search, payment integration, and real-time inventory.",
			image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
			tech: ["Next.js 15", "TypeScript", "Stripe", "PostgreSQL"],
			github: "#",
			demo: "#",
		},
		{
			title: "AI Dashboard",
			description:
				"Analytics dashboard with AI-powered insights, real-time data visualization, and predictive analytics.",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
			tech: ["React", "D3.js", "Python", "TensorFlow"],
			github: "#",
			demo: "#",
		},
		{
			title: "Mobile Banking App",
			description:
				"Secure mobile banking application with biometric authentication and seamless UX design.",
			image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
			tech: ["React Native", "Node.js", "MongoDB", "Auth0"],
			github: "#",
			demo: "#",
		},
	];

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveSection(sectionId);
			setIsMenuOpen(false);
		}
	};

	const handleDownload = async () => {
		console.log("cvShareLink:", cvShareLink);

		if (!cvShareLink) {
			alert("CV link not configured");
			return;
		}

		setIsLoading(true);
		try {
			const directLink = convertToDirectDownloadLink(cvShareLink);

			if (!directLink) {
				throw new Error("Invalid Google Drive link");
			}

			// Create download link
			const link = document.createElement("a");
			link.href = directLink;
			link.download = "cv_athiwat.pdf";
			link.target = "_blank"; // Open in new tab for direct download
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		} catch (error) {
			console.error("Download failed:", error);
			alert("ไม่สามารถดาวน์โหลดได้ กรุณาลองใหม่อีกครั้ง");
		} finally {
			// setIsLoading(false);
			setTimeout(() => setIsLoading(false), 800);
		}
	};

	const convertToDirectDownloadLink = (shareLink: string) => {
		const fileId = shareLink.match(/\/d\/(.+?)\//)?.[1];
		if (!fileId) return null;

		// Convert to direct download link
		// return `https://drive.google.com/uc?export=download&id=${fileId}`;
		return `https://drive.google.com/file/d/${fileId}/view`;
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
			{/* Navigation */}
			<nav
				className={`fixed top-0 w-full z-50 transition-all duration-300 ${
					isScrolled
						? "bg-slate-900/95 backdrop-blur-md shadow-xl"
						: "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4">
						<div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text [-webkit-background-clip:text] text-transparent">
							It&apos;s Me
						</div>

						{/* Desktop Menu */}
						<div className="hidden md:flex space-x-8">
							{[
								"home",
								"about",
								"skills",
								"projects",
								"contact",
							].map((item) => (
								<button
									key={item}
									onClick={() => scrollToSection(item)}
									className={`capitalize text-sm font-medium transition-colors hover:text-cyan-400 ${
										activeSection === item
											? "text-cyan-400"
											: "text-white"
									}`}
								>
									{item}
								</button>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="md:hidden text-white hover:text-cyan-400 transition-colors"
						>
							{isMenuOpen ? (
								<i className="fa-solid fa-xmark text-2xl"></i>
							) : (
								<i className="fa-solid fa-bars text-2xl"></i>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden bg-slate-900/95 backdrop-blur-md">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{[
								"home",
								"about",
								"skills",
								"projects",
								"contact",
							].map((item) => (
								<button
									key={item}
									onClick={() => scrollToSection(item)}
									className="block px-3 py-2 capitalize text-white hover:text-cyan-400 transition-colors"
								>
									{item}
								</button>
							))}
						</div>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section
				id="home"
				className="min-h-screen flex items-center justify-center px-4"
			>
				<div className="text-center max-w-4xl mx-auto">
					<div className="mb-8 relative mt-20">
						<div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
							<div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
								<Image
									src="/images/img_profile.jpg"
									alt="Profile"
									width={150}
									height={150}
									className="w-36 h-36 rounded-full object-cover"
								/>
							</div>
						</div>
						<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
					</div>

					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text [-webkit-background-clip:text] text-transparent">
							Athiwat Sitthinanwatthana
						</span>
					</h1>

					<p className="text-xl md:text-xl text-blue-200 mb-8 font-light">
						Software Developer & Full Stack Developer
					</p>

					<p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
						I&apos;m just a programmer with a passion for coding and
						having fun while doing it. Solving complex problems and
						turning them into simple, practical solutions is what I
						find truly challenging
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<button
							onClick={() => scrollToSection("projects")}
							className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
						>
							View My Work
						</button>
						<button
							onClick={handleDownload}
							disabled={isLoading}
							className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-2 justify-center"
						>
							{isLoading ? (
								<>
									<svg
										className="animate-spin -ml-1 mr-3 h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
									Loading...
								</>
							) : (
								<>
									<i className="fa-solid fa-download text-xl"></i>
									Download CV
								</>
							)}
						</button>
					</div>

					<div className="animate-bounce">
						<i className="fa-solid fa-chevron-down text-xl"></i>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text [-webkit-background-clip:text] text-transparent">
						About Me
					</h2>

					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div className="space-y-6 text-center">
							<p className="text-gray-300 text-lg leading-relaxed">
								Software developer with experience in website
								and API development. I am currently one of the
								developers for RESTful API. I also worked as a
								full stack developer, focusing on both frontend
								and backend tasks. My experience of around 3
								years in software development makes me familiar
								with many tools and frameworks, and I have an
								understanding of basic security.
							</p>

							<p className="text-gray-300 text-lg leading-relaxed">
								Of course, I do not have a degree in computer
								science or IT, but it does not stop me from
								doing my job well.
							</p>

							{/* <div className="grid grid-cols-2 gap-6 pt-6"> */}
							<div className="flex gap-6 pt-6">
								<div className="text-center p-6 bg-slate-800/50 rounded-xl border border-cyan-500/20 grow">
									<div className="text-3xl font-bold text-blue-400 mb-2">
										3
									</div>
									<div className="text-gray-300">
										Years Experience
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-cyan-500/20">
								<Image
									src="/images/img_about_me.jpg"
									alt="Workspace"
									width={200}
									height={300}
									className="w-full h-50 md:h-100 object-cover rounded-xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-20 px-4 bg-slate-800/30">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text [-webkit-background-clip:text] text-transparent">
						Skills & Expertise
					</h2>

					<div className="relative h-30 overflow-hidden rounded-lg">
						<div className="absolute top-1/2 transform -translate-y-1/2 animate-seamless-scroll">
							<div className="flex items-center space-x-8">
								{logos.concat(logos).map((logo, index) => (
									<div
										key={index}
										className="px-6 flex flex-col items-center justify-center"
									>
										<div className="mb-4 w-16 h-16">
											{logo.icon}
										</div>
										<p className="text-center text-nowrap">
											{logo.name}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text [-webkit-background-clip:text] text-transparent">
						My Projects
					</h2>

					<div className="grid lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<div
								key={index}
								className="bg-slate-800/50 rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group hover:transform hover:scale-105"
							>
								<div className="relative overflow-hidden">
									<Image
										src={project.image}
										alt={project.title}
										width={500}
										height={300}
										className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
										{project.title}
									</h3>
									<p className="text-gray-300 mb-4 leading-relaxed">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mb-4">
										{project.tech.map((tech, techIndex) => (
											<span
												key={techIndex}
												className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30"
											>
												{tech}
											</span>
										))}
									</div>

									<div className="flex gap-4">
										<a
											href={project.github}
											className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
										>
											{/* <Github className="w-5 h-5" /> */}
											<i className="fa-brands fa-github text-xl"></i>
											<span>Code</span>
										</a>
										<a
											href={project.demo}
											className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
										>
											{/* <ExternalLink className="w-5 h-5" /> */}
											<i className="fa-solid fa-arrow-up-right-from-square text-xl"></i>
											<span>Demo</span>
										</a>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 px-4 bg-slate-800/30">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-2xl md:text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text [-webkit-background-clip:text] text-transparent">
						Contact Me
					</h2>
					<p className="text-center">
						Please see in my CV for contact information.
					</p>
				</div>
			</section>

			{/* Footer */}
			<footer className="py-12 border-t border-slate-700">
				<div className="max-w-6xl mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between items-center text-sm">
						<div className="text-gray-400 mb-4 md:mb-0">
							© 2025 Athiwat Sitthinanwatthana. All rights
							reserved.
						</div>

						<div className="flex items-center gap-6">
							<span className="text-gray-400">
								อธิวัฒน์ สิทธินันท์วัฒนา
							</span>
							<a
								href="#"
								className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
							>
								<i className="fa-brands fa-github text-2xl"></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Portfolio;
