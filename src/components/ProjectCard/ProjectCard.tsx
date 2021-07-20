import React from 'react'

interface ProjectCardProps {
    image: string;
    title: string;
    paragraph: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, paragraph }) => {
    return <div className="component-projectcard">
        <div className="component-projectcard__left">
            <img src={image} alt="component-projectcard-img" width="100%" />
        </div>

        <div className="component-projectcard__space" />

        <div className="component-projectcard__right">
            <div className="component-projectcard__right-lineview">
                <div className="component-projectcard__right-lineview__circle"></div>
                <div className="component-projectcard__right-lineview__line"></div>
            </div>

            <div className="component-projectcard__right-textview">
                <div className="component-projectcard__right-textview__title text-white text-md text-right">{title}</div>
                <div className="component-projectcard__right-textview__paragraph text-white text-sm text-right">{paragraph}</div>
            </div>
        </div>
    </div>
}

export default ProjectCard;