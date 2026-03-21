//Client-Side:
"use client";
//Imports:
import { useState, useEffect } from "react";
import { QueryFn, QueryData } from "@/types";
import { toast } from "sonner";
//Function/Hook:
const useFetch = <T>(queryFn: QueryFn<T>) => {
  //States:
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  //Use-Effect
  useEffect(() => {
    let mounted = true;
    //Function to call the server-action
    const retrieveData = async () => {
      try {
        setLoading(true);
        const response: QueryData<T> = await queryFn();
        if (mounted && response.success && response.data !== null) {
          setData(response.data);
          toast.success(response.message);
        }
      } catch (err: unknown) {
        if (mounted) {
          const message =
            err instanceof Error ? err.message : "Something went wrong!";
          toast.error(message);
          setError(message);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };
    retrieveData();
    return () => {
      mounted = false;
    };
  }, [queryFn]);

  //Return Value:
  return { data, error, loading };
};
//Export:
export default useFetch;
