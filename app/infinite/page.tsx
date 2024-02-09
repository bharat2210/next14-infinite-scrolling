"use client";
import React, { useEffect, useState } from "react";
import Card from "../ui/Infinite/Card";
import Loader from "../ui/Loader/loader";

const Infinite = () => {
  const [data, setData] = useState<any>([]);
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [count, setcount] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=8&_page=${limit}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const val = await response.json();
      setData((prev: any) => [...prev, ...val]);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  const handleInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLimit((prev) => prev + 1);
    }
  };

  type DebounceFunction<T extends (...args: any[]) => void> = (
    func: T,
    delay: number
  ) => T;

  const debounce: DebounceFunction<(this: any, ...args: any[]) => void> = (
    func,
    delay
  ) => {
    let timeoutId: NodeJS.Timeout;

    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    } as any;
  };

  const debouncedHandleScroll = debounce(handleInfiniteScroll, 200);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);
  // const handleClick = () => {
  //   // let num = count;
  //   setcount((prev)=>prev + 1);
  //   setcount((prev)=>prev + 1);
  //   setcount((prev)=>prev + 1);
  //   // setcount(++num);
  //   // setcount(++num);
  // };

  return (
    <>
      {/* <p className="text-center">{count}</p>
      <button onClick={handleClick}>Click</button> */}

      <h1 className="text-center mt-5">Infinite scrolling</h1>
      {loading && <Loader />}
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex flex-row flex-wrap gap-5 justify-center mt-5">
        <Card content={data} />
      </div>
    </>
  );
};

export default Infinite;
