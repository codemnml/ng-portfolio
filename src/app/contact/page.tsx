"use client";

import { useState } from "react";

export default function ContactPage() {
    const [emailStatus, setEmailStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEmailStatus("submitting");

        try {
            const form = e.currentTarget;
            const response = await fetch("https://formspree.io/f/xaqdlzjb", {
                method: "POST",
                body: new FormData(form),
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setEmailStatus("success");
                form.reset();
                setTimeout(() => setEmailStatus("idle"), 4000);
            } else {
                setEmailStatus("error");
                setTimeout(() => setEmailStatus("idle"), 4000);
            }
        } catch (error) {
            setEmailStatus("error");
            setTimeout(() => setEmailStatus("idle"), 4000);
        }
    };

    return (
        <div className="flex-grow w-full bg-[#2c3e50] pt-20 md:pt-[7.2rem] pb-8 min-h-screen px-4 md:px-0">
            <div className="max-w-2xl mx-auto">
                <div className="flex flex-col">
                    {/* Social Links */}
                    <p
                        className="text-[1.2rem] tracking-[0.125rem] text-[#F4F4F4] mt-2 cursor-pointer hover:text-[#FFFFFF] group flex items-center gap-3 transition-colors"
                        onClick={() => window.open('https://github.com/micustudio', '_blank')}
                    >
                        <span>check out my work on github</span>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/images/github-icon.svg"
                            alt="GitHub"
                            className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-200"
                        />
                    </p>
                    <p
                        className="text-[1.2rem] tracking-[0.125rem] text-[#F4F4F4] mt-2 cursor-pointer hover:text-[#FFFFFF] group flex items-center gap-3 transition-colors"
                        onClick={() => window.open('https://drive.google.com/file/d/0B3l9y_jTYg_aaTZoX3JWcFNvTkU/view?usp=sharing', '_blank')}
                    >
                        <span>view my resume on drive</span>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/images/google-drive.svg"
                            alt="Google Drive"
                            className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-200"
                        />
                    </p>
                    <p
                        className="text-[1.2rem] tracking-[0.125rem] text-[#F4F4F4] mt-2 cursor-pointer hover:text-[#FFFFFF] group flex items-center gap-3 transition-colors"
                        onClick={() => window.open('https://www.linkedin.com/in/michael-reyes-comilang-a6b835118/', '_blank')}
                    >
                        <span>add me on linkedin</span>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/images/linkedin.svg"
                            alt="LinkedIn"
                            className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-200"
                        />
                    </p>

                    <h1 className="font-roboto text-[#FEFEFE] text-[2.5rem] tracking-[0.125rem] mt-8 mb-2">
                        or send me a message:
                    </h1>

                    {emailStatus === "success" && (
                        <div className="bg-[#2ecc71] text-[#F4F4F4] italic px-2 py-1 mb-2">
                            Thanks! I will check out your message.
                        </div>
                    )}

                    {emailStatus === "error" && (
                        <div className="bg-[#e74c3c] text-[#F4F4F4] italic px-2 py-1 mb-2">
                            Oops! There was a problem submitting your form.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="mb-6 mt-4 flex flex-col gap-4">
                        <div className="form-group">
                            <input
                                required
                                name="name"
                                placeholder="name"
                                type="text"
                                disabled={emailStatus === "submitting"}
                                className="w-full px-4 py-3 bg-white text-gray-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-[#0275d8] font-sans shadow-sm placeholder-gray-400 disabled:opacity-75"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                required
                                name="email"
                                placeholder="email"
                                type="email"
                                disabled={emailStatus === "submitting"}
                                className="w-full px-4 py-3 bg-white text-gray-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-[#0275d8] font-sans shadow-sm placeholder-gray-400 disabled:opacity-75"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                required
                                name="message"
                                cols={40}
                                rows={7}
                                placeholder="message"
                                disabled={emailStatus === "submitting"}
                                className="w-full px-4 py-3 bg-white text-gray-800 border-none rounded focus:outline-none focus:ring-2 focus:ring-[#0275d8] font-sans shadow-sm placeholder-gray-400 resize-y disabled:opacity-75"
                            ></textarea>
                        </div>
                        <button
                            className="bg-[#0275d8] hover:bg-[#025aa5] text-white py-2 px-6 rounded transition-colors self-start shadow-sm font-sans cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                            type="submit"
                            disabled={emailStatus === "submitting"}
                        >
                            {emailStatus === "submitting" ? "Sending..." : "Go"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
