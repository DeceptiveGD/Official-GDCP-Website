
async function levelInfo(level)
{
    // Fetch individual level json file
    const response = await fetch("../../main/json/level/"+ level +".json");
    const levels = await response.json();
    let count = levels.length;

    const levelName = document.getElementById("levelName");
    const levelVideo = document.getElementById("videoPlayer");

    levelName.innerHTML = levels["name"];
    levelVideo.innerHTML = videoEmbed(levels["verification"]);

    // Makes the youtube link viable for iframe
    function videoEmbed(video)
    {
        let videoOutput;

        const url = video;
        
        // Regular expression to extract the Video ID
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);

        if (match && match[2].length === 11) {
            const videoId = match[2];
            // Create the iframe embed code
            videoOutput = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${videoId}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>`;
        } 
        else 
        {
            videoOutput = "Something went wrong<br/>Please contact the staff about the problem";
        }

        return videoOutput;
    }
}

window.levelInfo = levelInfo;