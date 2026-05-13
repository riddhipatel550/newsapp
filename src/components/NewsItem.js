import React  from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <div>
                    <span className="badge rounded-pill bg-danger" style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>{source} dd</span>
                </div>
                <img src={!imageUrl ? "https://www.sciencealert.com/images/2026/05/hexagonal-carbon-hydride-compound.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()} 3 mins ago</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem