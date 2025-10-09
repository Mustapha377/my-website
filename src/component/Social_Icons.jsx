import { Facebook, Github, Linkedin, Twitter} from "lucide-react";
import { v4 as uuidv4 } from "uuid";


export const SocialIcons = [
    {
     id: uuidv4(),
     icon:Linkedin,
     Title: "Let's Connect",
     handle: "on LinkedIn",
     link: "https://www.linkedin.com/in/mustapha-ado-musa-1b1462292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
     {
     id: uuidv4(),
     icon: Github,
     Title: "Github",
     handle: "@mustapha",
     link: "https://github.com/Mustapha377"
    },
     {
     id: uuidv4(),
     icon: Facebook,
     Title: "facebook",
     handle: "mustapha ado musa",
     link: "https://www.facebook.com/mustapha.ado.7731"
    },
    {
     id: uuidv4(),
     icon: Twitter,
     Title: "twitter",
     handle: "Mr.Ameer",
     link: "https://x.com/Mustaphaadomus1"
    },
]