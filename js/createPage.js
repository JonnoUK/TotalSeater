var title = "Theatre Tools";
var keywords = "";
var description = "Great tools to make better theatre.";

const cssFiles = [
    "default", "fonts"
];

const sitePages = [
    ["home", "Home", 1],
    ["totalSeater", "Total Seater", 2],
    ["venueList", "Venue List", 2]
];


const path = window.location.pathname;
const pageName = path.split("/");
console.log(pageName[1]);

loadCss();
loadHeader();
loadContent();
loadFooter();

function loadCss() {
    cssFiles.forEach(name => {
        const tag = document.createElement("link");
        tag.href = `/css/${name}.css`;
        tag.rel = "stylesheet";
        tag.text = "text/css";
        tag.media = "all";
        document.head.appendChild(tag);
    });
}


function loadHeader() {
    const tag1 = document.createElement("div");
    tag1.id = "noLogo-header-wrapper";
    document.body.appendChild(tag1);

    const tag2 = document.createElement("div");
    tag2.id = "header";
    tag2.className = "container";
    tag1.appendChild(tag2);

    const pageTitle = document.createElement("div");
    pageTitle.className = "title";
    tag2.appendChild(pageTitle);

    const h2Title = document.createElement("h2");
    h2Title.innerText = title;
    pageTitle.appendChild(h2Title);

    const byLine = document.createElement("span");
    byLine.className = "byLine";
    byLine.innerText = description;
    pageTitle.appendChild(byLine);

    const tag3 = document.createElement("div");
    tag3.id = "menu";
    tag2.appendChild(tag3);

    const tag4 = document.createElement("ul");
    tag3.appendChild(tag4);


    sitePages.forEach(page => {
        const pageTag = document.createElement("li");
        if (page[0] == pageName[1]) {
            pageTag.className = "current_page_item";
        }
        tag4.appendChild(pageTag);
        const pageLink = document.createElement("a");
        pageLink.href = `/${page[0]}`;
        const linkName = document.createTextNode(page[1]);
        pageLink.appendChild(linkName);
        pageTag.appendChild(pageLink);
    });
}



function loadContent() {
    const wrapper = document.createElement("div");
    wrapper.id = "wrapper1";
    document.body.appendChild(wrapper);

    const container = document.createElement("div");
    container.id = "welcome";
    container.className = "container";
    wrapper.appendChild(container);



    sitePages.forEach(page => {
        if(page[0] == pageName[1]) {
            const script = document.createElement("script");
            script.src = `/js/pageConstructor/${page[0]}.js`;
            container.appendChild(script);
        }    
    });
}



function loadFooter() {
    const outer =  document.createElement("div");
    outer.id = "copyright";
    document.body.appendChild(outer);

    const title = document.createElement("div");
    title.className = "title";
    outer.appendChild(title);

    const titleText = document.createElement("h2");
    titleText.innerText = ""
    title.appendChild(titleText);

    const byLineText = document.createElement("span")
    byLineText.className = "byLine";
    byLineText.style.fontSize = "1em";
    byLineText.innerText = description;
    title.appendChild(byLineText);

    const contactBar = document.createElement("ul");
    contactBar.className = "contact";
    outer.appendChild(contactBar);

    const socialMedia = [
        ["twitter", "twitter.com/JonathanTaylorP"],
        ["facebook", "facebook.com/JonathanTaylorProductions"],
        ["github", "github.com"]
    ];

    socialMedia.forEach(social => {
        const tag = document.createElement("li");
        contactBar.appendChild(tag);

        const link = document.createElement("a");
        link.href = `//${social[1]}`;
        link.target = "_blank";
        link.className = `icon icon-${social[0]}`;
        tag.appendChild(link);
    });
    
    const para = document.createElement("p");
    para.style.fontSize = "0.7em";
    para.innerHTML = "<p style='font-size: 0.7em'>This is an open-source project hosted on GitHub.</p>";
    outer.appendChild(para);


}


/*
<div id="copyright">
<div class="title">
    <h2>Get in touch</h2>
    <span class="byline">Phasellus nec erat sit amet nibh pellentesque congue</span> </div>
<ul class="contact">
    <li><a href="#" class="icon icon-twitter"><span>Twitter</span></a></li>
    <li><a href="#" class="icon icon-facebook"><span></span></a></li>
    <li><a href="#" class="icon icon-dribbble"><span>Pinterest</span></a></li>
    <li><a href="#" class="icon icon-tumblr"><span>Google+</span></a></li>
    <li><a href="#" class="icon icon-rss"><span>Pinterest</span></a></li>
</ul>
<p>&copy; Untitled. All rights reserved. | Photos by <a href="http://fotogrph.com/">Fotogrph</a> | Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>.</p>
</div>
*/





