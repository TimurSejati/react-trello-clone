import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Drawer, Grow } from "@material-ui/core";
import colors from "../../utils/color";
import { getImages } from "../../utils/imageApi";

const useStyle = makeStyles((theme) => ({
  drawer: {
    width: "400px",
  },
  menu: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-around",
  },
  optionContainer: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  box: {
    width: "45%",
    height: "90px",
    borderRadius: "9px",
    marginBottom: theme.spacing(2),
  },
}));
export default function SideMenu({
  openSideMenu,
  setOpenSideMenu,
  setNewBgImage,
}) {
  const classes = useStyle();
  const [openOptionColor, setOpenOptionColor] = useState(false);
  const [openOptionImage, setOpenOptionImage] = useState(false);
  const [images, setImages] = useState([]);

  const getListOfImage = async () => {
    const listOfImages = await getImages();
    setImages(listOfImages);
  };

  useEffect(() => {
    getListOfImage();
  }, []);

  return (
    <div>
      <Drawer
        open={openSideMenu}
        anchor="right"
        onClose={() => setOpenSideMenu(false)}
      >
        <div className={classes.drawer}>
          <div className={classes.menu}>
            <div
              className={classes.box}
              style={{
                backgroundImage:
                  "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/landscaping-ideas-1582321830.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => setOpenOptionImage(true)}
            ></div>
            <div
              className={classes.box}
              style={{
                backgroundImage:
                  "url(https://htmlcolorcodes.com/assets/images/html-color-codes-color-palette-generators-7a5b8241.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              onClick={() => {
                setOpenOptionColor(true);
                setOpenOptionImage(false);
              }}
            ></div>
          </div>

          {openOptionImage ? (
            <Grow in={openOptionImage}>
              <div className={classes.optionContainer}>
                {images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.box}
                      style={{
                        backgroundImage: `url(${image.thumb})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                      onClick={() => setNewBgImage(image.full)}
                    ></div>
                  );
                })}
              </div>
            </Grow>
          ) : (
            <Grow in={openOptionColor}>
              <div className={classes.optionContainer}>
                {colors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      className={classes.box}
                      style={{
                        backgroundColor: color,
                      }}
                      onClick={() => setNewBgImage(color)}
                    ></div>
                  );
                })}
              </div>
            </Grow>
          )}
        </div>
      </Drawer>
    </div>
  );
}
