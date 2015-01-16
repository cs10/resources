// Concatenation of all CS10 JS Files.

// Maps days since **saturday** to the appropriate cell numbers
// Its value is the cell numbers to deal with.
// The file dynamically calculates days for the semester and doesn't read
// dates from specific cells.
var since = [
    [2],       // 0 days -- Sun: readings
    [3, 4],    // 1 day  -- Mon: lec lab 1
    [4],       // 2 days -- Tues: lab 1
    [5],       // 3 days -- Wed: lab 1, lec2, lab 2
    [6],       // 4 days -- thurs: lab 2
    [6, 7],    // 5 days -- fri: lab 2, disc, hw
    [2],       // 6 days -- Sat: readings
];

var STYLE  = "8px solid Gold";
var MS_DAY = 1000*60*60*24;
// Function used to highlight the current day.
function updateCalendar(date) {
    // The SATURDAY before the first week of the calendar.
    var start = new Date(2014, 7, 18),
        today = date || new Date(),
        highlight = since[ today.getDay() ],
        weeks = Math.floor(((today - start) / MS_DAY) / 7); // Weeks SINCE start
    // if (highlight[0] === 2) {
    //     weeks += 1; // really shitty hack for weekends....
    // }

    var rows = document.getElementsByClassName("cal"),
        temp = rows[weeks],
        cells;

    // Date is out of range of calendar
    if (typeof temp === 'undefined') {
        return;
    }

    cells = temp.cells;

    if (today.getDay() === 3) { // HIGHLIGHT LAB ON WEDS BASED ON TIME OF DAY
        var n = (today.getHours() < 12) ? 4 : 6;
        highlight.push(n);
    }

    // Hack for weeks like spring break, deadweek
    // Not a robust hack, but it should work OK.
    c = (cells.length == 5) ? 3 : highlight[0];

    cells[c].style.border = STYLE;
    if (c === 2 & weeks >= 2) { // HW, in the row before
        // CANT USE 8 BECAUSE ALL WEEKS ARENT THE SAME DARNIT.
        prev = rows[weeks].cells;
        rows[weeks].cells[prev.length - 1].style.border = STYLE;
    }
    if (highlight[1] && cells.length > highlight[1]) {
        cells[highlight[1]].style.border = STYLE;
    }

    // Grey out cells that have past
    for(i = 1; i < rows.length; i += 1) {
        cells = rows[i].cells;
        for(j = 2; j < cells.length; j += 1) {
            if (cells[j].style.border) { return; }
            cells[j].style.background = "#BBB";
            // Go 1 level deep to change the background on inner divs.
            // FIXME: Banish the jQuery? or make this recursive... or
            // not because I would ever need it? But it might be fun...
            if (typeof $ !== 'undefined') {
                if ($(cells[j]).has('div')) {
                    $(cells[j]).children().css('background', '#BBB');
                }
            }
        }
    }
}

function displaySpeech(img_name, img_src) {
    document[img_name].src = img_src;
}



var cs10 = cs10 || {};

// Sunday at the start of the semester
cs10.startDate = '2015-01-18';
cs10.endDate   = '2015-05-16';

cs10.bCoursesID = '1301472';

cs10.gradingScheme = {
    'A+': 485,
    'A' : 470,
    'A-': 450,
    'B+': 445,
    'B' : 420,
    'B-': 400,
    'C+': 385,
    'C' : 370,
    'C-': 350,
    'D' : 300,
    'F' : '<= 299'
};

// ==================================================
// ==========     OBJECT CREATION          ==========
// ==================================================
// Return the week of the course in range [1, 17] else -1
function getWeekOfDate(date) {
    var now = new Date();
    var from = date;
    if (typeof from === 'string') {
        from = new Date(date);
    }

    var dist = from - now;

    if (dist < 0) {
        return -1;
    }

    var weeks = Math.floor(dist / (MS_DAY * 7));

    return weeks <= 17 ? weeks : -1;
}


cs10.newLabObject = function(title, url, rq, video) {
    // FIXME -- better handle the URL via config
    var baseURL = 'http://beautyjoy.github.io/bjc-r/llab/html/topic.html?topic=';
    var urlEnd  = '&novideo&noreading&noassingment&course=cs10_sp15.html';
    var lab = { type: 'Lab' };
    lab.title = title;

    // Global Counter for lecture
    cs10.rqCounter = cs10.rqCounter || 0;

    if (!title) {
        lab.title = 'No Lab';
    }

    if (url) {
        lab.url = baseURL + url + urlEnd;
    }

    if (rq) {
        cs10.rqCounter += 1;
        rq = cs10.rqCounter;
    }

    if (title.indexOf('Project Work') !== -1) {
        lab.classes = 'project';
    }

    if (title.indexOf('No Lab') !== -1 || title.indexOf('No Class') !== -1) {
        lab.classes = 'noClass';
    }

    lab.RQ = rq;

    lab.video = video;
    return lab;
};

cs10.newReadingsObject = function(title, url, classes) {
    var reading = {
        type: 'Reading',
        title: title,
        url: url
    };

    if (!classes) {
        classes = 'required'; // Default option
    }

    reading.classes = 'reading ' + classes;

    return reading;
};

cs10.newLectureObject = function(title, path, videoURL, guest) {
    var lect = { type: 'Lecture' };

    lect.title = title;
    if (!title) {
        lect.title = 'No Lecture';
        return lect;
    }

    if (title.indexOf('No Lecture') !== -1 || title.indexOf('No Class') !== -1) {
        lect.classes = 'noClass';
    }
    if (path) {
        lect.url = 'lecture/' + path + '/';
    }

    lect.guest = guest;
    lect.video = videoURL;
    return lect;
};

cs10.newDiscussionObject = function(title, files) {
    var disc = { type: 'Discussion' };

    disc.title = title;
    if (!title) {
        disc.title = 'No Discussion';
    }

    if (title.indexOf('No Discussion') !== -1 || title.indexOf('No Class') !== -1) {
        disc.classes = 'noClass';
    }

    // Global Counter for discussions
    cs10.discussionCounter = cs10.discussionCounter || 0;
    cs10.discussionCounter += 1;

    if (files) {
        var count = cs10.discussionCounter;
        disc.url = 'discussion/' + (count < 10 ? '0' : '') + count + '/';
    }

    return disc;
};

cs10.newHomeworkObject = function(title, due, submission, spec, notes) {
    var obj = { type: 'Homework' };

    // TODO: Consider refactoring this....
    if (!title) {
        obj.title = 'No Homework!<br />But you might want to check next week\'s';
        return obj;
    }

    obj.title = title;

    // TODO:
    // Consider setting due date from bCourses data?
    if (due) {
        obj.classes = 'due';
        obj.due = due;
    }

    if (spec) {
        obj.spec = spec;
    }

    if (submission) {
        obj.url = 'https://bcourses.berkeley.edu/courses/' + cs10.bCoursesID +
                  '/' + submission;
    }

    return obj;
};

// ==================================================
// ==========     RENDERING CODE           ==========
// ==================================================

cs10.renderObject = function(obj) {
    obj.classes = obj.classes || ' ';
    var html = $(document.createElement('div')).attr(
        { 'class': obj.classes }
    );

    var heading = $(document.createElement('h3')).html(obj.type);
    html.append(heading);
    var content;
    if (obj.url) {
        content = $(document.createElement('a')).attr(
            { 'href': obj.url}).html(obj.title);
    } else {
        content = $(document.createElement('span')).html(obj.title);
    }
    if (obj.video) {
        content.append('<br />');
        var video = $(document.createElement('a')).attr(
            { 'href': obj.video,
              'target': '_blank'
            }).html('Watch a video here.');
        content.append(video);
    }
    if (obj.RQ) {
        content.append('<br />');
        content.append($(document.createElement('b')).html('Reading Quiz ' +
        obj.RQ));
    }

    html.append(content);
    return html.html();
};

cs10.schedule = [];
cs10.buildCal = function() {
    var calDiv     = $('#main-cal'),
        calPills   = $('#cal-sidebar'),
        calContent = $('#cal-content'),
        pillsList  = '',
        calData    = '',
        selector, title, i = 1;

    for (; i <= 17; i += 1) {
        cs10.schedule.push(cs10['week' + i]);
        selector = 'cal-week-' + i;
        title = 'Week ' + i;
        // TODO: Add the date.
        pillsList += '<li><a href="#' + selector +
        '" target="' + selector + '" role="tab" data-toggle="tab">' + title + '</a></li>\n';
    }

    /* Bootstrap div format:
     * <div class="tab-pane active" id="home"></div>
     */
    var week, weekStr, isActive;
    for (i = 0; i < 17; i += 1) {
        // TODO this should be the current week of the school year.
        isActive = i === 0 ? 'active' : '';
        selector = 'cal-week-' + (i + 1);
        week = cs10.schedule[i].map(cs10.renderObject);
        weekStr = week.join('\n');
        calData += '<div class="tab-pane ' + isActive + '" id="' + selector +
        '">' + weekStr + '</div>\n';
    }
    calPills.html(pillsList);
    calContent.html(calData);
};


// REQUIRES MOMENTJS
cs10.getWeekStartDate = function(week) {
    var start = moment(cs10.startDate);

    return start.add((week - 1) * 7 + 1, 'd');
}

cs10.renderTableCalendar = function() {
    var result = $('<tbody>');
    var table = $('.calendar.table');
    if (table.length === 0) { return; }
    for(var i = 1; i < 18; i += 1) {
        result.append(cs10.renderTableRow(i, cs10['week' + i]));
    }
    table.append(result);
};

// This renders a single week in the large semester calendar.
cs10.renderTableRow = function(week, data) {
    var result = $('<tr>').addClass('cal');

    // TODO: Special Case For data.special
    // TODO: Handle Exams (data.exams)

    result.append($('<td>').html(week))                     // Week Number
          .append($('<td>').html(cs10.getDateString(week))) // Dates
          .append(cs10.renderTableReading(data.readings))   // Readings
          .append(cs10.renderTableLecture(data.lectM))      // Mon Lecture
          .append(cs10.renderTableLab(data.labA))           // 1st Lab
          .append(cs10.renderTableLecture(data.lectW))      // Wed Lecture
          .append(cs10.renderTableLab(data.labB))           // 2nd Lab
          .append(cs10.renderTableDiscussion(data.disc))    // Discussion
          .append(cs10.renderTableHW(data.hw));             // Assignments

    return result;
};

cs10.getDateString = function(week) {
    var start = cs10.getWeekStartDate(week);
    var end   = moment(start).add(5, 'd');
    return (start.month() + 1) + '-' + start.date() + ' to ' +
            (end.month() + 1) + '-' + end.date();
};

cs10.renderTableReading = function(readings) {
    var result = $('<td>');
    if (!readings) {
        result.append('No Reading');
    } else if (typeof readings === 'string') {
        result.append(readings);
    } else {
        for (var i = 0; i < readings.length; i += 1) {
            var rd = readings[i];
            var a = $('<a>').html(rd.title).attr(
                {'class': rd.classes, 'href': rd.url, 'target': '_blank'} );
            result.append(a);
            result.append('<br>');
        }
    }
    return result;
};

cs10.renderTableLecture = function(lect) {
    var result = $('<td>');
    if (!lect) {
        result.append('No Lecture');
        result.attr({'class': 'noClass'});
    } else if (typeof lect === 'string') {
        result.append(lect);
    } else {
        if (lect.geust) {
            result.append($('<strong>').html('Guest Lecturer: ' + lect.guest));
            result.append($('<br>'));
        }
        var tag = lect.url ? '<a>' : '<span>';
        var title = $(tag).attr({'href': lect.url}).html(lect.title);
        result.append(title);
        result.append('<br>');
        if (lect.video) {
            result.append('<br>');
            result.append($('<a>').html('(Sp12 HD video with Qs)').attr(
                {'href' : lect.video, 'target' : '_blank'} ));
        }
        result.attr({ 'class' : lect.classes });
    }
    return result;
};

cs10.renderTableLab = function(lab) {
    var result = $('<td>');
    if (!lab) {
        result.append('No Lab');
        result.attr({'class': 'noClass'});
    } else if (typeof lab === 'string') {
        result.append(lab);
    } else {
        var tag = lab.url ? '<a>' : '<span>';
        var title = $(tag).html(lab.title).attr({
            'href': lab.url, 'target': '_blank'});
        result.append(title);
        result.append('<br>');
        if (lab.RQ) {
            result.append($('<br>'));
            result.append($('<strong>').html('Reading Quiz ' + lab.RQ +' (in lab)'));
        }
        result.attr({ 'class' : lab.classes });
        if (lab.video) {
            result.append($('<br>'));
            result.append($('<a>').html('(Video Review)').attr({
                'href' : lab.video, 'target' : '_blank' }));
        }
    }
    return result;
};

cs10.renderTableDiscussion = function(disc) {
    var result = $('<td>');
    if (!disc) {
        result.append('No Discussion');
        result.attr({'class': 'noClass'});
    } else if (typeof disc === 'string') {
        result.append(disc);
    } else {
        result.append(disc.title);
        result.append('<br>');
        result.attr({ 'class' : disc.classes });
        if (disc.url) {
            result.append($('<br>'));
            result.append($('<strong>').html(
                $('<a>').html('(Resources)').attr({'href' : disc.url})
            ));
        }
    }
    return result;
};

cs10.renderTableHW = function(hw) {
    var result = $('<td>');
    if (!hw) {
        result.append('No Homework');
    } else if (typeof hw === 'string') {
        result.append(hw);
    } else { // HW is a list.
        result.append(hw.title);
        result.append('<br>');
        result.attr({ 'class' : hw.classes });
        if (hw.url) {
            result.append($('<a>').html('Submit').attr(
                {'href' : hw.url, 'target' : '_blank' }));
        }
        if (hw.url && hw.spec) {
            result.append(' | ');
        }
        if (hw.spec) {
            result.append($('<a>').html('Spec').attr({'href' : hw.spec}));
        }
        if (hw.due) {
            result.append('<br>');
            result.append('<br>');
            result.append($('<i>').html('due ' + hw.due + ' at 11:59pm'));
        }
    }
    return result;
};

/* Shortcuts for creating schedule objects
 * Paramters:
 * Reading: (title, link, 'type [required is default]')
 * Lecture: (title, '[video URL]', '[Guest Name]')
 * Lab:     (title, 'topic file path', [boolean -- Reading Quiz?])
 * Disc:    (title, [boolean -- Resources available?])
 * HW:      (title, TBD...)
 * NOTE: These links are currently relative to the home page.
 */
var lab      = cs10.newLabObject,
    reading  = cs10.newReadingsObject,
    lect     = cs10.newLectureObject,
    disc     = cs10.newDiscussionObject,
    hw       = cs10.newHomeworkObject;

// ==================================================
// ==========     SCHEDULE ITEMS           ==========
// ==================================================

// JAN 19 - 23
cs10.week1 = {
    readings: 'No Readings',
    lectM: lect('No Lecture Monday'),
    labA: lab('No Labs Monday, Tuesday, or Wednesday morning'),
    lectW: lect('Welcome and Abstraction', '', 'https://coursesharing.org/courses/6/lectures/7'),
    labB: lab("Welcome to <span class='snap'>snap</span>", "berkeley_bjc/intro_new/1-introduction.topic"),
    disc: disc('Welcome to CS10!'),
    hw: hw('HW0', '1/24', 'quizzes/1869517')
};

// JAN 26 - 30
cs10.week2 = {
    readings: [
        reading('Prof. Harvey\'s Intro to Abstraction',
                'resources/readings/BH-Abstraction.txt'),
        reading('Why Software is Eating the World',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889491'),
        reading('Learning to Code!',
                'http://www.youtube.com/watch?v=dU1xS07N-FA',
                'optional'),
        reading('Is Abstraction the Key to Computing?',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889492',
                'optional'),
        reading('Scratch: Programming for All',
                'https://bcourses.berkeley.edu/courses/1301472/files/folder/Readings?preview=53889490',
                'optional')
    ],
    lectM: lect('Functions'),
    labA: lab('Build Your Own Blocks', 'berkeley_bjc/intro_new/2-loops-variables.topic'),
    lectW: lect('Creativity and Abstraction'),
    labB: lab('Conditionals', 'berkeley_bjc/intro_new/3-conditionals.topic', true),
    disc: disc('Anatomy of a Computer and the Power of Binary'),
    hw: hw('HW1', '1/31')
};

// FEB 2 - 6
cs10.week3 = {
    readings: [
        reading('The Story of Alan Turing &amp; His Machine',
                'http://youtu.be/CQhrMmbiaM0'),
        reading('Designing Games with a Purpose (GWAP)',
                'http://doi.acm.org/10.1145/1378704.1378719'),
        reading('Justices Split on Violent Games',
                'http://www.nytimes.com/2011/06/28/us/28scotus.html'),
        reading('Video Games Lecture',
                'https://coursesharing.org/courses/6/lectures/11'),
        reading('(Slides)',
                '../sp12/lec/03/'),
        reading('More readings on video games',
                '../fa10/readings/videogames/extra/',
                'optional'),
        reading('Kinect\'s Future a Game Controller in Everything',
                'http://www.msnbc.msn.com/id/40077373/ns/technology_and_science-games/',
                'optional')
    ],
    lectM: lect('3D Graphics'),
    labA: lab('Functions', 'berkeley_bjc/intro_new/4-abstraction-testing.topic', true),
    lectW: lect('Programming Paradigms'),
    labB: lab('Lists I', 'berkeley_bjc/lists/lists-I.topic'),
    disc: disc('All about lists'),
    hw: hw('HW2', '2/7')
};

// FEB 9 - 13
cs10.week4 = {
    readings: [
        reading('How Algorithms Shape Our World',
                'http://www.ted.com/talks/kevin_slavin_how_algorithms_shape_our_world.html'),
        reading('BtB Chapter 1',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter1.pdf'),
        reading('Program or Be Programmed',
                'http://tedxtalks.ted.com/video/Douglas-Rushkoff-at-TEDxNYED'),
        reading('Program or Be Programmed: A Guide',
                'http://dtc-wsuv.org/hashnextchapter/wp-content/uploads/2013/03/Rushkoff-Study-Guide.pdf',
                'optional'),
        reading('Animating a Blockbuster',
                'http://www.wired.com/magazine/2010/05/process_pixar/',
                'optional')
    ],
    lectM: lect('Algorithms', '',
                'https://coursesharing.org/courses/6/lectures/14'),
    labA: lab('Algorithms', 'berkeley_bjc/areas/algorithms.topic', true),
    lectW: lect('Algorithmic Complexity'),
    labB: lab('Algorithmic Complexity', "berkeley_bjc/areas/algorithm-complexity.topic"),
    disc: disc('Algorithmic Complexity and Quest Review'),
    hw: hw('HW2')
};

// FEB 16 - 20
cs10.week5 = {
    exam: {

    },
    readings: 'No Readings',
    lectM: lect('No Lecture (Holiday)'),
    labA: lab('No Labs Monday<br>Quest Help and Review'),
    lectW: lect('Quest In Class'),
    labB: lab('Finch Robots', 'berkeley_bjc/robots/robots.topic'),
    disc: disc('Quest Debrief and HW3 Help'),
    hw: 'Start HW 3'
};
cs10.week5.lectW.classes = 'exam';
cs10.week5.labA.classes = ''; // Remove 'noClass'


// FEB 23 - 24
cs10.week6 = {
    readings: [
        reading('BtB Chapter 2',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter2.pdf'),
        reading('BtB Chapter 4 Reading Segment 1',
                '../sp12/readings/BtB4-pt1.pdf'),
        reading('BtB Chapter 4 Reading Segment 2',
                '../sp12/readings/BtB4-pt2.pdf'),
        reading('Living in a Digital World',
                'http://cacm.acm.org/magazines/2011/10/131393-living-in-a-digital-world/pdf',
                'optional'),
        reading('BtB Chapter 3',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter3.pdf',
                'optional')
    ],
    lectM: lect('Recursion I'),
    labA: lab('Trees and Fractals using Recursion', 'berkeley_bjc/recur/recursion-trees-fractals.topic', true),
    lectW: lect('Concurrency'),
    labB: lab('Concurrency', 'berkeley_bjc/areas/concurrency.topic'),
    disc: disc('<span style="font-size: 150%">R<sup>e<sup>c<sup>u<sup>r<sup>s<sup>i<sup>o<sup>n</sup></sup></sup></sup></sup></sup></sup></sup>'),
    hw: hw('HW3')
};

// MARCH 2 - 6 (Lauren, Dan, Michael out -- mostly)
cs10.week7 = {
    readings: [
        reading('How Moore\'s Law Works',
                'http://computer.howstuffworks.com/moores-law.htm'),
        reading('Free Lunch is Over',
                'http://www.gotw.ca/publications/concurrency-ddj.htm',
                'hard'),
        reading('What is IBM\'s Watson?',
                'http://www.nytimes.com/2010/06/20/magazine/20Computer-t.html'),
        reading('Brian Harvey\'s AI notes',
                'http://inst.eecs.berkeley.edu/~cs10/fa10/lec/21/ai.txt'),
        reading('The First Church of Robotics',
                'http://www.nytimes.com/2010/08/09/opinion/09lanier.html',
                'optional'),
        reading('The Thinking Machine (Video)',
                'http://www.youtube.com/watch?v=4gzpd0irP58',
                'optional'),
        reading('Spending Moore\'s dividend (CACM)',
                'http://doi.acm.org/10.1145/1506409.1506425',
                'optional')
    ],
    lectM: lect('Recursion II'),
    labA: lab('Recursive Reporters I', 'berkeley_bjc/recur/recursive-reporters-part1.topic', true),
    lectW: lect('Artificial Intelligence', '', '', 'A Guest'),
    labB: lab('Project Work'),
    disc: disc('Concurrency and Midterm Intro'),
    hw: hw('Start Midterm Project')
};

// MARCH 9 - 13 (Lauren, Dan, Michael partially out)
cs10.week8 = {
    readings: [
        reading('BtB Chapter 5 Reading Segment 1',
                '../sp12/readings/BtB5-pt1.pdf'),
        reading('BtB Chapter 5 Reading Segment 2',
                '../sp12/readings/BtB5-pt2.pdf'),
        reading('BtB Chapter 5 Reading Segment 3',
                '../sp12/readings/BtB5-pt3.pdf'),
        reading('BtB Chapter 6 (27-37)',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter6.pdf')
    ],
    lectM: lect('Social Implications I'),
    labA: lab('Project Work <br> Lab Review', '', true),
    lectW: lect('Social Implications II', '', '', 'Gerald Friedland'),
    labB: lab('Project Work'),
    disc: disc('Midterm Review'),
    hw: 'Work on midterm Project'
};

// MIDTERM WEEK
// MARCH 16 - 20
cs10.week9 = {
    exam: {

    },
    readings: 'No Readings',
    lectM: lect('Social Implications III', '', '', 'Brian Harvey'),
    labA: lab('Online <span class="snap">snap</span> Midterm'),
    lectW: lect('The Internet'),
    labB: lab('The Internet', 'berkeley_bjc/areas/internet.topic'),
    disc: disc('Midterm Debrief'),
    hw: hw('Midterm Project')
};
cs10.week9.labA.classes = 'exam';


// Spring Break
// MARCH 23 - 27
cs10.week10 = {
    special: 'Spring Break',
    readings: [],
    hw: 'Get Some Rest!'
};

// MARCH 30 - APRIL 3
cs10.week11 = {
    readings: [
        reading('BtB Chapter 7',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter7.pdf'),
        reading('BtB Appendix',
                '../fa13/readings/Btb_Appendix.pdf'),
        reading('BtB Chapter 8',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter8.pdf',
                'optional')
    ],
    lectM: lect('HCI', '', '', 'Eric Paulos'),
    labA: lab('Tic Tac Toe', 'berkeley_bjc/lists/tic-tac-toe.topic', true),
    lectW: lect('The Internet II'),
    labB: lab('Poject Work'),
    disc: disc('The Internet'),
    hw: hw('Impact Writing Assignment')
};

// APRIL 6 - 10
cs10.week12 = {
    readings: [
        reading('Data explosion creates revolution',
                'http://www.sfgate.com/cgi-bin/article.cgi?f=/c/a/2011/10/19/BU5K1LJ4R3.DTL'),
        reading('Data Mining',
                'http://webdocs.cs.ualberta.ca/~zaiane/courses/cmput690/notes/Chapter1/ch1.pdf'),
        reading('Data Pitfalls',
                'http://searchenginewatch.com/article/2289574/Big-Data-Big-Trouble-How-to-Avoid-5-Data-Analysis-Pitfalls'),
        reading('Computing as Social Science',
                'http://cacm.acm.org/magazines/2009/4/22953-computing-as-social-science/fulltext',
                'optional'),
        reading('Data Visualization',
                'http://datavisualization.ch/',
                'optional'),
        reading('Basic Statistics (Helpful for Project)',
                'http://www.cimt.plymouth.ac.uk/projects/mepres/stats/handlg_data_ch3.pdf',
                'optional')
    ],
    lectM: lect('Lambda and HOFs'),
    labA: lab('Practice with HOFs and Functions as Data', 'berkeley_bjc/hofs/hofs-practice.topic', true),
    lectW: lect('Besides Blocks I'), // THOUGHT: Move this up a weekx
    labB: lab('Besides Blocks: Welcome to Python', 'berkeley_bjc/python/besides-blocks-welcome.topic'),
    disc: disc('Data and HOFs'),
    hw: hw('Impact Post Comments')
};

// APRIL 13 - 17
cs10.week13 = {
    readings: [
        reading('The Heartbleed Bug',
                'http://blog.agilebits.com/2014/04/08/imagine-no-ssl-encryption-its-scary-if-you-try/'),
        reading('What Servers Bleed',
                'https://medium.com/p/804cdf4b48c1',
                'hard')
    ],
    lectM: lect('Besides Blocks II'),
    labA: lab('Besides Blocks: Data Structures in Python', 'berkeley_bjc/python/besides-blocks-data-struct.topic', true),
    lectW: lect('Data'),
    labB: lab('Besides Blocks: Data in Python', 'berkeley_bjc/python/besides-blocks-data.topic'),
    disc: disc('Practical Privacy Implications'),
    hw: [ hw('Data Project'),
          hw('Final Project Proposal') ]
};

// APRIL 20 - 24
cs10.week14 = {
    readings: [
        reading('The Great Robot Race (Video)',
                'https://www.youtube.com/watch?v=uoiJeIb0wBA'),
        reading('Halting Problem Poem',
                'http://introcs.cs.princeton.edu/java/76computability/halting-poem.html',
                'optional')
    ],
    lectM: lect('Future of Computing'),
    labA: lab('Project Work', '', true),
    lectW: lect('Limits of Computing'),
    labB: lab('Project Work'),
    disc: disc('CS @ Cal and Beyond'),
    hw: 'Start on the Final Project'
};

// APRIL 27 - MAY 1
cs10.week15 = {
    exam: {

    },
    readings: [
        reading('Why is Quantum Different?',
                'http://www.scientificamerican.com/article.cfm?id=what-makes-a-quantum-comp'),
        reading('DNA Storage',
                'http://radar.oreilly.com/2012/08/dna-storage.html',
                'hard'),
        reading('Quantum Leap',
                'http://money.cnn.com/2006/07/26/magazines/fortune/futureoftech_quantum.fortune/index.htm',
                'optional'),
        reading('Twenty Top Predictions for life 100 years from now',
                'http://www.bbc.co.uk/news/magazine-16536598',
                'optional'),
        reading('BtB: Conclusion',
                'http://www.bitsbook.com/wp-content/uploads/2008/12/chapter9.pdf',
                'optional')
    ],
    lectM: lect('Saving the World with Computing', '', '', 'Kathy Yelick'),
    labA: lab('Project Work Lab', '', true),
    lectW: lect('Summary and Farewell'),
    labB: 'With-<span class="snap">snap</span> Exam',
    disc: disc('Summary and Farewell'),
    hw: hw('Final Project')
};
cs10.week15.labB.classes = 'exam';


// DEAD WEEK
// MAY 4 - 7
cs10.week16 = {
    special: 'RRR Week -- No Class',
    readings: [],
    hw: hw('Study for the Final')
};

// MAY 11 - 15
cs10.week17 = {
    exam: {

    },
    readings: [],
    labA: lab('Final Exam<br>7 - 10pm'),
    hw: hw(' ')
};
cs10.week17.labA.classes = 'exam';


// Load the Calendar
// Load the calendar:
$(document).ready(function() {
    cs10.renderTableCalendar();
});

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
        elm += '<a href="/resources/resources/images/' + data.img + '">';
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
