import React from 'react'
import { ArticleData, InstagramData, MattersData, TrendingData } from './Components/BlogData'
import CardAction from '../../Widgets/CardAction/CardAction'
import ads01 from '../../../assets/images/ads-01.png'

const Blog = () => {
  return (
        <div className="ps-2 pt-2 pb-1 page-body">  
            <div className="card bg-transparent border-0">
                <div className="card-header bg-card">
                    <h6 className="card-title mb-0">Trending on Bvite</h6>
                    <div className="dropdown card-action">
                    <CardAction/>
                    </div>
                    <ul className="row g-4 list-unstyled li_animate mt-4 w-100">
                        {TrendingData.map((data, index) => {
                        return(
                        <li key={index} className="col-lg-4 col-md-6 d-flex align-items-start">
                            <div className="fs-3 text-muted lh-sm"><span className="d-inline-flex" style={{minWidth: "2.5rem"}}>{data.no}</span></div>
                            <div className="text-truncate ms-2 ps-3 border-start dashed border-0">
                                <span className="d-flex align-items-center mb-3">
                                    <img className="avatar sm rounded-circle border border-3 me-2" src={data.image} alt="avatar" />
                                    {data.name}
                                </span>
                                <h6 className="text-truncate"><a href="/app/blog-detail" title="blog title" className="text-body">{data.title}</a></h6>
                                <div className="d-flex align-items-center text-muted small">
                                    <span className="pe-3">{data.date}</span>
                                    <span>{data.read_min}</span>
                                </div>
                            </div>
                        </li>
                        )})}
                    </ul>
                </div>
                <div className="card-body">
                    <ul className="row g-4 justify-content-between list-unstyled li_animate mb-0 mt-2">
                        <li className="col-lg-7 col-md-12">
                            {ArticleData.map((data, index) => {
                            return(
                            <article key={index} className="mb-4 pb-5 border-bottom">
                                <h5><a className={`title-font ${data.text_color}`} href="/app/blog-detail" title="blog title">{data.title}</a></h5>
                                <div className="d-flex align-items-center text-muted mb-3">
                                    <span className="pe-4">By <a href="#">Bvite</a></span>
                                    <span className="pe-4">{data.date}</span>
                                    <span className="pe-4">{data.comment}</span>
                                </div>
                                <p className="fw-light mb-4">{data.text}</p>
                                <a className="cta" href="#" title="Read more" style={{'--btn-hover': 'var(--bs-border-color)'}}>
                                    <span>Read more</span>
                                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </a>
                            </article>
                            )})}
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                  <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </li>
                        <li className="col-lg-4 col-md-12">
                            <div className="overflow-hidden mb-xl-5 mb-3">
                                  <img src={ads01} alt="" className="img-fluid border rounded-4"/>
                            </div>
                            <div className="text-uppercase mb-3 pb-2 border-bottom">Discover more of what matters to you</div>
                            <div className="card bg-transparent border-0 mb-xl-5 mb-3">
                                <div className="d-flex flex-wrap tag-group">
                                    {MattersData.map((data, index) => {
                                    return(
                                    <a key={index} className="btn btn-hover-fill m-1" style={{ '--hover-bg': data.theme_color }} href="#">{data.title}</a>
                                    )})}
                                </div>
                            </div>
                            <div className="text-uppercase mb-3 pb-2 border-bottom">Instagram</div>
                            <div className="card bg-transparent border-0">
                                <div className="row g-1">
                                    {InstagramData.map((data, index) => {
                                    return(
                                        <div key={index} className="col-4">
                                            <a className="rounded d-block" rel="ligthbox" href="#">
                                                <img className="img-fluid rounded" alt="Instagram post img" src={data.gallery}/>
                                            </a>
                                        </div>
                                    )})}
                                </div>
                            </div>
                        </li>
                    </ul> 
                    {/* <!--[ .row end ]--> */}
                </div>
            </div>
        </div>
    )
}

export default Blog