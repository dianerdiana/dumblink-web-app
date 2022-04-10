const { tb_links } = require("../../models");

exports.addLink = async (req, res) => {
  const { title, url } = req.body;

  try {
    const createLink = await tb_links.create({ title, url });

    const newLink = await tb_links.findOne({
      where: {
        id: createLink.id,
      },
    });

    res.send({
      status: "success",
      links: newLink,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "server error",
    });
  }
};
