// Instructors
DanGarcia = {
    name: 'Sr. Lecturer SOE Dan Garcia',
    img: 'DanGarciaUCBFaculty2004.jpg',
    imgSrc: 'DanGarcia.jpg',
    web: 'http://www.cs.berkeley.edu/~ddgarcia/',
    bio: 'DanBio.txt',
    email: 'dan@cs10.org',
    office: '777 Soda, (510) 517-4041'
};

// TAs
michaelB = {
    name: 'Head TA Michael Ball',
    img: 'Sp14/MichaelBallTake3.jpg',
    imgSrc: 'MichaelBall.jpg',
    web: 'http://michaelballphoto.com',
    bio: 'MichaelBall.txt',
    email: 'michael@cs10.org' };

maxD = {
    name: 'TA Max Dougherty',
    img: 'Sp14/MaxDougherty.jpg',
    imgSrc: 'MaxDougherty.jpg',
    email: 'max@cs10.org' };

jeffreyS = {
    name: 'TA Jeffrey Snowiss',
    img: 'Fa12/JeffreySnowiss.jpg',
    imgSrc: 'JeffreySnowiss.jpg',
    email: 'jeff@cs10.org' };

victoriaS = {
    name: 'TA Victoria Shi',
    img: 'Fa13/VictoriaShi.jpg',
    imgSrc: 'VictoriaShi.jpg',
    bio: 'VictoriaBio.txt',
    email: 'victoria@cs10.org' };

rachelH = {
    name: 'TA Rachel Huang',
    img: 'Fa13/RachelHuang.jpg',
    imgSrc: 'RachelHuang.jpg',
    email: 'rachel@cs10.org'
};

josephC = {
    name: 'TA Joseph Cawthorne',
    img: 'Fa13/JosephCawthorne.jpg',
    imgSrc: 'JosephCawthorne.jpg',
    email: 'joseph@cs10.org' };

jaclynB = {
    name: 'TA Jaclyn Burge',
    img: 'Fa13/JaclynBurge.jpg',
    imgSrc: 'JaclynBurge.jpg',
    web: 'www.jacburge.me',
    email: 'jaclyn@cs10.org' };

andyS   = {
    name: 'TA Andrew Schmitt',
    img: 'Sp14/AndrewSchmitt.jpg',
    imgSrc: 'AndrewSchmitt.jpg',
    email: 'andy@cs10.org'};

LaurenMock = {
    name: 'Head TA Lauren Mock',
    img: 'Sp14/LaurenMock.jpg',
    imgSrc: 'LaurenMock.jpg',
    web: 'http://linkedin.com/in/laurenmock',
    email: 'lauren@cs10.org' };

adamK = {
    name: 'TA Adam Kuphaldt',
    img: 'Sp14/AdamKuphaldt.jpg',
    imgSrc: 'AdamKuphaldt.jpg',
    email: 'adam@cs10.org' };

AranyU = {
    name: 'TA Arany Uthayakumar',
    img: 'Sp14/AranyUthayakumar.jpg',
    imgSrc: 'AranyUthayakumar.jpg',
    bio: 'AranyBio.txt',
    email: 'arany@cs10.org' };

StevenT = {
    name: 'TA Steven Traversi',
    img: 'Sp14/StevenTraversi.jpg',
    imgSrc: 'StevenTraversi.jpg',
    email: 'steven@cs10.org'
};

carlosF = {
    name: 'TA Carlos Flores',
    img: 'Fa13/CarlosFlores.jpg',
    imgSrc: 'CarlosFlores.jpg',
    email: 'carlos@cs10.org'
};

PeterS = {
    name: 'TA Peter Sujan',
    img: 'Fa12/PeterSujan.jpg',
    imgSrc: 'PeterSujan.jpg',
    bio: 'PeterBio.txt',
    email: 'peter@cs10.org'
}

// Readers
claireW = {
    name: 'Reader Claire Watanabe',
    img: 'Fa13/ClaireWatanabe.jpg',
    imgSrc: 'ClaireWatanabe.jpg' };

brandonC = {
    name: 'Reader Brandon Chen',
    img: 'Sp14/BrandonChen.jpg',
    imgSrc: 'BrandonChen.jpg' };

alexM = {
    name: 'Reader Alex McKinney',
    img: 'Sp14/AlexMcKinney.jpg',
    imgSrc: 'AlexMcKinney.jpg' };

jobelV = {
    name: 'Reader Jobel Vecino',
    img: 'Fa13/JobelVecino.jpg',
    imgSrc: 'JobelVecino.jpg' };


/*****************************************************************************/
/** LIST DEFINITIONS **/
/*****************************************************************************/

instructors = [ DanGarcia ];

tas = [ michaelB, LaurenMock, adamK, andyS, AranyU, carlosF, jaclynB, josephC,
    jeffreyS, maxD, PeterS, rachelH, StevenT, victoriaS];

readers = [ alexM, brandonC, claireW, jobelV ];

// If you need to add a new SECTION add it to this object.
// Follow the same format.
all = {
    instructors: instructors,
    readers: readers,
    tas: tas
};

/*****************************************************************************/
/* DATA POPULATION FUNCTIONS  */
/*****************************************************************************/

// Build a basic object for a person from the current semester.
function baseObj(name) {
    src = name.replace(/ /g , '');
    return { name: name,
             img: 'Sp14/' + src + '.jpg',
             imgSrc: src + '.jpg' };
}

function buildPerson(data, width) {
    // Given a JSON object build a div that contains all the person's info
    // width is used to control how many are on a row on the page.

    // Build data objects for very simple cases with nothing special.
    if (data.constructor === String) {
        data = baseObj(data);
    }

    // Create a table element with this person's data, setting a class for width
    var cls = 'col-md-' + (width === 5 ? '20' : Math.floor(12/width));
    elm = '<div class="'+ cls + '">';
    if (!!data.img) {
        elm += '<a href="{{ site.baseurl }}/resources/images/' + data.img + '">';
    }

    elm += '<img class="staff" align="center" ';
    elm += 'alt="' + data.name + '" title="' + data.name + '" src="resources/images/small/';
    elm += data.imgSrc + '" />';
    if (!!data.img) {
        elm += '</a>';
    }
    elm += '<br /><strong>';
    if (!!data.web) {
        elm += '<a href="' + data.web + '">' + data.name + '</a>';
    } else {
        elm += data.name;
    }
    elm += '</strong> ';
    if (!!data.bio) {
        elm += '(<a href="bios/' + data.bio + '">bio</a>)';
    }
    if (!!data.email) {
        elm += '<br /><a href="mailto:' + data.email +
        '?subject=[CS10] SUBJECT"><code>' + data.email + '</code></a>';
    }
    if (!!data.office) {
        elm +=  '<br />' + data.office;
    }
    elm += '</div>';
    return elm;
}

function buildGroup(group, w) {
    // Build a set of table rows, with W items per row
    // based on the people in the GROUP
    // Add them to the appropriate HTML table element
    var ppl = all[group];
    var doc = document.getElementById(group);
    var content = '';
    for (var i = 0; i < ppl.length; i += w) {
        content += '<div class="row staffimgrow">';
        for (var j = i; j < (i + w) && j < ppl.length; j += 1) {
            if (i + w > ppl.length) {
                 w = ppl.length - i;
             }
            content += buildPerson(ppl[j], w);
        }
        content += '</div>';
        content += '<div class="clearfix"></div>';
    }
    doc.innerHTML += content;
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    };
  }
}

/* more code to run on page load */
// Parameters: a section (HTML 'id') and num of images per row.
buildGroup('instructors', 1);
buildGroup('tas', 5);
buildGroup('readers', 5);
