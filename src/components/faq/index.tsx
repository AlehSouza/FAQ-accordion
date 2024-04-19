import React, { useState } from "react"
import styles from "./styles.module.css"
import Image from "next/image"
import PlusImage from './../../../public/icon-plus.svg'
import MinusImage from './../../../public/icon-minus.svg'

type IProps = {
    title: string,
    text: string,
    index: number,
    size: number,
}

const Index = ({ title, text, index, size }: IProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <label htmlFor="">{title}</label>
                <button
                    className={styles.buttonToaggle}
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                >
                    {
                        isOpen
                            ? <Image
                                src={MinusImage}
                                width={30}
                                height={30}
                                alt="plus"
                            />
                            : <Image
                                src={PlusImage}
                                width={30}
                                height={30}
                                alt="plus"
                            />
                    }
                </button>
            </div>
            <div
                className={styles.text}
                style={{ display: isOpen ? 'flex' : 'none' }}
            >
                {text}
            </div>
            {
                index != size &&
                <div className={styles.breakLine} />
            }
        </div>
    )
}

export default Index