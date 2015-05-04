#change DOMAIN,

#TODO: look up bash variables
#DOMAIN
#goes 2 links deep, verbose, ignores robots.txt
httrack https://www.whatever.com -r2 -v -s0

cd www.whatever.com
git clone https://github.com/venturecommunism/sites-ui.git
