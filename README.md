# NodeBB: No Infinite Scroll

Completely disable infinite scroll feature in NodeBB. 

![Version](https://img.shields.io/npm/v/nodebb-plugin-ns-disable-infinite-scroll.svg)
![Dependencies](https://david-dm.org/NicolasSiver/nodebb-plugin-ns-disable-infinite-scroll.svg)
![bitHound Score](https://www.bithound.io/github/NicolasSiver/nodebb-plugin-ns-disable-infinite-scroll/badges/score.svg)
![Code Climate](https://img.shields.io/codeclimate/github/NicolasSiver/nodebb-plugin-ns-disable-infinite-scroll.svg)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
 

- [Note](#note)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Note

Don't forget to remove template part that is responsible for scroll configuration from User's Settings.
For Persona you should delete [these lines](https://github.com/NodeBB/nodebb-theme-persona/blob/757f0ba6d5bc94225e0e6aa6d349d31081f99a31/templates/account/settings.tpl#L129-L139)
