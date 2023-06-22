const User = require("../model/authmodel");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,
        {expiresIn:3*24*60*60})
}


module.exports.register = async (req, res) => {
    try{
        const {email,password}  = req.body;
        const user = await User.create({email,password});
        const token = createToken(user._id);
        // console.log(token);
        res.status(201).json({user,token});
      }
    catch(err){
      // console.log(err);
      res.status(400).json({err});
    }
  }

module.exports.login = async (req, res) => {
  try{
        const {email,password}  = req.body;
        const user = await User.login(email,password);
        const token = createToken(user._id);
        // console.log(token);
        res.status(200).json({user,token});
    }
    catch(err){
      // console.log(err);
        res.status(400).json({err});
      }
}

module.exports.addUsername = async (req, res) => {
    
  try {
    const { email, username_from_body } = req.body;
    const user = await User.findOne({ email });

    // console.log(user);
    if (user) {
      const { username } = user;
      const usernamePresent = username!=="";
      
            if (!usernamePresent) {

        await User.findByIdAndUpdate(
          
          user._id,
          {
            username:  username_from_body,
          },
          { new: true }
        );
      } else return res.json({ msg: "username already present",status:400  }) ;
    } else await User.create({ email, username: username_from_body });
    return res.json({ msg: "username claimed successfully",status:200 });
  } catch (error) {
    return res.json({ msg: "Error claiming username",status:401  });
  }
    
}

module.exports.addUsername = async (req, res) => {
  try {
    const { email, username_from_body } = req.body;
    const user = await User.findOne({ email });
    // console.log(user)
    const existingUsername = await User.findOne({ username:username_from_body });
    // console.log(existingUsername)

    if (user) {
      // User found, update the existing bg
      if(existingUsername){
        return res.json({ msg: "Username Already Claimed",status:401 });
      }else{
      user.username = username_from_body;
      await user.save();
      return res.json({ msg: "Successfully Updated",status:200 });
      }
    } else {
      // User not found, create a new user with the provided email and bg
      await User.create({ email, username_from_body });
      return res.json({ msg: "Successfully Added",status:200 });
    }
  } catch (error) {
    return res.json({ msg: "Error adding/updating background",status:400 });
  }
};

module.exports.addName = async (req, res) => {
  try {
    const { email, name_from_body } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      // User found, update the existing bg
      user.name = name_from_body;
      await user.save();
      return res.json({ msg: "Successfully Updated" });
    } else {
      // User not found, create a new user with the provided email and bg
      await User.create({ email, name_from_body });
      return res.json({ msg: "Successfully Added" });
    }
  } catch (error) {
    return res.json({ msg: "Error adding/updating background" });
  }
};

module.exports.addBio = async (req, res) => {
  try {
    const { email, bio_from_body } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      // User found, update the existing bg
      user.bio = bio_from_body;
      await user.save();
      return res.json({ msg: "Successfully Updated" });
    } else {
      // User not found, create a new user with the provided email and bg
      await User.create({ email, name_from_body });
      return res.json({ msg: "Successfully Added" });
    }
  } catch (error) {
    return res.json({ msg: "Error adding/updating background" });
  }
};

module.exports.addProfilePic = async (req, res) => {
  try {
    const { email, profile_pic_from_body } = req.body;
    const user = await User.findOne({ email });

    if (user) { 
      // User found, update the existing bg
      user.profilePic = profile_pic_from_body;
      await user.save();
      return res.json({ msg: "Successfully Updated" });
    } else {
      // User not found, create a new user with the provided email and bg
      await User.create({ email, profile_pic_from_body });
      return res.json({ msg: "Successfully Added" });
    }
  } catch (error) {
    return res.json({ msg: "Error adding/updating background" });
  }
};


module.exports.addBg = async (req, res) => {
  try {
    const { email, bg } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      // User found, update the existing bg
      user.bg = bg;
      await user.save();
      return res.json({ msg: "Successfully Updated" });
    } else {
      // User not found, create a new user with the provided email and bg
      await User.create({ email, bg });
      return res.json({ msg: "Successfully Added" });
    }
  } catch (error) {
    return res.json({ msg: "Error adding/updating background" });
  }
};


// module.exports.addLink = async (req, res) => {
//   try {
//     const { email, link, title,linkImage } = req.body;
//     const user = await User.findOne({ email });

//     if (user) {
//       const { links } = user;
//       const linkIndex = links.findIndex(({ link: existingLink }) => existingLink === link);

//       if (linkIndex !== -1) {
//         // link found, update the existing link
//         await User.findOneAndUpdate(
//           { _id: user._id},  
//           { $set: { "links.$.title": title,"links.$.link": link,"links.$.linkImage": linkImage } },
         

//         );
//         return res.json({ msg: "Successfully Updated" });
//       } else {
//         // link not found, add new link
//         user.links.push({ link, title,linkImage });
//         await user.save();
//         return res.json({ msg: "Successfully Added" });
//       }
//     } else {
//       // User not found, create a new user with the provided email and social link
//       await User.create({ email, links: [{ link, title,linkImage }] });
//       return res.json({ msg: "Successfully Added" });
//     }
//   } catch (error) {
//     return res.json({ msg: "Error adding/updating social link" });
//   }
// };

module.exports.addLink = async (req, res) => {
  try {
    const { email, link, title, linkImage } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const { links } = user;
      const linkIndex = links.findIndex(({ title: existingTitle }) => existingTitle === title);

      if (linkIndex !== -1) {
        // Link found, update the existing link
        await User.findOneAndUpdate(
          { _id: user._id, "links.title": title },
          { $set: { "links.$.title": title, "links.$.link": link, "links.$.linkImage": linkImage } }
        );
        return res.json({ msg: "Successfully Updated" });
      } else {
        // Link not found, add new link
        user.links.push({ link, title, linkImage });
        await user.save();
        return res.json({ msg: "Successfully Added" });
      }
    } else {
      // User not found, create a new user with the provided email and social link
      await User.create({ email, links: [{ link, title, linkImage }] });
      return res.json({ msg: "Successfully Added" });
    }
  } catch (error) {
    return res.json({ msg: "Error adding/updating social link" });
  }
};




module.exports.addSocial = async (req, res) => {
  try {
    const { email, link, type } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const { socials } = user;
      const socialIndex = socials.findIndex(({ type: existingType }) => existingType === type);

      if (socialIndex !== -1) {
        // Social link found, update the existing social link
        await User.findOneAndUpdate(
          { _id: user._id, "socials.type": type },
          { $set: { "socials.$.link": link } }
        );
        return res.json({ msg: "Successfully Updated" });
      } else {
        // Social link not found, add new social link
        user.socials.push({ link, type });
        await user.save();
        return res.json({ msg: "Successfully Added" });
      }
    } else {
      // User not found, create a new user with the provided email and social link
      await User.create({ email, socials: [{ link, type }] });
      return res.json({ msg: "Successfully Added" });
    }
  } catch (error) {
    return res.json({ msg: "Error adding/updating social link" });
  }
};



  //get api's

  



module.exports.getUsername = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", username: user.username });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};

module.exports.getName = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", name: user.name });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};

module.exports.getBio = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", bio: user.bio });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};
module.exports.getProfilePic = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", profilePic: user.profilePic });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching profilepic." });
  }
};
module.exports.getBg = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", bg: user.bg });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching bg." });
  }
};

module.exports.getLinks = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", links: user.links });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};

module.exports.getSocials = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ msg: "success", socials: user.socials });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};

// get by username

module.exports.getNameFromUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ msg: "success", name: user.name });
    } else return res.json({ msg: "User with given username not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};
module.exports.getBioFromUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ msg: "success", bio: user.bio });
    } else return res.json({ msg: "User with given username not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};
module.exports.getProfilePicFromUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ msg: "success", profilePic: user.profilePic });
    } else return res.json({ msg: "User with given username not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching profile pic." });
  }
};
module.exports.getBgFromUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ msg: "success", bg: user.bg });
    } else return res.json({ msg: "User with given usernambge not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching bg." });
  }
};

module.exports.getSocialsFromUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ msg: "success", socials: user.socials });
    } else return res.json({ msg: "User with given username not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};

module.exports.getLinksFromUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ msg: "success", links: user.links });
    } else return res.json({ msg: "User with given username not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};
module.exports.getEmailFromUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ msg: "success", email: user.email });
    } else return res.json({ msg: "User with given usernmae not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};

//put requests

module.exports.removeLink = async (req, res) => {
  try {
    const { email, link } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const links = user.links;
      // console.log(links)
      const linkIndex = links.findIndex(links => links.link === link);
      // console.log(linkIndex)
      if (linkIndex===-1) {
        return res.status(400).send({ msg: "link not found." });
      }
     
      links.splice(linkIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          links: links,
        },
        { new: true }
      );
      return res.json({ msg: "link successfully removed.", links });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error removing link from list" });
  }
};

module.exports.removeSocial = async (req, res) => {
  try {
    const { email, type } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const socials = user.socials;
      // console.log(socials)
      const socialIndex = socials.findIndex(socials => socials.type === type);
      // console.log(socialIndex)
      if (socialIndex===-1) {
        return res.status(400).send({ msg: "social not found." });
      }
     
      socials.splice(socialIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          socials: socials,
        },
        { new: true }
      );
      return res.json({ msg: "Social successfully removed.", socials });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error removing social from list" });
  }
};




