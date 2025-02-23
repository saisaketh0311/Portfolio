import React, { useEffect } from 'react';
import './Music.css';

const favoriteAlbums = [
  { 
    title: "mgk", 
    imgSrc: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXc0YWQxeWR2ZDloenU0bDRvNHVsN2NuMTljeDZwa3k1MXBuM3FjbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MG1Ycz6IfnkJCCQkQK/giphy.gif",
    spotifyUrl: "https://open.spotify.com/artist/6TIYQ3jFPwQSRmorSezPxX" 
  },
  { 
    title: "Labrinth", 
    imgSrc: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWlucWh0N2tnNzk5bjVpd3AzZ3E1aXZmd2d5OHZ5MGlpa2M1cXIyYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/J5AkLVboGSH5SZc8Gh/giphy.gif",
    spotifyUrl: "https://open.spotify.com/artist/2feDdbD5araYcm6JhFHHw7" 
  },
  { 
    title: "Metro Boomin", 
    imgSrc: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjlqd203c2s5a2x1MHY4MWcwa3Y3c3huejR6d2pwYXJkMGU4ejR6cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/IQeFKHoQp2hiI5WVWl/giphy.gif",
    spotifyUrl: "https://open.spotify.com/artist/0iEtIxbK0KxaSlF7G42ZOp" 
  },
  { 
    title: "Charlie Puth", 
    imgSrc: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDVsMGRoM2pvbGVoMGZrNG15eXF1djFqcncwMm00bzVoMnVqM2FrNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0ErEZKfCvmZjppII/giphy.gif",
    spotifyUrl: "https://open.spotify.com/artist/6VuMaDnrHyPL1p4EHjYLi7" 
  },
  { 
    title: "Dua Lipa", 
    imgSrc: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGtteXdkZDdrZXd0ZGg2OTNiODU1b2FxZ3o0YWdlZ3B5bzV3a2J3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oFzmqoYxOtgybkrSM/giphy.gif",
    spotifyUrl: "https://open.spotify.com/artist/6M2wZ9GZgrQXHCFfjv46we" 
  },
  { 
    title: "Billie Eilish", 
    imgSrc: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc29laXg2eDZwdWowamRjM2RvMGZhZWRicG0xdHNsdG5mazhidmxhcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/j3UuCb2jLi3EErTKq8/giphy.gif",
    spotifyUrl: "https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH" 
  },
  { 
    title: "Jack Harlow", 
    imgSrc: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmVkcmdiNG9nenFqeTVubDExejhoY3pmMmRzdWJ5bXUyYWhibG85dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q1PDMXkiqzZ1BKPryW/giphy.gif",
    spotifyUrl: "https://open.spotify.com/artist/2LIk90788K0zvyj2JJVwkJ" 
  },
  { 
    title: "Ed Sheeran", 
    imgSrc: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjAyeXE5ZHphc2dzZXo0bzU2NWZpbzNsOTl4cmN4Nmp5Mm9mMTh5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HQoZmQVTfiDdNoCJc9/giphy.gif",
    spotifyUrl: "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V" 
  }
];

const Music: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="music-page">
      <div className="albums-section">
        <h2 className="section-heading">Binge-Worthy Artists</h2>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <a
              key={index}
              href={album.spotifyUrl}
              className="album-card"
              // Stagger entrance delay via inline CSS variable
              style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="album-image-container">
                <img 
                  src={album.imgSrc} 
                  alt={album.title} 
                  className="album-image"
                  loading="lazy"
                />
              </div>
              <div className="album-details">
                <h3>{album.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
