MY SOFTWARE DOESN'T SEEM TO WORK WITH CHROME ANYMORE, IT IS READING THE SKETCH.JS WRONGLY. FIREFOX RECOMMENDED

![ScreenShot](https://github.com/NickSander/Mini_ex/blob/gh-pages/Mini_ex(6)%20'Bubbles'/bubbles.png)

My pieces are being drawn by the power of the weather. The softwares utilizes an api from Apixu.com, which sends the current weather conditions from somewhere around the world (in this case Aarhus) to the program. The program then utilizes the retrieved data like wind_direction to draw on the canvas. It uses the wind direction to decide by which angle the piece should be drawn. The software also recieves temp, wind speed, wind direction and current weather conditions, which are printed as html element under the canvas.

Originally, I inteded for the program also to draw with temperature (if the weather is hot, the canvas would be drawn in red nuances, and if cold in blu nuances), windspeed (the faster the wind speeds, the faster the software would draw). but i ran into issues with converting the api data from the json to visable elements in the program. I just couldn't figure out how to map the temp to the color of the bubbles and with time made this very frustrating to work with, and kind of making me loose motivation.

i have a hard time understanding the meaning of "aesthetics" of big data, i will revisit this question tomorrow after debating with co-students.


OOPS: YOU MIGHT HAVE TO 'ALLOW' THE API SCRIPT TO WORK WHEN YOU LAUNCH THE PROGRAM. SINCE THE SOFTWARE USES AN API FROM AN "UNKNOWN SOURCE"
MOST BROWSERS AUTOBLOCK THE SCRIPTS TO WORK.
YOU MANUALLY HAVE TO ALLOW THE SCRIPT TO WORK BY PRESSING THE SECURITY FUNCTION BESIDES THE URL BAR (LEFT SIDE ON FIREFOX. RIGHT SIDE ON CHROME)

I promise, it's not a hacker script..
Sorry for the inconvenience

Pictures on how to allow the software to retrieve the api data from Apixu.com

Chrome:

![ScreenShot](https://github.com/NickSander/Mini_ex/blob/gh-pages/Mini_ex(6)%20'rain'/chrome.png)

Firefox:

![ScreenShot](https://github.com/NickSander/Mini_ex/blob/gh-pages/Mini_ex(6)%20'rain'/Firefox.png)
