import React from 'react'
import instagram from './icons/instagram.png'
import facebook from './icons/facebook.png'
import snapchat from './icons/snapchat.png'
import twitter from './icons/twitter.png'
import youtube from './icons/youtube.png'
import web from './icons/web.png'
import behance from './icons/behance.png'
import linkedin from './icons/linkedin.png'
import gmail from './icons/gmail.png'
import reddit from './icons/reddit.png'
import twitch from './icons/twitch.png'
import telegram from './icons/telegram.png'
import pinterest from './icons/pinterest.png'


const SocialIcon = ({icon,link}) => {
  const getIcon = (name) => {
    if(name==='instagram') return instagram;
    if(name==='facebook') return facebook;
    if(name==='youtube') return youtube;
    if(name==='snapchat') return snapchat;
    if(name==='twitter') return twitter;
    if(name==='web') return web;
    if(name==='behance') return behance;
    if(name==='linkedin') return linkedin;
    if(name==='gmail') return gmail;
    if(name==='reddit') return reddit;
    if(name==='twitch') return twitch;
    if(name==='telegram') return telegram;
    if(name==='pinterest') return pinterest;
    
    
  }
  return (


    <div className='ml-3 bg-gray-300 bg-opacity-80 shadow-3xl backdrop-blur-[10px] p-2 rounded-full flex-shrink-0'> 
            <a href={link} target='_blank'>
              <img src={getIcon(icon)} alt="" className='scale-110' />
            </a>
        </div>
  )
}

export default SocialIcon
