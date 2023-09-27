import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";

const Test: NextPage = () => {
  const router = useRouter();
  const { userId, step: step } = router.query;
  const handleClick = () => {
    const newQuery = {
      step: parseInt((step as string) || "0") + 1,
    };

    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        ...newQuery,
      },
    });
  };

  return (
    <div>
      <div>Test: {userId}</div>
      <button onClick={handleClick}>Action</button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userId } = context.query;

  return {
    props: {
      userId,
    },
  };
};

export default Test;
