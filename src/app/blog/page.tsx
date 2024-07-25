import React from 'react';

import {Box, Button, Typography} from "@mui/material";
import {links} from "../links";
import {posts} from "../posts";
import Link from "next/link";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Blog | Motivation Advisor',
    description: 'View blog posts about challenges and motivation.'
};

// TODO Look into moving to app.css then use standard css classes.
// TODO Then add as string and render from server (SSR)
const BlogH3Header = (props: any) => {
    return <Typography variant={"h3"} {...props} sx={{
        fontSize: '2rem',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 1,
    }} >{props.children}</Typography>;
};

function getBaseImageURLKey() { // TODO
    return "/images";
}

const BlogH2Header = (props: any) => {
    return <Typography  variant={"h2"} {...props} sx={{
        fontSize: '2.5rem',
        paddingTop: 3,
        paddingBottom: 3,
    }}>{props.children}</Typography>;
};

const BlogParagraph = (props: any) => {
    return <Typography {...props} sx={{paddingBottom: 2}}>{props.children}</Typography>;
};

function postsByURL(url: string) {
    const allPosts = posts();
    return allPosts.find((post) => {
        return post.url === url;
    });
}

export function allPosts() {

    const posts = [ // TODO Create a few blog posts. Maybe 3-5?
        {
            image: {
                url: getBaseImageURLKey() + '/monday-motivational-quotes.png', // TODO create a picture of different famous quotes.
                alt: 'Book with text to not compare to others and other words of wisdom.'
            },
            url: 'monday-motivational-quotes',
            content: () => {
                return <>

                    <BlogParagraph>
                        Monday motivational quotes have flooded our social media feeds and work emails for years. The idea behind them is simple: to provide a burst of inspiration and positivity to help us tackle the dreaded Monday blues. While these quotes can indeed offer a momentary uplift, there&apos;s a growing argument that they often fall short of creating substantial, long-lasting motivation. In this blog post, we&apos;ll explore why Monday motivational quotes don&apos;t always help and offer alternative strategies for cultivating genuine motivation and productivity.
                    </BlogParagraph>
                    <BlogH2Header>
                    The Transient Nature of Motivational Quotes
                    </BlogH2Header>
                    <BlogH3Header>
                    Short-Lived Inspiration
                    </BlogH3Header>
                    <BlogParagraph>
                    Many Monday motivational quotes are designed to evoke immediate enthusiasm. However, this enthusiasm often fades quickly as the week progresses. The initial surge of motivation can diminish as daily responsibilities and challenges take center stage. Relying solely on these quotes can lead to a rollercoaster of emotions, with high motivation on Monday and a drop-off in the following days.
                    </BlogParagraph>
                    <BlogH3Header>
                    Lack of Personalization
                    </BlogH3Header>
                    <BlogParagraph>
                    Motivational quotes are one-size-fits-all solutions. They may resonate with some individuals, but not everyone. What inspires one person may not have the same effect on another. To truly motivate and drive productivity, it&apos;s essential to tailor inspiration to your unique goals, values, and challenges.
                    </BlogParagraph>
                    <BlogH3Header>
                    No Substantive Guidance
                    </BlogH3Header>
                    <BlogParagraph>
                    Most Monday motivational quotes are short and lack actionable advice. They may offer encouragement but often fall short in providing the necessary guidance and strategies to overcome real-life obstacles. Mere inspiration without a clear plan can leave you feeling directionless and frustrated.
                    </BlogParagraph>
                    <BlogH2Header>
                    The Role of Intrinsic Motivation
                    </BlogH2Header>
                    <BlogH3Header>
                    Sustainable Motivation
                    </BlogH3Header>
                    <BlogParagraph>
                Intrinsic motivation, which comes from within, tends to be more sustainable than external sources like quotes. When you are intrinsically motivated, you&apos;re driven by personal goals, values, and a sense of purpose. This inner drive can sustain your motivation throughout the week and beyond.
                    </BlogParagraph>
                    <BlogH3Header>
                    Personalization
                    </BlogH3Header>
                    <BlogParagraph>
                    Intrinsic motivation is highly personal. It&apos;s rooted in your own desires and aspirations. When you align your actions with what truly matters to you, you&apos;re more likely to stay motivated and focused, regardless of the day of the week.
                    </BlogParagraph>
                    <BlogH3Header>
                    Resilience in the Face of Challenges
                    </BlogH3Header>
                    <BlogParagraph>
                    Intrinsic motivation equips you with the resilience needed to face challenges head-on. When you&apos;re motivated by your own values and goals, setbacks become opportunities for growth rather than reasons to give up. Quotes may not provide this level of resilience.
                    </BlogParagraph>
                    <BlogH2Header>
                    Strategies for Cultivating Intrinsic Motivation
                    </BlogH2Header>
                    <BlogH3Header>
                    Set Clear Goals
                    </BlogH3Header>
                    <BlogParagraph>
                    Define specific, achievable goals that are meaningful to you. Having a clear sense of what you want to accomplish can fuel your motivation. Break these goals into smaller, manageable steps to maintain focus.
                    </BlogParagraph>
                    <BlogH3Header>
                    Find Your &quot;Why&quot;
                    </BlogH3Header>

                    <BlogParagraph>
                        Identify your intrinsic motivators—the deep reasons why you want to achieve your goals. Whether
                        it&apos;s personal growth, making a positive impact, or pursuing a passion, understanding your &quot;why&quot;
                        can be a powerful source of motivation.
                    </BlogParagraph>

                    <BlogH3Header>Create a Routine</BlogH3Header>

                    <BlogParagraph>
                        Establishing a consistent routine can help maintain motivation. Incorporating your goals into
                        your daily schedule makes them a natural part of your life. Over time, this consistency can lead
                        to sustained motivation.
                    </BlogParagraph>

                    <BlogH3Header>Track Progress</BlogH3Header>

                    <BlogParagraph>
                        Keep track of your achievements and milestones. Celebrating your progress, no matter how small,
                        can boost motivation and provide a sense of accomplishment. This is what we, at Motivation
                        Advisor use challenges for.
                    </BlogParagraph>

                    <BlogH3Header>Seek Support</BlogH3Header>

                    <BlogParagraph>
                        Share your goals with friends, family, or a mentor who can provide encouragement and
                        accountability. Having a support system can help you stay motivated, especially during
                        challenging times.
                    </BlogParagraph>

                    <BlogH3Header>Practice Self-Compassion</BlogH3Header>

                    <BlogParagraph>
                        Be kind to yourself and acknowledge that motivation can ebb and flow. Don&apos;t be too hard on
                        yourself when you face setbacks. Instead, use them as opportunities to learn and grow. Remember
                        it is not necessarily about achieving the goal or task 100 percent. For example, if you want to
                        learn a new language and your goal is to become fluent in it in a years time, but after a year
                        your able to carry a conversation (you didn&apos;t quite reach your goal) it is still a great
                        achievement.
                    </BlogParagraph>

                    <BlogParagraph>
                        While Monday motivational quotes can temporarily uplift, they often fail to cultivate
                        long-lasting motivation. Intrinsic motivation, driven by personal goals and values, offers a
                        more sustainable path to productivity and success. By setting clear goals, understanding your
                        &quot;why,&quot; and creating a routine, you can nurture your intrinsic motivation and remain resilient in
                        the face of challenges. Motivational quotes can complement this foundation when used
                        thoughtfully. Ultimately, motivation that stems from within is the key to achieving your
                        aspirations, not just on Mondays, but every day of the week.
                    </BlogParagraph>
                </>;
            }
        },
        {
            image: {
                url: getBaseImageURLKey() + '/home-challenge-walking.jpg', // TODO Not sure what to have a pic of.
                alt: 'A persons feet, walking into the distance.'
            },
            url: 'why-challenges-are-amazing',
            content: () => {
                return <>
                    <BlogParagraph>
                        Using challenges as a tool to help people can be a powerful approach to personal and
                        professional development. Challenges can be used to help people achieve their goals, develop new
                        skills, and improve their lives. They can also be used to help people overcome obstacles and
                        achieve their dreams.
                    </BlogParagraph>

                    <BlogH2Header>
                        Why use challenges?
                    </BlogH2Header>


                    <BlogH3Header>Competitive</BlogH3Header>
                    <BlogParagraph>
                        Have you ever felt a little competitive towards someone, no matter who it is? Maybe you want to
                        be better than them at something, or maybe you just want to prove that you can do something
                        better than them. Whatever the reason, challenges are a great way to motivate yourself and
                        others to do better.
                    </BlogParagraph>

                    <BlogH3Header>Sharing</BlogH3Header>
                    <BlogParagraph>
                        Another place where challenges can help is when you share what you are doing or wanting to
                        achieve with your friends, family and coworkers, that can be a driving force to complete the
                        task. You are significantly more likely to think about it, and do it, if you have told someone
                        you are going to do it.
                    </BlogParagraph>

                    <BlogH3Header>Social</BlogH3Header>
                    <BlogParagraph>
                        Trying to achieve anything alone is much more difficult, we are humans that need to be social
                        (usually). Trying to achieve things with others is a great way to build relationships. It can be
                        a great way to meet new people, and to get to know people better. It can also be a great way to
                        build trust and respect for others.
                    </BlogParagraph>

                    <BlogH2Header>
                        Types of challenges:
                    </BlogH2Header>

                    <BlogParagraph>
                        There are many different types of challenges, here is a list of some of the most common ones:
                    </BlogParagraph>

                    <BlogParagraph component={"div"}>
                        <ul>
                            {[
                                'Education and Learning Challenges',
                                'Professional Development Challenges',
                                'Personal Growth Challenges',
                                'Health and Wellness Challenges',
                                'Fitness Challenges',
                                'Weight Loss Challenges',
                                'Habit Change Challenges',
                                'Social Challenges',
                                'Community Challenges',
                                'Environmental Challenges',
                                'Financial Challenges',
                                'Career Challenges',
                                'Relationship Challenges',
                                'Family Challenges',
                                'Creative Challenges',
                                'Travel Challenges',
                                'Adventure Challenges'
                            ].map((challenge) => {
                                return <li key={challenge}>{challenge}</li>;
                            })}
                        </ul>
                    </BlogParagraph>
                </>;
            }
        },
        /*{
            image: {
                url: getBaseImageURLKey() + '/home-challenge-walking.jpg', // TODO Not sure what to have a pic of.
            },
            url: 'keeping-track-of-your-goals',
            title: 'Why would you want to keep track of your goals?',
            description: '', // TODO How data is important. It is hard to remember
            content: () => {
                return <>
                    <BlogParagraph>
                        Using challenges as a tool to help people can be a powerful approach to personal and professional development. Challenges can be used to help people achieve their goals, develop new skills, and improve their lives. They can also be used to help people overcome obstacles and achieve their dreams.
                    </BlogParagraph>

                    <BlogH2Header>
                        Why use challenges?
                    </BlogH2Header>


                    <BlogH3Header>Competitive</BlogH3Header>
                    <BlogParagraph>
                        Have you ever felt a little competitive towards someone, no matter who it is? Maybe you want to be better than them at something, or maybe you just want to prove that you can do something better than them. Whatever the reason, challenges are a great way to motivate yourself and others to do better.
                    </BlogParagraph>

                    <BlogH3Header>Sharing</BlogH3Header>
                    <BlogParagraph>
                        Another place where challenges can help is when you share what you are doing or wanting to achieve with your friends, family and coworkers, that can be a driving force to complete the task. You are significantly more likely to think about it, and do it, if you have told someone you are going to do it.
                    </BlogParagraph>

                    <BlogH3Header>Social</BlogH3Header>
                    <BlogParagraph>
                        Trying to achieve anything alone is much more difficult, we are humans that need to be social (usually). Trying to achieve things with others is a great way to build relationships. It can be a great way to meet new people, and to get to know people better. It can also be a great way to build trust and respect for others.
                    </BlogParagraph>

                    <BlogH2Header>
                        Types of challenges:
                    </BlogH2Header>

                    <BlogParagraph>
                        There are many different types of challenges, here is a list of some of the most common ones:
                    </BlogParagraph>

                    <BlogParagraph>
                        <ul>
                            {[
                                'Education and Learning Challenges',
                                'Professional Development Challenges',
                                'Personal Growth Challenges',
                                'Health and Wellness Challenges',
                                'Fitness Challenges',
                                'Weight Loss Challenges',
                                'Habit Change Challenges',
                                'Social Challenges',
                                'Community Challenges',
                                'Environmental Challenges',
                                'Financial Challenges',
                                'Career Challenges',
                                'Relationship Challenges',
                                'Family Challenges',
                                'Creative Challenges',
                                'Travel Challenges',
                                'Adventure Challenges'
                            ].map((challenge) => {
                                return <li>{challenge}</li>;
                            })}
                        </ul>
                    </BlogParagraph>
                </>;
            }
        },*/

    ];


    return posts.map((post) => {
        return {
            ...post,
            ... postsByURL(post.url)
        };
    });

}

export function PostCard(props: any) {
    return <Box sx={{
        width: '400px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
    }}>
        <Box sx={{
            width: '300px',
            height: '200px',
        }}>
            <img width={'100%'} src={props.image?.url} />
        </Box>
        <Box sx={{minHeight: '5rem', display: 'flex', alignItems: 'center', textAlign: 'center'}}>
            <Typography variant={"h5"}>{props.title}</Typography>
        </Box>
        <Box sx={{padding: 1}}>
            {props.description}
        </Box>
        <Button sx={{margin: 1}} variant={'contained'} LinkComponent={Link} href={links.blog + '/' + props.url}>Read more</Button>

    </Box>;
}




export default function Page () {

    return <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 2,
    }}>

        {allPosts().map((post) => {
            return <PostCard key={post.title} {...post} />;
        })}

    </Box>;
}
/*
export async function generateStaticParams() {
    return allPosts().map((post) => {
        return {
            id: post.url,
            post: post
        };
    });
};*/
