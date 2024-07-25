
import React from "react";
import {Box, Button, Typography} from "@mui/material";
import {allPosts, PostCard} from "../page";
import {links} from "../../../../../motivated-ui-react/src/shared/links";
import Link from "next/link";

export default function FullPost({ params }: any) {

    console.log('params', params)

    const post = allPosts().find( (p) => p.url === params.id);

    if (post === null || typeof post === 'undefined') {
        return null;
    }

    return <Box sx={{
        margin: 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }}>
        <Box sx={{
            width: '90%',
            display: 'flex',
            //height: '300px',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{

                maxWidth: '800px'
            }}>
                <img width={'100%'} alt={post.image.alt} src={post.image?.url} />
            </Box>
        </Box>
        <Box sx={{
            width: '100%',
            textAlign: 'center',
        }}>
            <Typography sx={{padding: 2}} variant={"h2"}>{post.title}</Typography>
        </Box>
        <Box sx={{
            padding: 2,
            maxWidth: '1000px'
        }}>
            {post.content()}

            <Box sx={{
                width: '100%'
            }}>
                <Button LinkComponent={Link} href={links.blog}>Back to posts</Button>
            </Box>

            <Box sx={{
                width: '100%'
            }}>
                <Typography sx={{padding: 2}} variant={"h4"}>Other Posts</Typography>
            </Box>


            {allPosts().filter( p => post.url !== p.url).map((post) => {
                return <PostCard key={post.title} {...post} />;
            })}

        </Box>

    </Box>;
}

export async function generateStaticParams() {
    return allPosts().map((post) => {
        console.log()
        return {
            id: post.url,
            post: post
        };
    });
};

export async function generateMetadata({ params } : any) {
    const post = allPosts().find( (p) => p.url === params.id);
    return {
        title: post?.title,
    }
}
