import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationDot,faTwitter, faLink, faBuilding} from '@fortawesome/free-solid-svg-icons'

export default function Card({userData, hasError, hasLoading})  {

    const dateFormat = (str) => {
        const year = new Date(Date.parse(str)).getFullYear();
        const month = new Date(str).toLocaleString("ENG", { month: "short"});
        const day = new Date(Date.parse(str)).getDate();

        return `Joined ${day} ${month} ${year}`

    };

    let{
        login,
        name,
        avatar_url,
        bio,
        following,
        followers,
        public_repos,
        location,
        company,
        twitter_username,
        html_url,
        blog,
        created_at
    } = userData



  return (
    <div className='container'>
        <main>
            {userData ?
              <>
                <div className="desktop">
                        <section className="picture-profile">
                            <img src={avatar_url} alt="Profile picture" />
                        </section>
                
                        <div className="container-left">
                            <section className="info-user">
                                <div className="name-date">
                                    <h2 className='name'>{name}</h2>
                                    <span  className='date-joined'>{dateFormat(created_at)}</span>
                                </div>
                                <span className="username">
                                    <a href={html_url} target="_blank">{`@${login}`}</a>
                                </span>
                            </section>
                            <section className="bio">
                                <h3>
                                    {bio !== null ? bio : 'This mysterious individual has no bio yet'}
                                </h3>
                            </section>
                            <section className="details">
                                <div className="info-repos">
                                    <h4>Repos</h4>
                                    <p>{public_repos}</p>
                                </div>
                                <div className="info-followers">
                                    <h4>Followers</h4>
                                    <p>{followers}</p>
                                </div>
                                <div className="info-following">
                                    <h4>Following</h4>
                                    <p>{following}</p>
                                </div>
                            </section>
                            <section className="container-links">
                                <div className="links">
                                    <div className="link-country">
                                        <div className={location === null ? 'account not-available' : location}>
                                            <FontAwesomeIcon icon={faLocationDot}/>
                                            <a  href={`https://www.google.com/maps/place/${location}`} target="_blank">{
                                                location === null ? 'Not available' : location
                                            }</a>
                                        </div>
                                    </div>
                                    <div className="link-website">
                                        <div className={blog || 'account not-available'}>
                                        <FontAwesomeIcon icon={faLink}/>
                                            <a  href={blog} >
                                                {blog || 'Not available'}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="links">
                                    <div className="link twitter-account">
                                        <div className={twitter_username === null ? 'account not-available' : `@${twitter_username}`}>

                                            <svg className='twitter-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                            </svg>
                                            <a href={`"http://twitter.com/"${twitter_username}`} target="_blank">
                                                {twitter_username === null ? 'Not available' : `@${twitter_username}`}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="link-building">
                                        <div className={company === null ? 'account not-available' : company}>

                                            <FontAwesomeIcon icon={faBuilding}/>
                                            <a href={company} target="_blank">
                                                {company === null ? 'Not available' : company}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>    
                     </div>
                     <div className="tablet">
                        <div className="container-left">
                            <section className="info-user">
                                <section className="picture-profile">
                                    <img src={avatar_url} alt="Profile picture" />
                                </section>
                                <div className="name-date">
                                    <h2 className='name'>{name}</h2>
                                    <span className="username">
                                        <a href={html_url} target="_blank">{`@${login}`}</a>
                                    </span>
                                    <span  className='date-joined'>{dateFormat(created_at)}</span>
                                </div>
                            </section>
                            <section className="bio">
                                <h3>
                                    {bio !== null ? bio : 'This mysterious individual has no bio yet'}
                                </h3>
                            </section>
                            <section className="details">
                                <div className="info-repos">
                                    <h4>Repos</h4>
                                    <p>{public_repos}</p>
                                </div>
                                <div className="info-followers">
                                    <h4>Followers</h4>
                                    <p>{followers}</p>
                                </div>
                                <div className="info-following">
                                    <h4>Following</h4>
                                    <p>{following}</p>
                                </div>
                            </section>
                            <section className="container-links">
                                <div className="links">
                                    <div className="link-country">
                                        <div className={location === null ? 'account not-available' : location}>
                                            <FontAwesomeIcon icon={faLocationDot}/>
                                            <a href={`"https://www.google.com/maps/place/"`+location} target="_blank">{
                                                location === null ? 'Not available' : location
                                            }</a>
                                        </div>
                                    </div>
                                    <div className="link-website">
                                        <div className={blog || 'account not-available'}>
                                        <FontAwesomeIcon icon={faLink}/>
                                            <a  href={blog} >
                                                {blog || 'Not available'}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="links">
                                    <div className="link twitter-account">
                                        <div className={twitter_username === null ? 'account not-available' : `@${twitter_username}`}>

                                            <svg className='twitter-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                                            </svg>
                                            <a href={`"http://twitter.com/"${twitter_username}`} target="_blank">
                                                {twitter_username === null ? 'Not available' : `@${twitter_username}`}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="link-building">
                                        <div className={company === null ? 'account not-available' : company}>

                                            <FontAwesomeIcon icon={faBuilding}/>
                                            <a href={company} target="_blank">
                                                {company === null ? 'Not available' : company}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>    
                     </div>
                    </>
                    :
                    hasError
                    ?
                    <div className='loading container'>
                        <span>Oops!!</span>
                        <span>Sherlock Holmes couldn't find anything</span>
                            
                          
                        <iframe src="https://embed.lottiefiles.com/animation/96262" alt="An animation of a man with a magnifying glass looking for footprints"></iframe>

                    </div>
                    :
                     hasLoading
                        &&
                    <div className="loading container">
                        <p>Searching ...</p>
                        <iframe src="https://embed.lottiefiles.com/animation/96262" alt="An animation of a man with a magnifying glass looking for footprints"></iframe>
                    </div>
                 }     
        </main>
    </div>
  )
}

