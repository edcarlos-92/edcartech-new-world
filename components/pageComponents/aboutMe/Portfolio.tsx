import React, { useEffect, useState } from "react";
import { ChatBubbleLeftIcon as AnnotationIcon, GlobeAltIcon, BoltIcon, ScaleIcon, ArrowDownTrayIcon as DownloadIcon, AcademicCapIcon, BriefcaseIcon, CodeBracketIcon, StarIcon } from '@heroicons/react/24/outline'
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { themeConfig, cn } from "../../../lib/themeConfig";

export default function Portfolio() {
    const router = useRouter();
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const typingTexts = [
            "Full Stack Development",
            "Software Engineering",
            "React/Next.js Development",
            "Mobile App Development",
            "Enterprise Solutions Architecture",
            "Computer Science Graduate Student"
        ];

        const timeout = setTimeout(() => {
            const current = typingTexts[textIndex];

            if (!isDeleting) {
                if (currentText.length < current.length) {
                    setCurrentText(current.substring(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(current.substring(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % typingTexts.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex, mounted]);

    if (!mounted) {
        return (
            <div className={themeConfig.backgrounds.main}>
                <div className="flex items-center justify-center min-h-screen">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 dark:border-white"></div>
                </div>
            </div>
        );
    }

    return (
        <div className={themeConfig.backgrounds.main}>

            <div className="relative mt-20" style={{ marginBottom: '-150px' }}>
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block">CARLOS SEMEHO EDORH</span>
                </h1>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="mb-8">
                                {/* <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                                    CARLOS SEMEHO
                                    <span className={cn("block", themeConfig.gradients.text)}>
                                        EDORH
                                    </span>
                                </h1> */}
                                <div className="text-4xl mb-5">
                                    Passionate Software Engineer 😎
                                </div>
                                <div className="text-3xl text-blue-600 dark:text-blue-300 mb-8">
                                    Experienced In{" "}
                                    <span className={cn(themeConfig.text.accentPurple, "font-semibold")}>
                                        {currentText}
                                        <span className="animate-pulse text-purple-500 dark:text-purple-300">|</span>
                                    </span>
                                </div>
                            </div>

                            {/* Beautiful Gradient Border Buttons */}
                            <div className="flex flex-row gap-6 justify-center lg:justify-start">
                                <Button
                                    className="group relative px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    onClick={() => router.push('/projects')}
                                    style={{
                                        background: theme === 'dark'
                                            ? 'linear-gradient(#1f2937, #1f2937) padding-box, linear-gradient(135deg, #9333ea, #3b82f6) border-box'
                                            : 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #9333ea, #3b82f6) border-box',
                                        border: '2px solid transparent',
                                        borderRadius: '0.5rem',
                                        color: theme === 'dark' ? '#ffffff' : '#1f2937'
                                    }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <BriefcaseIcon className="w-5 h-5" />
                                        View Projects
                                    </span>
                                </Button>

                                <Button
                                    className="group relative px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                    onClick={() => window.open('/assets/images/aboutme/_resume.pdf', '_blank')}
                                    style={{
                                        background: theme === 'dark'
                                            ? 'linear-gradient(#1f2937, #1f2937) padding-box, linear-gradient(315deg, #3b82f6, #9333ea) border-box'
                                            : 'linear-gradient(white, white) padding-box, linear-gradient(315deg, #3b82f6, #9333ea) border-box',
                                        border: '2px solid transparent',
                                        borderRadius: '0.5rem',
                                        color: theme === 'dark' ? '#ffffff' : '#1f2937'
                                    }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <DownloadIcon className="w-5 h-5" />
                                        Get Resume
                                    </span>
                                </Button>
                            </div>
                        </div>

                        {/* Right Content - Profile Image */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                <div className={cn("w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 shadow-2xl", themeConfig.borders.muted)}>
                                    <Image
                                        src="/assets/images/aboutme/profilephoto.png"
                                        alt="Carlos Semeho Edorh"
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-800 to-red-800 rounded-full flex items-center justify-center">
                                    <CodeBracketIcon className="w-10 h-10 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className={themeConfig.backgrounds.section} style={{ marginTop: '-200px' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className={themeConfig.typography.h2}>About Me</h2>
                        <div className={themeConfig.dividers.primary}></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className={cn("text-2xl font-bold mb-6", themeConfig.text.accent)}>WHO IS CARLOS</h3>
                            <p className={cn(themeConfig.typography.body, "mb-6")}>
                                A passionate Full Stack Developer with over 7 years of experience building enterprise-level applications.
                                Currently pursuing my Master's in Computer Science at Northeastern University with a focus on
                                Intelligence and Modeling/Simulations.
                            </p>
                            <p className={cn(themeConfig.typography.body, "mb-6")}>
                                I specialize in JavaScript, React, Next.js, Node.js, and have extensive experience with
                                PHP, C#, and various databases. My passion lies in creating efficient, scalable solutions
                                that solve real-world problems.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className={cn("flex items-center gap-2", themeConfig.text.accent)}>
                                    <AcademicCapIcon className="w-5 h-5" />
                                    <span>M.S. Computer Science</span>
                                </div>
                                <div className={cn("flex items-center gap-2", themeConfig.text.accentPurple)}>
                                    <BriefcaseIcon className="w-5 h-5" />
                                    <span>7+ Years Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-14">
                            <div className={cn(themeConfig.backgrounds.card, "p-6 text-center")}>
                                <div className={cn(themeConfig.stats.blue, "mb-2")}>5+</div>
                                <div className={themeConfig.text.secondary}>Enterprise Systems</div>
                            </div>
                            <div className={cn(themeConfig.backgrounds.card, "p-6 text-center")}>
                                <div className={cn(themeConfig.stats.purple, "mb-2")}>200+</div>
                                <div className={themeConfig.text.secondary}>Employees Served</div>
                            </div>
                            <div className={cn(themeConfig.backgrounds.card, "p-6 text-center")}>
                                <div className={cn(themeConfig.stats.green, "mb-2")}>40%</div>
                                <div className={themeConfig.text.secondary}>Efficiency Improvement</div>
                            </div>
                            <div className={cn(themeConfig.backgrounds.card, "p-6 text-center")}>
                                <div className={cn(themeConfig.stats.yellow, "mb-2")}>500+</div>
                                <div className={themeConfig.text.secondary}>Students Trained</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Frontend Skills */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6">
                            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-300 mb-4 flex items-center gap-2">
                                <GlobeAltIcon className="w-6 h-6" />
                                Frontend Development
                            </h3>
                            <div className="space-y-3">
                                {['React.js', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS'].map((skill, index) => (
                                    <div key={skill} className="flex justify-between items-center">
                                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                                        <div className="w-24 bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-600 h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${70 - index * 5}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend Skills */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6">
                            <h3 className="text-xl font-bold text-purple-600 dark:text-purple-300 mb-4 flex items-center gap-2">
                                <BoltIcon className="w-6 h-6" />
                                Backend Development
                            </h3>
                            <div className="space-y-3">
                                {['PHP', 'Node.js ', 'Express.js', 'RESTful APIs', 'C#'].map((skill, index) => (
                                    <div key={skill} className="flex justify-between items-center">
                                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                                        <div className="w-24 bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-600 h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${80 - index * 8}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Database Skills */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6">
                            <h3 className="text-xl font-bold text-green-600 dark:text-green-300 mb-4 flex items-center gap-2">
                                <ScaleIcon className="w-6 h-6" />
                                Databases & Tools
                            </h3>
                            <div className="space-y-3">
                                {['MySQL', 'SQLite & MSSQL', 'MongoDB & Firebase', 'Git', 'Docker'].map((skill, index) => (
                                    <div key={skill} className="flex justify-between items-center">
                                        <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                                        <div className="w-24 bg-gray-300 dark:bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-400 dark:to-green-600 h-2 rounded-full transition-all duration-1000"
                                                style={{ width: `${80 - index * 6}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto"></div>
                    </div>

                    <div className="space-y-8">
                        {/* Current Role */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border-l-4 border-red-600 dark:border-red-400">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Software Developer</h3>
                                    <p className="text-blue-600 dark:text-blue-300 text-lg">AECI Explosives (formerly AEL Intelligent Blasting)</p>
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 mt-2 lg:mt-0">Sep 2017 – Aug 2024</div>
                            </div>
                            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                                <li>• Architected and delivered 5+ enterprise-level internal systems serving 200+ employees</li>
                                <li>• Designed high-performance PHP web applications with 40% efficiency improvement</li>
                                <li>• Reduced manual processes by 60% through automation</li>
                            </ul>
                        </div>

                        {/* Education */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border-l-4 border-yellow-600 dark:yellow-purple-400">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">M.S. Computer Science</h3>
                                    <p className="text-purple-600 dark:text-purple-300 text-lg">Northeastern University</p>
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 mt-2 lg:mt-0">Expected Dec 2025</div>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">Concentrations: Intelligence and Modeling/Simulations | GPA: ~3.80/4.00</p>
                        </div>

                        {/* Freelance */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-8 border-l-4 border-green-600 dark:border-green-400">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Freelance Software Developer</h3>
                                    <p className="text-green-600 dark:text-green-300 text-lg">Contract & Independent Projects</p>
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 mt-2 lg:mt-0">Aug 2015 – Aug 2024</div>
                            </div>
                            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                                <li>• Developed multiple client projects including E-Recruitment, School Management Systems</li>
                                <li>• Delivered IT training programs to 500+ Ghana Prison Service personnel</li>
                                <li>• Created e-commerce platforms and logistics solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* ShieldShare */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <BoltIcon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">ShieldShare</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">VPN-backed Android Hotspot with Traffic Accounting</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['Android', 'VpnService API', 'Proxy Server'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* TimeOasis */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <BriefcaseIcon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">TimeOasis</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">Leave Management SaaS Platform</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['React', 'Node.js', 'MySQL', 'Prisma'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-purple-500/20 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Local Buzz */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/70 dark:hover:bg-white/10 transition-all duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                    <GlobeAltIcon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Local Buzz</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">Hyperlocal Community App</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {['React Native', 'Firebase', 'Google AI'].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-green-500/20 text-green-600 dark:text-green-300 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Work Together</h3>
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-8">
                                I'm always interested in new opportunities and exciting projects.
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <AnnotationIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <span>semecaland1@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                        <BriefcaseIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <span>Richmond BC, Canada</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <Button
                                className="group relative px-12 py-6 text-xl font-semibold text-gray-900 dark:text-white bg-transparent border-2 border-blue-600 dark:border-blue-400 hover:border-blue-500 dark:hover:border-blue-300 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                onClick={() => router.push('/contact')}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <AnnotationIcon className="w-6 h-6" />
                                    Contact Me
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}