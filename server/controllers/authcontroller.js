const User = require("../model/authmodel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { sendMail } = require("../helpers/sendMail");
const { mailHTML } = require("../helpers/mailHTML");
const { orderplacedHTML } = require("../helpers/orderplacedHTML");
const { cancelorderHTML } = require("../helpers/cancelorderHTML");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// module.exports.register = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.create({ email, password });
//     const token = createToken(user._id);
//     // console.log(token);
//     res.status(201).json({ user, token });
//   }
//   catch (err) {
//     // console.log(err);
//     res.status(400).json({ err });
//   }
// }
module.exports.register = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({ msg: "Please Enter all the Feilds" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ msg: "User already exists" });
  }

  const user = await User.create({
    email,
    password,
  });

  if (user) {
    sendMail(email, "Welcome to Ownlink", mailHTML(email));
    res.status(201).json({ user, token: createToken(user._id) });
  } else {
    res.status(404).json({ msg: "User not found" });
  }
});

module.exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      user,
      token: createToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

// module.exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.login(email, password);
//     const token = createToken(user._id);
//     // console.log(token);
//     res.status(200).json({ user, token });
//   }
//   catch (err) {
//     // console.log(err);
//     res.status(400).json({ err });
//   }
// }

// module.exports.register = async (req, res) => {

// };

// module.exports.addUsername = async (req, res) => {
//   try {
//     const { email, username_from_body } = req.body;
//     const user = await User.findOne({ email });

//     // console.log(user);
//     if (user) {
//       const { username } = user;
//       const usernamePresent = username !== "";

//       if (!usernamePresent) {
//         await User.findByIdAndUpdate(
//           user._id,
//           {
//             username: username_from_body,
//           },
//           { new: true }
//         );
//       } else return res.json({ msg: "username already present", status: 400 });
//     } else await User.create({ email, username: username_from_body });
//     return res.json({ msg: "username claimed successfully", status: 200 });
//   } catch (error) {
//     return res.json({ msg: "Error claiming username", status: 401 });
//   }
// };

module.exports.addUsername = async (req, res) => {
  try {
    const { email, username_from_body } = req.body;
    const user = await User.findOne({ email });
    // console.log(user)
    const existingUsername = await User.findOne({
      username: username_from_body,
    });
    // console.log(existingUsername)

    if (user) {
      // User found, update the existing bg
      if (existingUsername) {
        return res.json({ msg: "Username Already Claimed", status: 401 });
      } else {
        user.username = username_from_body;
        await user.save();
        return res.json({ msg: "Successfully Updated", status: 200 });
      }
    } else {
      // User not found, create a new user with the provided email and bg
      await User.create({ email, username_from_body });
      return res.json({ msg: "Successfully Added", status: 200 });
    }
  } catch (error) {
    return res.json({ msg: "Error adding/updating background", status: 400 });
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
    const { email, link, title, linkImage, linkClicks } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const { links } = user;
      const linkIndex = links.findIndex(
        ({ title: existingTitle }) => existingTitle === title
      );

      if (linkIndex !== -1) {
        // Link found, update the existing link
        await User.findOneAndUpdate(
          { _id: user._id, "links.title": title },
          {
            $set: {
              "links.$.title": title,
              "links.$.link": link,
              "links.$.linkImage": linkImage,
            },
          }
        );
        return res.json({ msg: "Successfully Updated" });
      } else {
        // Link not found, add new link
        user.links.push({ link, title, linkImage, linkClicks });
        await user.save();
        return res.json({ msg: "Successfully Added" });
      }
    } else {
      // User not found, create a new user with the provided email and social link
      await User.create({
        email,
        links: [{ link, title, linkImage, linkClicks }],
      });
      return res.json({ msg: "Successfully Added" });
    }
  } catch (error) {
    return res.json({ msg: "Error adding/updating social link" });
  }
};

module.exports.addSocial = async (req, res) => {
  try {
    const { email, link, type, linkClicks } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      const { socials } = user;
      const socialIndex = socials.findIndex(
        ({ type: existingType }) => existingType === type
      );

      if (socialIndex !== -1) {
        // Social link found, update the existing social link
        await User.findOneAndUpdate(
          { _id: user._id, "socials.type": type },
          { $set: { "socials.$.link": link } }
        );
        return res.json({ msg: "Successfully Updated" });
      } else {
        // Social link not found, add new social link
        user.socials.push({ link, type, linkClicks });
        await user.save();
        return res.json({ msg: "Successfully Added" });
      }
    } else {
      // User not found, create a new user with the provided email and social link
      await User.create({ email, socials: [{ link, type, linkClicks }] });
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

module.exports.getUserFromUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (user) {
      return res.json({ msg: "success", user });
    } else return res.json({ msg: "User with given username not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching username." });
  }
};

module.exports.getAllCreators = async (req, res) => {
  try {
    const users = await User.find({});
    if (users) {
      return res.json({ msg: "success", users });
    } else return res.json({ msg: "No users found." });
  } catch (error) {
    return res.json({ msg: "Error fetching users." });
  }
};

module.exports.getValidCreators = async (req, res) => {
  try {
    const users = await User.find({
      $and: [
        { username: { $exists: true, $ne: "" } },
        { name: { $exists: true, $ne: "" } },
      ],
    }).sort({ ownlinkViews: -1 }); // Sort by ownlinkViews in descending order

    if (users.length > 0) {
      return res.json({ msg: "success", users });
    } else {
      return res.json({ msg: "No valid users found." });
    }
  } catch (error) {
    return res.json({ msg: "Error fetching users." });
  }
};

module.exports.getCreator = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });

    if (user) {
      return res.json({ msg: "success", user });
    } else {
      return res.json({ msg: "User with given username not found." });
    }
  } catch (error) {
    return res.json({ msg: "Error fetching user info." });
  }
};

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
      const linkIndex = links.findIndex((links) => links.link === link);
      // console.log(linkIndex)
      if (linkIndex === -1) {
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
      const socialIndex = socials.findIndex((socials) => socials.type === type);
      // console.log(socialIndex)
      if (socialIndex === -1) {
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

module.exports.trackOwnlinkViews = async (req, res) => {
  try {
    const { username } = req.params;

    // console.log(username);

    // Find the user document with the provided username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the ownlinkViews count
    user.ownlinkViews++;
    await user.save();

    // Redirect to the ownlink
    return res.json({
      message: "Redirecting to ownlink",
      ownlink: user.ownlink,
      count: user.ownlinkViews,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getViewsInformation = async (req, res) => {
  try {
    const { username } = req.params;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      ownlinkViews: user.ownlinkViews,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.increaseSocialsViews = async (req, res) => {
  try {
    const { username } = req.params;
    const { socialMediaIcon } = req.body; // Include the social media icon type

    // Update the social media link click count in MongoDB
    const result = await User.updateOne(
      { username, "socials.type": socialMediaIcon },
      { $inc: { "socials.$.linkClicks": 1 } }
    );

    if (result.modifiedCount === 0) {
      return res
        .status(404)
        .json({ message: "User or social media link not found" });
    }

    res.json({ message: "Link click tracked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getAllSocialsViews = async (req, res) => {
  try {
    const { username } = req.params;

    // Find the user document with the provided username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract social media links and their click counts
    const socialLinkCounts = user.socials.map((social) => ({
      socialMediaIcon: social.type,
      linkClicks: social.linkClicks,
    }));

    const sortedSocialLinkCounts = socialLinkCounts.sort(
      (a, b) => b.linkClicks - a.linkClicks
    );

    // console.log(sortedSocialLinkCounts)
    res.json(sortedSocialLinkCounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.increaseLinksViews = async (req, res) => {
  try {
    const { username } = req.params;
    const { title } = req.body;

    console.log(title);

    // Update the social media link click count in MongoDB
    const result = await User.updateOne(
      { username, "links.title": title },
      { $inc: { "links.$.linkClicks": 1 } }
    );

    console.log(result);

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: "User or link not found" });
    }

    res.json({ message: "Link click tracked successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.getAllLinksViews = async (req, res) => {
  try {
    const { username } = req.params;

    // Find the user document with the provided username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract social media links and their click counts
    const linkCounts = user.links.map((link) => ({
      title: link.title,
      linkClicks: link.linkClicks,
    }));

    const sortedLinkCounts = linkCounts.sort(
      (a, b) => b.linkClicks - a.linkClicks
    );

    // console.log(sortedLinkCounts)
    res.json(sortedLinkCounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports.submitOrder = async (req, res) => {
  try {
    const { email, orderData } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      user.orders.push(orderData);
      await user.save();
      sendMail(
        email,
        "Order Placed Successfully",
        orderplacedHTML(orderData.amount)
      );
      return res
        .status(201)
        .json({ msg: "Order Placed Successfully", success: true });
    } else {
      await User.create({ email, orders: [orderData] });
      sendMail(
        email,
        "Order Placed Successfully",
        orderplacedHTML(orderData.amount)
      );
      return res
        .status(202)
        .json({ msg: "Order Placed Successfully", success: true });
    }
  } catch {
    return res.status(401).json({ msg: "Error placing order", success: false });
  }
};

module.exports.getOrders = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    } else {
      return res.status(200).json({ msg: "success", orders: user.orders });
    }
  } catch {
    return res.status(401).json({ msg: "Error fetching orders" });
  }
};

module.exports.cancelOrder = async (req, res) => {
  try {
    const { order_id } = req.params;
    const user = await User.findOne({
      orders: { $elemMatch: { order_id: order_id } },
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    } else {
      const orders = user.orders;
      const orderIndex = orders.findIndex(
        (order) => order.order_id === order_id
      );
      orders.splice(orderIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          orders: orders,
        },
        { new: true }
      );
      sendMail(user.email, "Order Cancelled Successfully", cancelorderHTML());
      return res.status(200).json({
        msg: "Order Cancelled Successfully",
        orders: orders,
        success: true,
      });
    }
  } catch {
    return res
      .status(401)
      .json({ msg: "Error cancelling order", success: false });
  }
};
