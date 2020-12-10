import { Book } from './book'
import { Bookmark } from './bookmark'
import { Code } from './code'
import { Event } from './event'
import { Favorite } from './favorite'
import { Home } from './home'
import { Idea } from './idea'
import { Important } from './important'
import { Launch } from './launch'
import { Music } from './music'
import { Photo } from './photo'
import { Place } from './place'
import { Post } from './post'
import { School } from './school'
import { Work } from './work'

export type IconProps = {
    size: number
}

type Props = { type: PostType } & Partial<IconProps>

export const Icon: React.FC<Props> = ({ type, size = 14, ...restProps }) => {
    const iconProps = { size, ...restProps }
    switch (type) {
        case 'bookmark':
            return <Bookmark {...iconProps} />
        case 'book':
            return <Book {...iconProps} />
        case 'code':
            return <Code {...iconProps} />
        case 'event':
            return <Event {...iconProps} />
        case 'favorite':
            return <Favorite {...iconProps} />
        case 'home':
            return <Home {...iconProps} />
        case 'idea':
            return <Idea {...iconProps} />
        case 'important':
            return <Important {...iconProps} />
        case 'launch':
            return <Launch {...iconProps} />
        case 'music':
            return <Music {...iconProps} />
        case 'photo':
            return <Photo {...iconProps} />
        case 'place':
            return <Place {...iconProps} />
        case 'post':
            return <Post {...iconProps} />
        case 'school':
            return <School {...iconProps} />
        case 'work':
            return <Work {...iconProps} />
        default:
            return null
    }
}
