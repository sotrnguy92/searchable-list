import React from 'react';
import Typography from "@mui/material/Typography";
import './TagsComponent.css'
export const TagsComponent = ({tags, name}) => {

    return (
        <div className="tag-group" >
            {tags.map(tag => {
                    return(
                        <Typography key={name + '-' +tag} className={'tag'}  component="div">
                            {tag}
                        </Typography>
                    )}

                )}
        </div>
    )
}