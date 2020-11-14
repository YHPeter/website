import {Translate} from "mdi-material-ui";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { i18n, config } from '../../i18n'

function getI18nLanguageText(code) {
  return {
    "zh": "简体中文",
    "en": "English",
  }[code]
}

export function LocaleSwitcher() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const save = (name) => () => {
    i18n.changeLanguage(name)
    close()
  };

  const close = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton aria-controls="locale-switcher" aria-haspopup="true" onClick={openMenu}>
        <Translate />
      </IconButton>
      <Menu
        anchorOrigin={{vertical: "top", horizontal: "left"}}
        id="locale-switcher"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={close}
      >
        {
          config.allLanguages.map(languageCode => {
            return <MenuItem key={languageCode} onClick={save(languageCode)} value={languageCode}>
              {getI18nLanguageText(languageCode)}
              <span style={{marginLeft: 4, fontVariant: "all-small-caps"}}>
                ({languageCode})
              </span>
            </MenuItem>
          })
        }
      </Menu>
    </>
  )
}