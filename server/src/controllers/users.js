const { tb_users, tb_profiles } = require("../../models");

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await tb_users.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
