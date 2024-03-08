import { z, defineCollection } from 'astro:content';

const aboutCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        author: z.string(),
        experience: z.string(),
        picture: z.string(),
        refs: z.array(
            z.object({
                title: z.string(),
                href: z.string().url().optional(),
                content: z.string().optional(),
                icon: z.string().optional()
            })
        )
    })
})

const projectsCollection = defineCollection({
    type: "data",
    schema: z.array(
        z.object({
            title: z.string(),
            category: z.string(),
            img: z.string().url(),
            tools: z.array(z.string()),
            summary: z.string(),
        })
    )
})

const skillsCollection = defineCollection({
    type: "data",
    schema: z.array(
        z.object({
            title: z.string(),
            order: z.number(),
            content: z.array(
                z.object({
                    title: z.string(),
                    icon: z.string()
                })
            )
        })
    )
})

export const collections = {
    "about": aboutCollection,
    "projects": projectsCollection,
    "skills": skillsCollection
}