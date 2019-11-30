window.onload=function(){

    alert('输入单词后按空格键匹配');
    var menu = document.getElementsByClassName('menu')[0];
    var bg = document.getElementById('bg');
    var check = document.getElementById('check');
    var score = 0;
    var highestScore = 0;
    var gamestart;
    var word = new Array('Compile','Run','Class','Object','System','out','print','line','variable','type','static','array','parameter','method','function','public','default','get','private','import','set','package','access','atement','protected','void','operation','extends','interface','super','child','parent','overload','abstract','exception','implements','Runtime','override','final','Try','Catch','Finally','Throw','Throws','Throwable','Random','Util','Display','Collection','ArrayList','HashMap','window','Frame','Add','Scroll','Vertical','Horizontal','Listener','Icon','Message','Node','Connection');
    
    ///////////////////开始事件/////////////////////

    menu.onclick = function(){
        var times = 3;
        score = 0;
        var ready = setInterval(countDown,1000);
        document.getElementsByClassName('time')[0].style.color = '#a9a9a9';
        document.getElementsByClassName('time')[0].innerHTML = 'Time:</br>60s';
        document.getElementsByClassName('score')[0].innerHTML = 'Score:</br>'+score;
        document.getElementsByClassName('h-score')[0].style.color = '#a9a9a9';
        function countDown(){
            menu.firstElementChild.innerHTML = times;
            times --;
            if(times == -1)
            {
                menu.firstElementChild.innerHTML = 'GO!';
            }
            if(times == -2)
            {
                menu.style.display = 'none';
                countTime();
                clearInterval(ready);
	makeWord();
                gamestart = setInterval(makeWord,3000);
            }
        }
    }
    ///////////////////////end//////////////////////

    ///////////////////////计时//////////////////////

    function countTime(){
        var t = 59;
        var count = setInterval(function(){
            document.getElementsByClassName('time')[0].innerHTML='Time:</br>'+t+'s';
            t--;
            if(t == -1)
            {
                for(var i = bg.children.length-1;i > 0;i--)
                {
                    bg.removeChild(bg.children[i]);
                }

                clearInterval(gamestart);
                menu.style.display = 'block';
                menu.firstElementChild.innerHTML = 'RETRY';
                clearInterval(count);
            };
            if(t == 9)
            {
                document.getElementsByClassName('time')[0].style.color = 'red';
            }
        }, 1000);
    }
    ///////////////////////end//////////////////////

    /////////////////////字符操作////////////////////

    var str = '';
    window.onkeydown = function(event){
        if(event.keyCode == 8)
        {
            str = str.substr(0,str.length-1);
            check.innerHTML = str;
            return;
        }
        if(event.keyCode >= 65 && event.keyCode <=90 )
        {
            str = str + event.key;
            check.innerHTML = str;
        }
        if(event.keyCode == 32)
        {
            for(var i = 0;i < bg.children.length;i++)
            {
                if(bg.children[i].innerHTML == str)
                {
                    bg.children[i].classList.add('pick-up');
                    score += 10;
                    document.getElementsByClassName('score')[0].innerHTML = 'Score:</br>'+score;
                    if(score > highestScore)
                    {
                        highestScore = score;
                        document.getElementsByClassName('h-score')[0].innerHTML = 'Highest-score:</br>'+score;
                        document.getElementsByClassName('h-score')[0].style.color = 'yellow';
                    }
                }
            }
            str = '';
            check.innerHTML = str;
        }
    }

    ///////////////////////end//////////////////////

    ///////////////////makeword///////////////////
    
    function makeWord(){
        var p = document.createElement('p');
        var wordLength = word.length;
        p.innerHTML = word[Math.ceil(Math.random()*wordLength)].toLowerCase();
        var randomLeft = Math.ceil(Math.random()*250);
        p.style.left = randomLeft+'px';
        p.classList.add('p-slidedown');
        p.addEventListener('animationend',function(){bg.removeChild(this)});
        bg.appendChild(p);
    }

    ///////////////////////end//////////////////////
}