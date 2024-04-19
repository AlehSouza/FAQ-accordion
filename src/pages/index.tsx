import React from "react"
import styles from "./styles.module.css"
import StarImage from './../../public/icon-star.svg'
import Image from "next/image"
import Head from "next/head"
import { Faq } from "@/components"

const FAQs = [
    {
        title: "What is Frontend Mentor, and how will it help me?",
        text: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. Its suitable for all levels and ideal for portfolio building."
    },
    {
        title: "Is Frontend Mentor free?",
        text: "Yes, Frontend Mentor is completely free to use! You can access a wide range of design challenges, resources, and community support without any cost."
    },
    {
        title: "Can I use Frontend Mentor projects in my portfolio?",
        text: "Absolutely! You're encouraged to showcase the projects you've completed on Frontend Mentor in your portfolio. It's a great way to demonstrate your skills and the projects you've worked on."
    },
    {
        title: "How can I get help if I'm stuck on a challenge",
        text: "If you find yourself stuck on a challenge, there are several avenues for help available. You can explore the community forum where members often provide assistance and share insights. Additionally, you can reach out to the Frontend Mentor team directly for guidance and support."
    },
]

const Index = () => {

    const MyGithub = () => {
        return (
            <div className={styles.my_github}>
                <a href="https://github.com/AlehSouza" target="_blank">https://github.com/AlehSouza</a>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <MyGithub/>
            <Head>
                <title>
                    FAQ accordion
                </title>
            </Head>
            <div className={styles.card}>
                <div className={styles.head}>
                    <Image
                        src={StarImage}
                        width={40}
                        height={40}
                        alt="plus"
                    />
                    <h1>FAQs</h1>
                </div>
                <div className={styles.container_faqs}>
                    {
                        FAQs.map((faq, index) => {
                            return (
                                <Faq
                                    size={(FAQs.length - 1)}
                                    title={faq.title}
                                    text={faq.text}
                                    index={index}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Index