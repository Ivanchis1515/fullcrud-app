import React from 'react'

const TitleaBreadcumbs = ({ title, subtitle, breadcrums }) => {
    return (
        <>
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0"> { title } <small>{ subtitle }</small></h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                {
                                    breadcrums.map(element => {
                                        return(
                                            <>
                                                <li className="breadcrumb-item"><a href="#">{element}</a></li>
                                            </>
                                        )
                                    })
                                }
                            </ol>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
        </>
    )
}

export default TitleaBreadcumbs