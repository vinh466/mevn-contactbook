/* import the fontawesome core, font awesome icon component, specific icons */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBan, faCheck,
    faEraser, faFlag, faPhone,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(
    faPhone,
    faUser,
    faFlag,
    faCheck,
    faEraser,
    faBan
);

export default FontAwesomeIcon;