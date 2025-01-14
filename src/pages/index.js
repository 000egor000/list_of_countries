import Head from "next/head";
import styles from "@/styles/Home.module.css";
import mokeData from "../../ISO3166_RU.json";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageComponentfrom from "../components/ImageComponent";

export default function Home() {
  const [data, setData] = useState(mokeData);
  const handleRemove = (items) => () => {
    const filteredData = data.filter((el) => el.name_ru !== items);
    setData(filteredData);
  };

  return (
    <>
      <Head>
        <title>list</title>
        <meta name="description" content="list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul className={`${styles.main}`}>
        <AnimatePresence>
          {data.map((item) => (
            <motion.div
              className={`${styles.motion}`}
              key={item.name_ru}
              initial={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }} // Уезжает вправо при удалении
              transition={{ duration: 0.5 }} // Длительность анимации
            >
              <li className={`${styles.itemCard}`}>
                <span>
                  {item?.flag_url && (
                    <ImageComponentfrom
                      className={styles.logo}
                      src={"https:" + item.flag_url}
                      alt={item.name_ru}
                      width={22}
                      height={22}
                    />
                  )}
                  <p>{item.name_ru}</p>
                </span>

                <button onClick={handleRemove(item.name_ru)}>Удалить</button>
              </li>
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
}
