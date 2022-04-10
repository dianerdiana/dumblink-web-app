const { tb_user_links } = require("../../models");

exports.addUserLink = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newUserLink = await tb_user_links.create({ title, description });

    const newData = await tb_user_links.findOne({
      where: {
        id: newUserLink.id,
      },
    });

    res.send({
      status: "succcess",
      links: newData,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "server error",
    });
  }
};
