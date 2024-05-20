import React from 'react'
import '../css/blog.css'
import { Link } from 'react-router-dom'

const Blog = () => {

    let card = [
        {
            image: 'https://s3-alpha-sig.figma.com/img/3163/33c2/82340927a465f373a618fcdf0b54b1cb?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z7FlFRwZamYd7USpMdtMDjImtCYSb1GITnCHYIEt3E51SqizQ9-Wiv74aVpzOmx832OsnFs5mKCVLawi9~FoEtpbuwTXZ4SsFuZ6GuqQyrn-kQYI9lBIl1LkN4y983x-9kPwWhr8Um08uQbvgFIWw2Eb0j2hpJvO6Lv-CEFBhJOgdlI~b5blnrmgt9PTp0Bdfk8T31lOZB8GCRDecw-uGz6nu1p-jK57YED8X0Da0jfjpqZXukudG986KuVHtVGwIoymkuemq0R~I8iyUIvy6~mwUKarH7SgFogM-2yRuVfm5JW2WMY-vsHxPb3CASiSxCOY~Mmija4573oOv2HHAQ__',
            date: '27 Jan 2021',
            salary: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            info: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
        },
        {
            image:'https://s3-alpha-sig.figma.com/img/0e9b/5d9f/fbfdf4523e94516dae706fe112a05249?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KD2wYCIPTWdCNnj1LI~UVMFixTWkf9GfzG7vfyAwRPEbV-qA~dmK63mTTtYioESd5HSbViVj6QfWryPnZ502h4AhvMmTtNaNbK~6Qz9D42tDcaoA7HNP4GKxs6jb~NzQB3aZZJJ1Tl33H9PA6oibUJTNQt~sdC0kPXpc1VP4mE6PUMF8HEI9kPA1Kp1gJOQk4Sb110LjY51Y1BUnnwKwfgHqZwIkS9gvHnzlJiufXzCuxslywBnizCSQkUR7BYEGCzc0pyGUnW7Lsm3nU-OsmdaTmf7FnvNCWrPfDCQXCYFposFQ3nLyYGso9AkuBCnPtlivL-2fyM37SsPbX4nasA__',
            date: '27 Jan 2021',
            salary: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            info: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
        },
        {
            image:'https://s3-alpha-sig.figma.com/img/c730/60c4/5da527a5d42bc019fa2ceb73afbb917b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LYlSOGXIpYdUtTl6oaL-O75cIEqif7YvijZE2Hrrw8SjbW2CKYj9HMg35lfq4P~FMQ05oubu-pZFN0ZGlcghokN-SUUNPUR3gEPNxqNY6aGAHQhLP0ogkuz6XcDTCasV2nM2zo7JEG6ATi5jeLgMa66Mi~zznNb2JLYnydjiIF3yLyezw5zFv6SZe1IZkVmYs-rwsgiQZ69MwimzM5FLwZFbkaufBPoo5VdFEEBlb0lEvPsOY6bG-uXE9xcVwFJtHzy8Ro8xIH6CkXm~gAokJmcj303rEoh0b0pEZwV9KM2iTBZCF1JyTKztrVFB-83CpNJ3AOnk6kWiMQyr4oQVCw__',
            date: '27 Jan 2021',
            salary: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            info: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
        },
        {
            image:'https://s3-alpha-sig.figma.com/img/5b6e/5c78/dc0445328c96f689843aaf47965537a7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UpbucbbZH6kxSnp1zyRkv2Is0udFW4h~-Kz2Rw66UH1etksd6UHckmr-wr-yQJX96coXAklJSXn0XdO95DrMiOCtzt1ULSznWUjMLqxx1xTDUG0jI8xt1fJ4atYfM5UiLHmbny7jL26GM7nt7slIfLWcSqPfLQSeTHuIYQD2jz4lHlPdOU9fDTZLp8oN7eosUS6ZGxEJgp4WX8CykagNPPmcWP8SwjUc0fUoQ9qPQRWyDa2WYNyMgvjFj7MK0P4jeXlsuk1j-3HtIGbDOQFiBxdYrGK3IZ0QQ1iWpaS~jWbTkJdzn5Ti7pZvTnIQ-74SMU4dzyhFnn43sD~kBBBL7g__',
            date: '27 Jan 2021',
            salary: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            info: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
        },
        {
            image:'https://s3-alpha-sig.figma.com/img/581f/7185/072ad27ab9ef6c186c417bafe4071f72?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QpuAdogx5wvJIGlTzNiZP5OuXXyGq43HYVt1Wf6iizHMfjPKzpae-sYXz~1QGEPfUL6~qq89~oKkfpHvF6lQRXZbmtl2wIxfxpgZlqKaraznlQg2PwOujApIIy6pGWx20F1fC~X6bpkqMZUWq3t4H1-kIr1SNh58u7RzoxaEGv1TQt2MIKERhR3VjUP1nrR0wlIyyoYQonN0H3ZuhXVrVnScOwPDTbCemt4JXTktKKs~106qApfD~Nddd5ihtHQXHiOd-DnCQ121fSSaarbEmfxfUd1PRVWH2yVTEA3ifn4chictXP8gg~3vzGogh9aYmKOkzqzIhGvcaI7omX9FaQ__',
            date: '27 Jan 2021',
            salary: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            info: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
        },
        {
            image:'https://s3-alpha-sig.figma.com/img/50b2/3415/9047759308cbf957f6a5497eaa3d2392?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pTDdxlx2qozFXpfnZkuDXWDOWLAR40E9s3To5p3D1XU8yaz3sVKOzYBHf7XiLNuHNrrFPnhE8LxKT6Eo1c3eqL7s-D2HomXkSVydq6YaLObwAU2z1RE8Y2Bzxr~3fxvsWFwcjG4mAPJ4Ugk8iGzjT30L86-o72q~I8nA9NFBI8N3iJC-iRqpbYe0rSof4BWiuyq~2riXpUS9yBbcX0BfRUKQhcbKt0~nHHxtgT-sjaCrj0dWrNsHUie1BcoVUWQcp0xM7T24AAG-6Dre552JKe-0Z4JTetA5er~hEogL59OmmxaRbzQBMAWLTO5iPHK7xcUzYTc0q9LGJIsg~w0Tyw__',
            date: '27 Jan 2021',
            salary: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
            info: 'See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract'
        },
    ]

    return (
        <div>
            <div className="container">
                <h2 className='text-center blogTitle'>A UX Case Study on Creating a<br /> Studious Environment for Students</h2>
                <p className='text-center blogInfo'>Andrew Jonson Posted on 27th January 2021</p>
                <div className="img"></div>
                <p className='text-center imgInfo'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the <br />stars had ceased to twinkle. By the same illusion which lifts the horizon of the<br /> sea to the level of the spectator on a hillside.</p>

                <h2 className='text-center cardsTitle'>Our Blog</h2>

                <div className="cards">{
                    card.map((e, i) => {
                        return <div className='card' key={i}>
                            <img className='cardImg' src={e.image} alt="" />
                            <p className='cardDate'>{e.date}</p>
                            <h3 className='cardSalary'>{e.salary}</h3>
                            <p className='cardInfo'>{e.info}</p>
                            <Link className='cardLink' to='/blogRead'>Read More →</Link>
                        </div>
                    })
                }</div>

            </div>
        </div>
    )
}

export default Blog