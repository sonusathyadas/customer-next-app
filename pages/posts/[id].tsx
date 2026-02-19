
export default function PostPage({ data }: { data: string }) {
    return (
        <div>
            <h1>{data}</h1>
            <p>This is the post page for {data}.</p>
        </div>
    );
}
 // /posts/1, /posts/2, /posts/3 etc. will be handled by this page
export async function getStaticPaths() {
    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
        { params: { id: '4' } },
        { params: { id: '5' } }
    ];
    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    };
}

export async function getStaticProps({params}:{params: {id: string}}) {
    const { id } = params;
    // load data from db using the id and send it as prop to the component
    return {
        props: {
            data: `Page ${id}`,
            revalidate: 60 // re-generate the page every 60 seconds if there is a request for it. This is called Incremental Static Regeneration (ISR)
        },
    };
}



// Static generation with dynamic paths
// export async function getServerSideProps(context: any) {
//     const { id } = context.params;
//     //load data using id and send to component as props
//     return {
//         props: {
//             id,
//         },
//     };
// }