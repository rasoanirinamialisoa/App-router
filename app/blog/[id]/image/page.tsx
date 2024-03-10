import styles from "../../../page.module.css";

export default function BlogImage({params} : {params: {id:string}})
{
  const randomNumber = Math.floor(Math.random() * 1000);

    return (
      <div>
        <p className={styles.padding}> Image {params.id} </p>
        <img src={`https://picsum.photos/800/600?random=${randomNumber}`} alt={`Image for Blog`} />
      </div>
    );
  
}