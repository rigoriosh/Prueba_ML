import React from 'react'

export const Breadcrumb = ({history, path, breadcrumb}) => {
    return (
        <p onClick={() => history.replace(path)} className="breadcrumb">
          {breadcrumb}
        </p>
    )
}
