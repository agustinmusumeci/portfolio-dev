type skill = {
    title: string
    content: Array<skillcontent>
}

type skillcontent = {
    title: string
    icon: string
}

export type {skill, skillcontent}