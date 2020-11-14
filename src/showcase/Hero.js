import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import {withTranslation} from "next-i18next";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    background: `url(/hero.jpg) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: 'center center',
    height: "50vw",
    maxHeight: "800px",
    minHeight: "400px",
    width: "100%"
  },
  heroText: {
    fontWeight: 700,
    color: "white",
    padding: theme.spacing(6),
    fontSize: 48
  }
}));

function Hero({ t }) {
  const classes = useStyles();
  // const {title} = props;

  return (
    <div className={classes.heroImage}>
      <h1 className={classes.heroText}>
        {t('heading')}
      </h1>
    </div>
  )
}

export default withTranslation('hero')(Hero)