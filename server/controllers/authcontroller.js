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
        res.status(201).json({user,token});
    }
    catch(err){
        
        res.status(400).json({err});
    }
}

module.exports.login = async (req, res) => {
    try{
        const {email,password}  = req.body;
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.status(200).json({user,token});
    }
    catch(err){
        res.status(400).json({err});
    }
}

module.exports.addUsername = async (req, res) => {
    
  try {
    const { email, username_from_body } = req.body;
    const user = await User.findOne({ email });

    console.log(user);
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
module.exports.addName = async (req, res) => {
  try {
    const { email, name_from_body } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { name } = user;
      const namePresent = name!=="";
            if (!namePresent) {
        await User.findByIdAndUpdate(
          
          user._id,
          {
            name:  name_from_body,
          },
          { new: true }
        );
      } else return res.json({ msg: "name already present",status:400 });
    } else await User.create({ email, name:name_from_body });
    return res.json({ msg: "name claimed successfully",status:200 });
  } catch (error) {
    return res.json({ msg: "Error claiming name",status:401 });
  }
    
}
module.exports.addBio = async (req, res) => {
  try {
    const { email, bio_from_body } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { bio } = user;
      const bioPresent = bio!=="";
            if (!bioPresent) {
        await User.findByIdAndUpdate(
          
          user._id,
          {
            bio: bio_from_body,
          },
          { new: true }
        );
      } else return res.json({ msg: "bio already present",status:400 });
    } else await User.create({ email, bio:bio_from_body });
    return res.json({ msg: "bio claimed successfully",status:200 });
  } catch (error) {
    return res.json({ msg: "Error claiming bio",status:401 });
  }
    
}

// module.exports.addLink = async (req, res) => {
//   try {
//     const { email, link,title } = req.body;
//     const user = await User.findOne({ email });
//     if (user) {
//       const { links } = user;
//       const linkAlreadyAdded = links.find(({ link: existingLink }) => existingLink === link);
//             if (!linkAlreadyAdded) {
//         await User.findByIdAndUpdate(
          
//           user._id,
//           {
//             links: [...user.links,{
//               link: link,
//               title:title
//             }]
//           },
//           { new: true }
//         );
//       } else return res.json({ msg: "link already added to the liked list." });
//     } else await User.create({ email, links: [{
//       link:link,
//       title:title
//     }] });
//     return res.json({ msg: "link successfully added to liked list." });
//   } catch (error) {
//     return res.json({ msg: "Error adding Link" });
//   }
   
// }

module.exports.addLink = async (req, res) => {
  try {
    const { email, link, title } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const { links } = user;
      const linkIndex = links.findIndex(({ link: existingLink }) => existingLink === link);

      if (linkIndex !== -1) {
        // link found, update the existing link
        await User.findOneAndUpdate(
          { _id: user._id},  
          { $set: { "links.$.title": title,"links.$.link": link } },
         

        );
        return res.json({ msg: "Successfully Updated" });
      } else {
        // link not found, add new link
        user.links.push({ link, title });
        await user.save();
        return res.json({ msg: "Successfully Added" });
      }
    } else {
      // User not found, create a new user with the provided email and social link
      await User.create({ email, links: [{ link, title }] });
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
      return res.json({ msg: "success", name: user.bio });
    } else return res.json({ msg: "User with given email not found." });
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
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};

module.exports.getSocialsFromUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ msg: "success", socials: user.socials });
    } else return res.json({ msg: "User with given email not found." });
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
    } else return res.json({ msg: "User with given email not found." });
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
      console.log(links)
      const linkIndex = links.findIndex(links => links.link === link);
      console.log(linkIndex)
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
      console.log(socials)
      const socialIndex = socials.findIndex(socials => socials.type === type);
      console.log(socialIndex)
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




