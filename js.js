document.addEventListener("DOMContentLoaded", () => {
	//microphone data starts here feel free to edit
	let miclist = [
		{
			name: "SM58",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Ubiquitous live vocal mic, rugged—not phenomenal sound.",
			usage: ["Live Vocals"],
			owner: "GHS",
			quantity: "5",
			image: "img/SM58.png",
			freqgraph: "img/sm58f.png",
			freqrange: "50-15000Hz",
		},
		{
			name: "SM58",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Ubiquitous live vocal mic, rugged—not phenomenal sound.",
			usage: ["Live Vocals"],
			owner: "Howard",
			quantity: "1",
			image: "img/SM58.png",
			freqgraph: "img/sm58f.png",
			freqrange: "50-15000Hz",
		},
		{
			name: "SM57",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Ubiquitous instrument mic. Used often on GTR Amps and Snare. Presence peak at 5-6kHz is nice for some vocals.",
			usage: ["Guitar Amps", "Snare"],
			owner: "GHS",
			quantity: "2",
			image: "img/SM57.png",
			freqgraph: "img/sm57f.png",
			freqrange: "40-15000Hz",
		},
		{
			name: "SM57",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Ubiquitous instrument mic. Used often on GTR Amps and Snare. Presence peak at 5-6kHz is nice for some vocals.",
			usage: ["Guitar Amps", "Snare"],
			owner: "Howard",
			quantity: "2",
			image: "img/SM57.png",
			freqgraph: "img/sm57f.png",
			freqrange: "40-15000Hz",
		},
		{
			name: "Beta 58",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Super Cardioid",
			description: "Super-cardioid stage vocal mic. High SPL and off axis rejection are well suited to loud stages.",
			usage: ["Live Vocals", "Studio Vocals"],
			owner: "GHS",
			quantity: "1",
			image: "img/Beta 58.png",
			freqgraph: "img/beta58f.png",
			freqrange: "50-16000Hz",
		},
		{
			name: "Beta 58",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Super Cardioid",
			description: "Super-cardioid stage vocal mic. High SPL and off axis rejection are well suited to loud stages.",
			usage: ["Live Vocals", "Studio Vocals"],
			owner: "Howard",
			quantity: "2",
			image: "img/Beta 58.png",
			freqgraph: "img/beta58f.png",
			freqrange: "50-16000Hz",
		},
		{
			name: "Beta 57",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Super Cardioid",
			description: "Proximity effect helps balance out harshness on aggressive sources.",
			usage: ["Acoustic Insturments", "Guitar Amps", "Vocals"],
			owner: "GHS",
			quantity: "1",
			image: "img/Beta 57.png",
			freqgraph: "img/beta57f.png",
			freqrange: "50-16000Hz",
		},
		{
			name: "Beta 57",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Super Cardioid",
			description: "Proximity effect helps balance out harshness on aggressive sources.",
			usage: ["Acoustic Insturments", "Guitar Amps", "Vocals"],
			owner: "Howard",
			quantity: "1",
			image: "img/Beta 57.png",
			freqgraph: "img/beta57f.png",
			freqrange: "50-16000Hz",
		},
		{
			name: "Beta 52",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Super Cardioid",
			description: "Pre-EQ'd for a modern kick sound. Proximity effect helpful for focusing the size of a kick.",
			usage: ["Kick"],
			owner: "GHS",
			quantity: "1",
			image: "img/Beta 52.png",
			freqgraph: "img/beta52f.png",
			freqrange: "20-10000Hz",
		},
		{
			name: "SM7b",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Classic large diaphragm dynamic broadcast mic well suited to vocals and bass amps.",
			usage: ["Vocals", "Bass"],
			owner: "GHS",
			quantity: "1",
			image: "img/SM7b.png",
			freqgraph: "img/sm7bf.png",
			freqrange: "50-20000Hz",
		},
		{
			name: "Unidyn 55S",
			manufacturer: "Shure",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Characteristic 'Shure' presence peak. Wonky, grainy, and distorts nicely.",
			usage: ["Vocals", "Distorted Sounds"],
			owner: "GHS",
			quantity: "1",
			image: "img/Unidyn 55S.png",
			freqgraph: "img/unidyn55sf.png",
			freqrange: "40-15000Hz",
		},
		{
			name: "MD421",
			manufacturer: "Seinnheiser",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Well suited to toms, sax, and bass amps. A good fit for a mid-rangey vocal tone.",
			usage: ["Toms", "Sax"],
			owner: "GHS",
			quantity: "1",
			image: "img/MD421.png",
			freqgraph: "img/md421f.png",
			freqrange: "30-17000Hz",
		},
		{
			name: "835",
			manufacturer: "Seinnheiser",
			type: "Dynamic",
			pattern: "Super Cardioid",
			description: "A very clear and open sounding dynamic vocal mic. ",
			usage: ["Vocals"],
			owner: "Howard",
			quantity: "1",
			image: "img/835.png",
			freqgraph: "img/835f.png",
			freqrange: "40-16000Hz",
		},
		{
			name: "e602-ii",
			manufacturer: "Seinnheiser",
			type: "Dynamic",
			pattern: "Super Cardioid",
			description: "If you like sub heavy and clicky Kick drum this mic is your guy.",
			usage: ["Kick"],
			owner: "GHS",
			quantity: "1",
			image: "img/e602-ii.png",
			freqgraph: "img/e602iif.png",
			freqrange: "20-16000Hz",
		},
		{
			name: "PR-30",
			manufacturer: "Heil Sound",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Aggressive dynamic mic for toms. End addressed.",
			usage: ["Vocals", "Drums", "Acoustic Insturments"],
			owner: "GHS",
			quantity: "1",
			image: "img/PR-30.png",
			freqgraph: "img/pr30f.png",
			freqrange: "40-18000Hz",
		},
		{
			name: "PR-40",
			manufacturer: "Heil Sound",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Characteristic HF tonality suited for podcast vocal but excellent on low end sources forward in a mix.",
			usage: ["Vocals", "Drums", "Acoustic Insturments"],
			owner: "Howard",
			quantity: "1",
			image: "img/PR-40.png",
			freqgraph: "img/pr40f.png",
			freqrange: "28-18000Hz",
		},
		{
			name: "RE20",
			manufacturer: "Electro-Voice",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Smooth sounding dynamic mic, cassic broadcast vocal tone. Try it on anything.",
			usage: ["Vocals", "Bass Amp"],
			owner: "Howard",
			quantity: "1",
			image: "img/RE20.png",
			freqgraph: "img/re20f.png",
			freqrange: "45-18000Hz",
		},
		{
			name: "635a",
			manufacturer: "Electro-Voice",
			type: "Dynamic",
			pattern: "Omni-directional",
			description: "Omni dynamic mic for super trashy over-compressed drums.",
			usage: ["Vocals", "Room", "Guitar Amps"],
			owner: "Howard",
			quantity: "1",
			image: "img/635a.png",
			freqgraph: "img/635af.png",
			freqrange: "80-13000Hz",
		},
		{
			name: "N/D 257",
			manufacturer: "Electro-Voice",
			type: "Dynamic",
			pattern: "Cardioid",
			description: "Gritty tone when used with a tube mic pre and pushed hard.",
			usage: ["n/a"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/ND257.png",
			freqgraph: "img/nd257f.png",
			freqrange: "35-19000Hz",
		},
		{
			name: "PM9",
			manufacturer: "Miktek",
			type: "Dynamic",
			pattern: "Super Cardioid",
			description: "Elegant tone on vocals. Nice Dynmic mic feels compressed and smooth even when unprocessed.",
			usage: ["Vocals"],
			owner: "Howard",
			quantity: "2",
			image: "img/PM9.png",
			freqgraph: "img/pm9f.png",
			freqrange: "50-19000Hz",
		},
		{
			name: "MD30",
			manufacturer: "Funkberater",
			type: "Dynamic",
			pattern: "Omni-directional",
			description: "Omni dynamic mic for compressed room tones or experimentation.",
			usage: ["Vocals", "Room"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/MD30.png",
			freqgraph: "img/naf.png",
			freqrange: "60-15000Hz",
		},
		{
			name: "MKE600",
			manufacturer: "Seinnheimer",
			type: "Small-Diaphragm Condenser",
			pattern: "Hyper Cardioid",
			description: "Shotgun mic for FX, Foley and Voice—suited to outdoor use. ",
			usage: ["Vocals", "Foley", "FX"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/MKE600.png",
			freqgraph: "img/mke600f.png",
			freqrange: "40-20000Hz",
		},
		{
			name: "F357",
			manufacturer: "Lauten Audio",
			type: "Large-Diaphragm Condenser",
			pattern: "Omni-Directional, Cardioid, Figure-8",
			description: "Well voiced LDC for studio vocals. Big sound.",
			usage: ["Vocals", "Kick Front"],
			owner: "GHS",
			quantity: "1",
			image: "img/F357.png",
			freqgraph: "img/f357f.png",
			freqrange: "25-20000Hz",
		},
		{
			name: "1973",
			manufacturer: "Soyuz",
			type: "Large-Diaphragm Condenser",
			pattern: "Cardioid",
			description: "Classy, vintage FET mic tone. Sounds like a dynamic mic with the transient response of a condenser.",
			usage: ["Drum Overhead", "Acoustic Insturments", "Stereo Pickup"],
			owner: "GHS",
			quantity: "2",
			image: "img/1973.png",
			freqgraph: "img/naf.png",
			freqrange: "30-18000Hz",
		},
		{
			name: "AT4040",
			manufacturer: "Audio-Technica",
			type: "Large-Diaphragm Condenser",
			pattern: "Omni-Directional, Cardioid, Figure-8",
			description: "Multi-use LDC with accurate yet slightly bright tonality.",
			usage: ["Vocals", "Acoustic Insturments"],
			owner: "Howard",
			quantity: "1",
			image: "img/AT4040.png",
			freqgraph: "img/at4040f.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "AT2020",
			manufacturer: "Audio-Technica",
			type: "Large-Diaphragm Condenser",
			pattern: "Cardioid",
			description: "Flat and somewhat &ldquo;boring&rdquo; LDC, punches way above its pricetag.",
			usage: ["Vocals", "Acoustic Insturments"],
			owner: "GHS",
			quantity: "2",
			image: "img/AT2020.png",
			freqgraph: "img/at2020f.png",
			freqrange: "80-16000Hz",
		},
		{
			name: "AT2050",
			manufacturer: "Audio-Technica",
			type: "Large-Diaphragm Condenser",
			pattern: "Omni-Directional, Cardioid, Figure-8",
			description: "Useful multi-pattern LDC. Slightly flattering good for a clear stereo acoustic tone.",
			usage: ["Vocals", "Acoustic Insturments"],
			owner: "GHS",
			quantity: "2",
			image: "img/AT2050.png",
			freqgraph: "img/at2050f.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "AE5100",
			manufacturer: "Audio-Technica",
			type: "Large-Diaphragm Condenser",
			pattern: "Cardioid",
			description: "Low noise, high quality LDC in a pencil body. Actually very good for percussion and strings.",
			usage: ["Acoustic Insturments"],
			owner: "GHS",
			quantity: "5",
			image: "img/AE5100.png",
			freqgraph: "img/ae5100f.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "AT4041",
			manufacturer: "Audio-Technica",
			type: "Large-Diaphragm Condenser",
			pattern: "Cardioid",
			description: "Accurate, yet maybe a little hard sounding. Okay for pulling acoustic guitar forward in a mix.",
			usage: ["Acoustic Insturments", "Drum Overhead"],
			owner: "GHS",
			quantity: "3",
			image: "img/AT4041.png",
			freqgraph: "img/at4041f.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "NT1a",
			manufacturer: "RØDE",
			type: "Large-Diaphragm Condenser",
			pattern: "Cardioid",
			description: "Low noise, hyped HF. Perfect in some situation on a vocal or percussion.",
			usage: ["Acoustic Insturments", "Vocals"],
			owner: "GHS",
			quantity: "4",
			image: "img/NT1a.png",
			freqgraph: "img/nt1af.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "CM4",
			manufacturer: "Line Audio",
			type: "Small-Diaphragm Condenser",
			pattern: "Wide Cardioid",
			description: "Ultra precise SDC. Excellent on acoustic instruments.",
			usage: ["Acoustic Insturments"],
			owner: "GHS",
			quantity: "1",
			image: "img/CM4.png",
			freqgraph: "img/cm4f.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "CM3",
			manufacturer: "Line Audio",
			type: "Small-Diaphragm Condenser",
			pattern: "Cardioid",
			description: "Ultra precise, if sweet sounding SDC. Excellent on acoustic instruments.",
			usage: ["Acoustic Insturments"],
			owner: "n/a",
			quantity: "2",
			image: "img/CM3.png",
			freqgraph: "img/cm3f.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "N8",
			manufacturer: "AEA",
			type: "Ribbon",
			pattern: "Figure-8",
			description: "Polished tone. Sounds finished when recording. Ribbon mic with some LDC-like characteristics.",
			usage: ["Acoustic Insturments", "Guitar Amps", "Vocals"],
			owner: "GHS",
			quantity: "1",
			image: "img/N8.png",
			freqgraph: "img/n8f.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "U851RBO",
			manufacturer: "Audio-Technica",
			type: "Condenser BLM",
			pattern: "Omni-Directional",
			description: "Slap it on a surface away from sound source to pick up ambiance.",
			usage: ["Room", "Ambiance"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/U851RBO.png",
			freqgraph: "img/u851rbof.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "NT-SF1",
			manufacturer: "RØDE",
			type: "Small-Diaphragm Condenser",
			pattern: "Ambisonic",
			description: "Use with Rode's plugin for encoding-decoding b-format ambisonic signals to stereo.",
			usage: ["Ambiance", "Stereo Pickup"],
			owner: "GHS",
			quantity: "1",
			image: "img/NT-SF1.png",
			freqgraph: "img/naf.png",
			freqrange: "30-20000Hz",
		},
		{
			name: "JDI",
			manufacturer: "Radial Engineering",
			type: "DI Box",
			pattern: "n/a",
			description: "Very good tone.",
			usage: ["DI High Quality"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/JDI.png",
			freqgraph: "img/linearf.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "ProDI",
			manufacturer: "Radial Engineering",
			type: "DI Box",
			pattern: "n/a",
			description: "It's a DI box.",
			usage: ["DI"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/ProDI.png",
			freqgraph: "img/linearf.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "ProD2",
			manufacturer: "Radial Engineering",
			type: "DI Box",
			pattern: "n/a",
			description: "It's a DI box.",
			usage: ["DI"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/ProD2.png",
			freqgraph: "img/linearf.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "DIY",
			manufacturer: "Howard",
			type: "Special Transducer",
			pattern: "Omni-directional (@LF)",
			description: "Put in front of a Kick drum for some extra thick sub tones.",
			usage: ["Kick", "Effect"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/DIY.png",
			freqgraph: "img/naf.png",
			freqrange: "20-1000Hz",
		},
		{
			name: "A95UF",
			manufacturer: "Shure",
			type: "Line-Matching Transducer",
			pattern: "n/a",
			description: "Brings mic level signals down to instument level.",
			usage: ["Reamping Mic Signals"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/A95UF.png",
			freqgraph: "img/linearf.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "X-AMP",
			manufacturer: "Radial Engineering",
			type: "Active ReAmp Box",
			pattern: "n/a",
			description: "Brings mic level signals down to instument level.",
			usage: ["Reamping Mic Signals"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/X-AMP.png",
			freqgraph: "img/linearf.png",
			freqrange: "20-20000Hz",
		},
		{
			name: "PRO-RMP",
			manufacturer: "Radial Engineering",
			type: "Passive ReAmp Box",
			pattern: "n/a",
			description: "Brings mic level signals down to instument level.",
			usage: ["Reamping Mic Signals"],
			owner: "n/a",
			quantity: "n/a",
			image: "img/PRO-RMP.png",
			freqgraph: "img/linearf.png",
			freqrange: "20-20000Hz",
		},
		/* copy and paste the following in the new line to add a new mic:
        {
			name: "",
			manufacturer: "",
			type: "",
			pattern: "",
			description: "",
			usage: ["",],
			owner: "",
			quantity: "",
			image: "",
			freqgraph: "",
			freqrange: "",
		},

        copy and paste end here
        fill out in the quotation marks, if you want to add other usages add another set of quotation marks after the comma in the brackets (["text",] into ["text", "text2",]
        if you don't know in anything add an "n/a"
		for images drag the image into the img folder and put "img/" infront of the file name 
		use img/linearf.png for linear freq graphs and img/naf.png for ones that you dont know
        */
		//anything after this point do not touch (you can still read though)
	];
	//this creates each mic display box and styles it
	function micdisplays() {
		miclist.forEach((element) => {
			let e = document.createElement("div"); //start with the box for everything
			e.classList.add("mic");
			if (document.getElementById(element.name) === null) {
				e.id = element.name;
			} else {
				e.id = element.name + "(2)";
			}
			document.getElementById("miclist").appendChild(e);
			let e2 = document.createElement("div"); //container for image
			e2.classList.add("imagecontainer");
			e.appendChild(e2);
			let child = document.createElement("img"); //image
			child.src = element.image;
			child.classList.add("image");
			e2.appendChild(child);
			e2 = document.createElement("div"); // countainer for text
			e2.classList.add("textcontainer");
			e.appendChild(e2);
			child = document.createElement("div"); //name or title first
			child.innerHTML = element.name;
			child.classList.add("title");
			e2.appendChild(child);
			child = document.createElement("div"); //manufacturer
			child.innerHTML = "Manufacturer: " + element.manufacturer;
			child.classList.add("manufacturer");
			e2.appendChild(child);
			child = document.createElement("div"); //type
			child.innerHTML = "Mic Type: " + element.type;
			child.classList.add("type");
			e2.appendChild(child);
			child = document.createElement("div"); //pattern
			child.innerHTML = "Polar Pattern: " + element.pattern;
			child.classList.add("pattern");
			e2.appendChild(child);
			child = document.createElement("div"); //usages
			let tempstring = "Common Usages: ";
			child.classList.add("type");
			e2.appendChild(child);
			element.usage.forEach((u) => { //looping through the usage list
				tempstring += " " + u + ", ";
			});
			tempstring = tempstring.substring(0, tempstring.length - 2); //cut last comma
			child.innerHTML = tempstring;
			child = document.createElement("div"); //owner
			child.innerHTML = "Owner: " + element.owner;
			child.classList.add("owner");
			e2.appendChild(child);
			child = document.createElement("div"); //quantity
			child.innerHTML = "Quantity: " + element.quantity;
			child.classList.add("quantity");
			e2.appendChild(child);
			child = document.createElement("div"); //frequency range
			child.innerHTML = "Frequency Range: " + element.freqrange;
			child.classList.add("freqrange");
			e2.appendChild(child);
			child = document.createElement("div"); //description, with quotation marks
			child.innerHTML = "&#x201C;" + element.description + "&#x201D;";
			child.classList.add("description");
			e.appendChild(child);
			e2 = document.createElement("div"); //container for graph
			e2.classList.add("graphcontainer");
			e.appendChild(e2);
			child = document.createElement("img"); //graph
			child.src = element.freqgraph;
			child.classList.add("freqgraph");
			e2.appendChild(child);
		});
		child = document.createElement("div"); //final entry with info text
		child.classList.add("thinger");
		child.innerHTML = "If this is the only thing you are seeing, there are no results. Refresh to clear your filters. <br> Otherwise, this is the end of the page.";
		document.getElementById("miclist").appendChild(child);
	}
	//turns a list into a list of unique items
	function unique(arr) {
		return (arr = [...new Set(arr)]);
	}
	//filter functionality
	function filter() {
		//for each filter make a running list of all filters turned on
		let ownerlist2 = ownerlist.slice(0, -1).filter((e, i) => filterstatus[i] === true);
		let typelist2 = typelist.slice(0, -1).filter((e, i) => filterstatus[i + ownerlist.length - 1] === true);
		let usagelist2 = usagelist.slice(0, -1).filter((e, i) => filterstatus[i + ownerlist.length + typelist.length - 2] === true);
		let patternlist2 = patternlist.filter((e, i) => filterstatus[i + ownerlist.length + typelist.length + usagelist.length - 3] === true);
		miclist.forEach((e, i) => { //loop through each microphone
			let usagecheck = false;
			let element = document.querySelectorAll(".mic")[i];
			e.usage.forEach((e2) => {
				usagelist2.includes(e2) ? (usagecheck = true) : 0; //check for usage first
			});
			//check if filters are on, and if every filter is off or on (this took me 2 out of the 4 days i worked on this)
			if (
				(ownerlist2.includes(e.owner) || ownerlist2.length === 0 || ownerlist2.length === ownerlist.length - 1) &&
				(typelist2.includes(e.type) || typelist2.length === 0 || typelist2.length === typelist.length - 1) &&
				(usagecheck || usagelist2.length === 0 || usagelist2.length === usagelist.length - 1) &&
				(patternlist2.includes(e.pattern) || patternlist2.length === 0 || patternlist2.length === patternlist2.length - 1)
			) {
				element.style.display = "grid"; //displays element if it meets all the criteria
			} else {
				element.style.display = "none"; //hides if it doesn't
			}
		});
	}
	//this generates filter choices automatically
	let filterstatus = new Array(250);
	let filterstart = [];
	let ownerlist = [];
	let patternlist = [];
	let usagelist = [];
	let typelist = [];
	for (let i = 0; i < filterstatus.length; i++) {
		filterstatus[i] = false;
	}
	let filterindex = 0;
	function filters() {
		let parent = document.getElementById("ownershipfiltercontainer");
		miclist.forEach((element) => {
			ownerlist.push(element.owner); //grab all the owners
		});
		ownerlist = unique(ownerlist); //remove duplicates
		if (ownerlist.indexOf("n/a") !== -1 && ownerlist.indexOf("n/a") !== ownerlist.length - 1) {
			ownerlist[ownerlist.indexOf("n/a")] = ownerlist[ownerlist.length - 1];
			ownerlist[ownerlist.length - 1] = "n/a";
		} //handling n/a entries
		filterstart.push(ownerlist.length);
		ownerlist.forEach((element) => { //create a button for each entry
			if (element !== "n/a") {
				let button = document.createElement("button");
				button.classList.add("ownerfilter");
				button.classList.add("filter" + filterindex.toString());
				button.id = element;
				button.innerHTML = element;
				parent.appendChild(button);
				button.addEventListener("click", () => { //functionality of each filter button
					let index = parseInt(button.classList[1].slice(6));
					filterstatus[index] = !filterstatus[index];
					if (filterstatus[index]) {
						button.style.backgroundColor = "var(--light3)";
					} else {
						button.style.backgroundColor = "var(--main3)";
					}
					filter();
				});
				filterindex++;
			}
		});
		//repeats 3 more times with all the other filters
		parent = document.getElementById("typefiltercontainer");
		miclist.forEach((element) => {
			typelist.push(element.type);
		});
		typelist = unique(typelist);
		if (typelist.indexOf("n/a") !== -1 && typelist.indexOf("n/a") !== typelist.length - 1) {
			typelist[typelist.indexOf("n/a")] = typelist[typelist.length - 1];
			typelist[typelist.length - 1] = "n/a";
		} else if (typelist.indexOf("n/a") === -1) {
			typelist.push("n/a"); //this is special because there isn't a mic with "n/a"
		}
		filterstart.push(typelist.length);
		typelist.forEach((element) => {
			if (element !== "n/a") {
				let button = document.createElement("button");
				button.classList.add("typefilter");
				button.classList.add("filter" + filterindex.toString());
				button.id = element;
				button.innerHTML = element;
				parent.appendChild(button);
				button.addEventListener("click", () => {
					let index = parseInt(button.classList[1].slice(6));
					filterstatus[index] = !filterstatus[index];
					if (filterstatus[index]) {
						button.style.backgroundColor = "var(--light3)";
					} else {
						button.style.backgroundColor = "var(--main3)";
					}
					filter();
				});
				filterindex++;
			}
		});
		parent = document.getElementById("usagefiltercontainer");
		miclist.forEach((element) => {
			element.usage.forEach((e) => {
				usagelist.push(e);
			});
		});
		usagelist = unique(usagelist);
		if (usagelist.indexOf("n/a") !== -1 && usagelist.indexOf("n/a") !== usagelist.length - 1) {
			usagelist[usagelist.indexOf("n/a")] = usagelist[usagelist.length - 1];
			usagelist[usagelist.length - 1] = "n/a";
		}
		filterstart.push(usagelist.length);
		usagelist.forEach((element) => {
			if (element !== "n/a") {
				let button = document.createElement("button");
				button.classList.add("usagefilter");
				button.classList.add("filter" + filterindex.toString());
				button.id = element;
				button.innerHTML = element;
				parent.appendChild(button);
				button.addEventListener("click", () => {
					let index = parseInt(button.classList[1].slice(6));
					filterstatus[index] = !filterstatus[index];
					if (filterstatus[index]) {
						button.style.backgroundColor = "var(--light3)";
					} else {
						button.style.backgroundColor = "var(--main3)";
					}
					filter();
				});
				filterindex++;
			}
		});
		parent = document.getElementById("patternfiltercontainer");
		miclist.forEach((element) => {
			patternlist.push(element.pattern);
		});
		patternlist = unique(patternlist);
		if (patternlist.indexOf("n/a") !== -1 && patternlist.indexOf("n/a") !== patternlist.length - 1) {
			patternlist[patternlist.indexOf("n/a")] = patternlist[patternlist.length - 1];
			patternlist[patternlist.length - 1] = "n/a";
		}
		filterstart.push(patternlist.length);
		patternlist.forEach((element) => {
			if (element !== "n/a") {
				let button = document.createElement("button");
				button.classList.add("patternfilter");
				button.classList.add("filter" + filterindex.toString());
				button.id = element;
				button.innerHTML = element;
				parent.appendChild(button);
				button.addEventListener("click", () => {
					let index = parseInt(button.classList[1].slice(6));
					filterstatus[index] = !filterstatus[index];
					if (filterstatus[index]) {
						button.style.backgroundColor = "var(--light3)";
					} else {
						button.style.backgroundColor = "var(--main3)";
					}
					filter();
				});
				filterindex++;
			}
		});
	}
	//run everything once everything is checked, finishing all of this
	micdisplays();
	filters();
});
