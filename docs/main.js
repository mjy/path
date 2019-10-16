!function(e){var t={};function o(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){const a=o(1).Stages,r=Object.keys(a),i=r.length;var n,s,l,u=0;function d(e){s.innerHTML=r[e],l.innerHTML=function(e){let t=a[r[e]];return t[Math.floor(Math.random()*t.length)]}(e)}window.onload=()=>{n=document.querySelector("#randomButton"),s=document.querySelector("#title"),l=document.querySelector("#level-item"),n.addEventListener("click",()=>{u<i?(d(u),u++):"Reset"==n.innerHTML?(n.innerHTML="Journey onwards",d(u=0)):(s.innerHTML="Stage",l.innerHTML="",n.innerHTML="Reset")})}},function(e,t){e.exports={Grails:["Link a taxonomist's phenotypes to genomicist's genotypes","Create the Graph of Life (on just 2 axes, no, no, not that kind of graph)","Identify the Earth's Species","Pick a list of species to send to Mars when The Apocalypse hits, justify the list","Create an environment where scientists do science and code simultaneously","Engineer a tool to sort 7k insects from 4-~0.2 mm large from a single ethanol vial and a 3 day sample in Panama into morpho-species, sequencing and scanning them at the same time (that's 1 vial, 3 days work... good luck scaling)"],Stages:{"Level 1":["Learn Git. OK, that is maybe Level 4, maybe 5, but really, you're likely not going to read that far, so just learn it and reap the benefits.","Transcribe data into a field as an first year college student hourly, by chance, realize that things look pretty cool under a microscope","Don't even make it to a lab, transcribe verbatim text of some weird specimen label as a mechanical turk",'Read a funny name for some animal and plant and realize it is "scientific"'],"Level 2":["Write a macro in Excel, get furious when your PI sorts the columns and saves the data, overwriting your work, write another to fix the mistake, copy the file and only give him the copy"],"Level 3":["You learned Git, right?","Read a file via a script you wrote, a FASTA file","Bang your head on regular expressions because you want to convert the DNA in that FASTA file to AA","Write a file via script","IRL - go see BLUE - https://www.biodiversityliteracy.com/"],"Level 4":["Use what you learned in the Software Carpentry class to finish your tenure-seeking prof's request in little under an hour, reap the rewards of her appreciation",'Realize there is no way in hell you\'re formatting those 1k specimens into a material examined section by hand every time you publish a paper, write a database report or 4k line script to do it for you, rejoice when the reviewer tells you to sort by \\"A\\" when you did \\"B\\" and it takes you three seconds to finish',"Help move to your labs documents to Google Docs/Sheets/Drive, worry about Big Brother reading everything, but have too much fun doing science to think about it","Wonder if your lab has a backup for all this digital stuff (skip to 8)","Realize the week you spent on your FASTA parser was for not, CPAN had you covered","Use Access or Filemaker to store data in a relational format","Use a Juypter notebook","YARE (yet another regular expression) foray, discover positive look ahead","The Loop, it has such power, not just one graph, 1k, not just testing 1 value but 10k values... now what result to present to your graduate committee? <AHA moment> OH wowwww, I can *NEST LOOPS*! <forgets committee, deadlines, and goes back to hacking>"],"Level 5":["You split your 4k line script into 4 files, each one doing a different part",'You start using \\"foo\\" and \\"bar\\" in comments within your code, and when you inadvertently use these words in your weekly lab-meeting you get funny looks from your lab-mates',"Realize things have advanced slightly since CPAN, but not much","Build a website that serves your Lab's homepage","Take a Software Carpentry workshop and feel really good about the result","Get blamed for asking for the answers to your homework on Stack Overflow or Perl Monks because you're trying to customize a regex to parse this weird sequence data, rage in response","Open an issue on a GitHub/Gitlab issue tracker","Take 2 days to write a script that parses 1500 records, feel awesome until you realize it would have taken you 2 hours to do it manually, and your script is so custom","Hear about the concept of SOP, standard operating procedures, help your lab to start writing these"],"Level 6":["Your 4k script is now many small files, and you discover Unit Tests, and with them you absolutely crush it when it's time for YARE, this one super-duper complex","Write a custom pipeline that reads from multiple local resources (e.g. CSV, Excel, Databases)",'Implement JBrowse or other "static" website plugins in your lab\'s website',"Write the engine that parses your fellow PhD students data and plots a pretty graph (Neil Stephonson/Crytponomicon reference)","Move away from Filemaker and Access to Postgres or MySQL","Develop a lab website that sits on top a relationship relational database","Migrate a 20 year old database to a new system","Provide an answer to a GitHub/Gitlab issue that lets the issue be closed","Propose to use a Google technology to solve a biological question","Assign yourself an ORCID ID, wonder why you didn't do that earlier","Finally get the reference to VIM and Emacs","After the 10k request to change color or font or references cited style or your figure legend or or or ... conclude that some folks (who happen to be biologists) are waaay more interested in how things look than what they *mean*","Build a AI based classifier off to classify the images you took of your specimens heads, wonder why it fails, realize you have to look at them manually to build up a training dataset","Come across some weird biodiversity informatics project and realize its interfaces SUCK, use your degree in Design to radically improve the software as an hourly"],"Level 7":["Share your Regular Expression skill as a library for others to use","Realize you are writing code that support science, and that science takes a while, and maybe it would be good if your code had Unit Tests so you could come back to it in 5 years and have a chance of it working as you expect","Be bored at the content of a Software Carpentry workshop, realize you'd have more fun teaching the class, then teach the class after writing a new module and sharing it to the world","Contribute a video that describe the use of your favourite open-source software, get a million likes from biologists because you share it to the world","Lose sleep at night because... something about backups, and what does that field *REAALY* mean, and shouldn't that code run faster, and 3 weeks for the tree to finish, 3 weeks!?!","Write a custom likelihood model for phylogenetic inference in a format compatible with others","Master Vim or Emacs as your primary code editor, fret when the key-binds you use aren't available in your collaborators collaborative document editor of choice","Contribute to the definitions of classes in an OBO Foundry ontology","Adopt LSIDs","Wonder why folks get all worked up about Citation Metrics, i.e. another way bad-actors will game the system, when admins should focus on getting to know their scientists, it's not rocket science, good people are good","Share the results of that 20 year old database to the rest of the world via an API","Find OpenRefine, wonder why you didn't do this at Level 2","Rage when Google end-of-life the technology you built during your grant",'Your PyPi/Gem/CRAN library to map the "foo" from "bar" in a D3.js graph is used to publish a graph in an ^d^d^d^d^d^d^dScience open-access journal"',"Annotate your data with URIs from a OBO Foundry ontology","Ponder turning a silly list of ideas in YML format into something more robust, with resolve URIs, versioning, and rules for deprecation, and edges, a domains and ranges","Play with SPARQL endpoints",'ruby -e \'require "nokogiri"; doc = File.open("file_scrapped_from_the_web_containing_semi-structured_list_of_names_you_want_to_parse.html") { |f| Nokogiri::XML(f) }; doc.errors\''],"Level 8":["Lead the development of a OBO foundry accepted Ontology","Replace a whole pile of your day to day scripts with sed, awk, and friends","You remember backups, and employ a system to deploy your infrastructure (data and apps) to Docker, your institution's Library, some university across the ocean as an image, your tape backup, your brother-in-laws Synology Unit","Gain sleep at night because you used Continuous Integration to test your software","Produce a (biological) Gold Standard dataset that becomes the source for engineering competitions","Worry about the difference between functional and object-oriented languages, and what impact both may have on the science you do","Worry about the philosophical limitations of identifiers, and whether membership changes in a set mean you're talking about a new entity, say something interesting to the public about your thoughts","Question your adoption of LSIDs","Look at your Perl code you wrote during your dissertation and wonder who the hell did that?!","Star worrying about caching results of long running GIS queries.",'Start claiming that the argument "technology! because we need to do things faster" is a false premise, and rather the arguement is "technology! because we need to improve the meaning behind our data"',"After you plot that super cool graph or follow the reviewers suggestion to perhaps not use COMIC SANS realize that how things look can help communicate what they mean","Optimize your library from prior Levels using Rust or Go","Wonder why the recommended standard for displaying a DOI is not followed by one of the largest DOI providers, fork you scraping code to accomodate","Actually build an application on SPARQL endpoints"],"Level 9":["Become the director of the global biodiversity informatics organization","You assume the maintenance of a well established open source library, the community loves you","Develop the core of a system that maps, and returns the results *very* quickly, of all specimens ever digitized","Write the engine that reads custom models for phylogenetic inference","Take a sabbatical to serve on a funding agencies team","Write a sequence aligner, that is faster, more accurate, parallelizes better than BLAST, HMMER, etc.","You write systems to scrape *all* biological data and put it on a single machine","Write code to parse everything ever digitized in a week","Explain to others why they shouldn't use Google technologies to build scientific software on top Lead the development of a TDWG standard","Worry about ORCID IDs becoming the Facebook for scientists","Wonder how Darwin did all that stuff without GUIDs","Test limits to triple stores because wouldn't it be nice if everything is a triple?","Wiki, Graph database, or Relational"],"Level 10":["Design and implement out a universal persistent identifier model that works for biology (assumes you passed on to another plane of existence)",42]}}}]);