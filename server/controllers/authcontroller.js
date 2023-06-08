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
      } else return res.json({ msg: "username already present" });
    } else await User.create({ email, username: username_from_body });
    return res.json({ msg: "username claimed successfully" });
  } catch (error) {
    return res.json({ msg: "Error claiming username" });
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
      } else return res.json({ msg: "name already present" });
    } else await User.create({ email, name:name_from_body });
    return res.json({ msg: "name claimed successfully" });
  } catch (error) {
    return res.json({ msg: "Error claiming name" });
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
      } else return res.json({ msg: "bio already present" });
    } else await User.create({ email, bio:bio_from_body });
    return res.json({ msg: "bio claimed successfully" });
  } catch (error) {
    return res.json({ msg: "Error claiming bio" });
  }
    
}

module.exports.addLink = async (req, res) => {
  try {
    const { email, link } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { links } = user;
      const linkAlreadyAdded = links.find(({ link: existingLink }) => existingLink === link);
            if (!linkAlreadyAdded) {
        await User.findByIdAndUpdate(
          
          user._id,
          {
            links: [...user.links,{
              link: link,
            }]
          },
          { new: true }
        );
      } else return res.json({ msg: "link already added to the liked list." });
    } else await User.create({ email, links: [{
      link:link,
      type:type
    }] });
    return res.json({ msg: "link successfully added to liked list." });
  } catch (error) {
    return res.json({ msg: "Error adding Link" });
  }
   
}
module.exports.addSocial = async (req, res) => {
  try {
    const { email, link ,type} = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { socials } = user;
      const socialAlreadyAdded = socials.find(({ link: existingLink }) => existingLink === link);
            if (!socialAlreadyAdded) {
        await User.findByIdAndUpdate(
          
          user._id,
          {
            socials: [...user.socials,{
              link: link,
              type:type
            }]
          },
          { new: true }
        );
      } else return res.json({ msg: "Already Added" });
    } else await User.create({ email, socials: [{
      link:link,
      type:type
    }] });
    return res.json({ msg: "Successfully Added" });
  } catch (error) {
    return res.json({ msg: "Error adding Social to the link list" });
  }


  //get api's

  
}


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



