import React from 'react';
import LinearProgress from '@mui/joy/LinearProgress';
import instagram from './icons/instagram.png';
import facebook from './icons/facebook.png';
import snapchat from './icons/snapchat.png';
import twitter from './icons/twitter.png';
import youtube from './icons/youtube.png';
import web from './icons/web.png';
import behance from './icons/behance.png';
import linkedin from './icons/linkedin.png';
import gmail from './icons/gmail.png';
import reddit from './icons/reddit.png';
import twitch from './icons/twitch.png';
import telegram from './icons/telegram.png';
import pinterest from './icons/pinterest.png';

const LinearBar = ({ clicks, title, type, maxClicks }) => {
  function capitalizeFLetter(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  // Calculate the maximum value for LinearProgress
  // const max = maxClicks * 1.5;
//   console.log(max);

  // Calculate the scaled value for LinearProgress (limited to 75% of max)

  const scaledValue =  maxClicks!==0 ? (clicks / maxClicks) * 75 : 0;

  const getScaledValue = (value) => {
    if (value === 0) return 0;
    return value;
  }

  const getIcon = (name) => {
    if (name === 'instagram') return instagram;
    if (name === 'facebook') return facebook;
    if (name === 'youtube') return youtube;
    if (name === 'snapchat') return snapchat;
    if (name === 'twitter') return twitter;
    if (name === 'web') return web;
    if (name === 'behance') return behance;
    if (name === 'linkedin') return linkedin;
    if (name === 'gmail') return gmail;
    if (name === 'reddit') return reddit;
    if (name === 'twitch') return twitch;
    if (name === 'telegram') return telegram;
    if (name === 'pinterest') return pinterest;
  };

  return (
    <div className='flex flex-col mt-1 py-1 gap-1 px-4 '>
      <div className='flex items-center justify-between '>
        <p className=' text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-blue-300'>
          {type === 'social' ? <img src={getIcon(title)} alt='' className='inline scale-75 mr-2' /> : null}
          {type === 'social' ? capitalizeFLetter(title) : title}
        </p>
        <p className='text-md font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-blue-300'>{clicks}</p>
      </div>
      <LinearProgress determinate value={getScaledValue(scaledValue)} thickness={10} sx={{ background: '#161C23' }} />
    </div>
  );
};

export default LinearBar;
