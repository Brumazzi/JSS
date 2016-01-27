var list = [
['WebGL Light','https://github.com/Brumazzi/Weblg-Light'],
['Animação KeyFrames','https://github.com/Brumazzi/anima-o-circulando'],
['Cifra de Cesar','https://github.com/Brumazzi/Criptogradia_de_Cesar'],
['Cifra de Vigenere','https://github.com/Brumazzi/Cifra_de_Vigenere'],
['Sistema de estacionamento em Meteore','https://github.com/Brumazzi/parking-app'],
['Pilha em C','https://github.com/Brumazzi/pilha_stack'],
['Threads em C','https://github.com/Brumazzi/Threads'],
['Python Parametros *args & **kwds','https://github.com/Brumazzi/python_args_kwds'],
['Cherrypy Web Framework','https://github.com/Brumazzi/Cherrypy_HelloWorld'],
['Cherrypy MySQL','https://github.com/Brumazzi/Cherrypy_-_mysql'],
['HTMLGen 1.1.2', 'https://github.com/Brumazzi/htmlgen-1.1.2'],
['Sistema Bancario em Java', 'https://github.com/Brumazzi/Sistema_Bancario'],
['Chuva de neve Web', 'https://github.com/Brumazzi/Snow_Rain_JS'],
['Spinner para Web','https://github.com/Brumazzi/Easy-Spinner'],
['EvDev Capiturando teclas','https://github.com/Brumazzi/Key-Hook'],
['Signal Tratamento de erros em C','https://github.com/Brumazzi/Signal---Tratamento-de-erros']
];

for(var x=0; x<list.length; x+=1)
	document.write("<li onclick='location.href=\""+list[x][1]+"\"'>"+list[x][0]+"</li>");
