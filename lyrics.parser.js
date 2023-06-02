setTimeout(function(){
var name = 'Late Night Talking';
var regex = RegExp(/(\[[0-9]{2}:[0-9]{2}.[0-9]{2}\])/mg);
var metas = [], times = [], lyrics = [];
$.get(name +'.lrc.txt',function(data){
    //console.log(data);
    if(data===undefined) 
    {
        $("#lyricsDiv").html('');
        playSong();
    }
    lyric=data;
    var meta;
    while((meta = regex.exec(data))!=null)			
    metas.push(meta);
    if(metas.length==0)
    {
        regex = /(\[\d{2}:\d{2}\])/mg;
        while((meta = regex.exec(data))!=null)			
        metas.push(meta);
        //console.log(meta);
    }
    for (var i = 0; i < metas.length-1; i++) {
        var line = $.trim(lyric.substring(metas[i].index+10,metas[i+1].index));
        var time = lyric.substring(metas[i].index+1,metas[i].index+6);	//9
        if(line=="") continue;
        lyrics.push({'i':i,'line':line,'time':time});
        window.lyrics = lyrics;
        times[time]=line;
        window.lyricsTime[time]=line;
         
    };	
    console.log(times);
    startLyrics();		
}).fail(function(){
    $("#lyricsDiv").html('');
    playSong();
});

function startLyrics()
{		
playSong();
setTimeout(function(){

    /*time = lyrics[i].time;
    time = time.split(":");
    time = (parseInt( time[0]) * 10000) + (parseInt( time[1]) * 1000);
*/
},1000);

/*

setInterval(function(){
    var ctss = document.getElementById('song').currentTime;
    ctss = Math.round(ctss);
    var ctmm = Math.floor(ctss/60);			
    ctss = ctss%60;
    var timestr = ('0'+ctmm).slice(-2)+":"+('0'+ctss).slice(-2);
    
            if(times[timestr]!==undefined)
            $("#lyricsDiv").html(times[timestr]);
},10); //98 times?
}*/


function playSong()
{


setTimeout(function(){
    //document.getElementById('song').src = name+'.mp3';
    //document.getElementById('song').play();			
},100); //100ms time lag?
}
}

},1000);