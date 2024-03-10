import Link from "next/link"
import styles from "../../page.module.css";
import Home from "../../home/page"

export default function Blog({ params }: {
    params: { id: string }
}) {
    const blogs = [
        { id: 1, title: 'Blog 1' },
        { id: 2, title: 'Blog 2' },
        { id: 3, title: 'Blog 3' },
    ];
    return (
        <main className={styles.row}>
            <div>
                <Home/>
            </div>

            <div className={styles.padding}>
                <h2>
                    Welcome to blog {params.id}
                </h2>
                <p className={styles.padding}>
                    <Link legacyBehavior href={`${params.id}/image`}>
                        <a>Go to image {params.id}</a>
                    </Link>
                </p>
            </div>



        </main>

    )
}
