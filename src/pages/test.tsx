export function getStaticProps({
  revalidateReason,
}: {
  revalidateReason: string;
}) {
  console.log(revalidateReason);
  return {
    props: {
      data: new Date().toISOString(),
      revalidateReason,
    },
    revalidate: 60,
  };
}

export default function Test({
  data,
  revalidateReason,
}: {
  data: string;
  revalidateReason: string;
}) {
  return (
    <div>
      {data} - {revalidateReason}
    </div>
  );
}
