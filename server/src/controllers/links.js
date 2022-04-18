const { tb_links } = require("../../models");

exports.addLink = async (req, res) => {
  const { title, url } = req.body;
  const ulink_id = req.params.id;

  console.log(req.body);

  try {
    const createLink = await tb_links.create({ title, url, ulink_id });

    const newLink = await tb_links.findOne({
      where: {
        id: createLink.id,
      },
    });

    res.status(200).send({
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
