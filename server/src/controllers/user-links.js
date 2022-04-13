const { tb_user_links, tb_links } = require("../../models");

const randomString = require("randomstring");

exports.addUserLink = async (req, res) => {
  const { title, description, template } = req.body;
  const user_id = req.user.id;
  const image = req.file.filename;
  const unique_link = randomString.generate(7);

  try {
    const newUserLink = await tb_user_links.create({
      user_id,
      title,
      description,
      unique_link,
      image,
      template,
    });

    const newData = await tb_user_links.findOne({
      where: {
        id: newUserLink.id,
      },
    });

    res.status(200).send({
      status: "success",
      links: newData,
    });
  } catch (error) {
    res.send({
      status: "failed",
      message: "server error",
    });
  }
};

exports.getUserLinks = async (req, res) => {
  const user_id = req.user.id;
  console.log(req.user);

  try {
    const dataUserLinks = await tb_user_links.findAll({
      where: {
        user_id,
      },
      include: {
        model: tb_links,
        as: "links",
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        links: dataUserLinks,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getUserLink = async (req, res) => {
  const unique_link = req.params.uniqueLink;

  try {
    const dataUserLink = await tb_user_links.findOne({
      where: {
        unique_link,
      },
      include: {
        model: tb_links,
        as: "links",
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: dataUserLink,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateViews = async (req, res) => {
  const { id } = req.params;
  const { view_count } = req.body;

  console.log(req.body);
  try {
    await tb_user_links.update(
      { view_count },
      {
        where: {
          id,
        },
      }
    );

    res.send({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteUserLink = async (req, res) => {
  const { id } = req.params;

  try {
    await tb_user_links.destroy({
      where: {
        id,
      },
    });
    res.send({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
};
