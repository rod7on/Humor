const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const glume = [
    "La Moscova s-a organizat un concurs de bancuri politice. Locul I: patru ani și jumătate…\n",
    "La teatru:\n– Aveți multe replici de spus în piesă?\n– Nu, eu joc rolul soțului 😀 :D:D 😀\n",
    "Prima dietă cu rezultat garantat: mănânci doar în zilele în care faci sex :))))\n",
    "De sărbători – Alo, ce faci? – Mâncam! – Scuze, vorbim când termini. – OK, ne auzim după 7 ianuarie. :))))\n",
    "Discuție între doi vecini, în bloc:\n– A venit apa caldă?\n– A venit, da’ e rece…\n",
    "O blondă la cafenea:\n– Încap în termos șase cafele?\n– Da.\n– Puneți-mi două cu zahăr, două fără și două capuccino!\n",
    "Doamnă, nu vă interesează să cumpărați un sac de dormit? Nu, mulțumesc. Sunt căsătorită de mulți ani cu unul.\n",
    "Urăsc violența dar îmi place când mă lovește norocul…\n",
    "-Iubitule, la anul avem 25 de ani de căsnicie…Sărbătorim “Nunta de argint”!!\n-Dragă, mai așteptăm 5 ani și putem sărbători “Războiul de 30 de ani”!\n",
    "Știați că… În 1876, Graham Bell a inventat telefonul și, când l-a conectat prima dată, avea deja 4 apeluri pierdute de la soție? 😀 😀\n",
    "Patriarhia Română: “Taxa de înhumare” se plătește de acum în valută, fiindcă decesul se consideră părăsirea definitivă a țării!\n",
    "Bucureștiul e genul de oraș în care dacă văd pe cineva că fură o mașină oamenii se implică imediat și profită de locul de parcare rămas liber… :)))\n",
    "-Vă vorbește pilotul avionului… Astăzi lucrez de acasă.\n:)))\n",
    "Azi ești tânăr și neliniștit, mâine oprești radioul din mașină ca să vezi mai bine…Așa de repede trece timpul…:)))\n",
    "Mama mi-a zis: urmează-ți visele. Așa că m-am întors în pat.\n",
    "“Ai auzit de restaurantul de pe Marte?\nSuper meniu, dar zero atmosferă…\n",
    "Întotdeauna când te simți prost, amintește-ți:\nAi fost cândva cel mai rapid spermatozoid :)))\n",
    "Mi-ar plăcea să-mi pot lăsa corpul la sală să facă sport și să-l ridic când e gata!! :))\n",
    "-Porumbelule, nu mă deranjează că vă luați de o oră la revedere, dar spune-i să nu mai stea cu fundul pe soneria mea!\n",
    "La următoarele alegeri votează-l pe Ali Baba, are numai 40 de hoți în subordine. :))))\n",
    "Mi-am cumpărat cartea “Învață germana în 10 pași”… Am mers deja 3 kilometri și nimic..Ai naibii hoți!\n",
    "Niciodată să nu te apropii de un taur prin față, de un cal prin spate sau de un prost din orice direcție.\n",
    "La spovedanie:\n-Părinte, am înșelat, am mințit, am furat!\n-Din ce partid faci parte, fiule?\n",
    "Fumatul salvează vieți!!!\nMulți proști sunt acum în viață doar pentru că mi-am aprins o țigară și m-am calmat!\n",
    "Copilul meu tocmai mi-a spus că speră să nu aibă același profesor și la anul….\n",
    "Cum flirtezi în 2020: vreau să fiu în carantină cu tine…. :))\n",
    "Am spălat o mașină plină de pijamale ca să am suficiente haine curate pentru la muncă săptămâna viitoare….\n",
    "Corpul meu a absorbit așa mult săpun și dezinfectant săptămânile astea, încât atunci când fac pipi dezinfectez toaleta…\n",
    "Ce înseamnă un trântor care zace pe canapea:\n-2019: un leneș de doi lei\n-2020: adult responsabil :)))\n",
    "Octombrie 2050: Ion a început ultima rolă de hârtie igienică cumpărată de părinții lui în 2020 :))\n",
    "Ziua numărul 27 acasă:\nCâinele se uită la mine ca și cum mi-ar zice – Vezi, de aia am ros mobila din casă….\n",
    "S-ar putea să mă culc pe canapea în seara asta, ca să scurtez mâine din timpul petrecut pe drumul spre serviciu. :)))\n",
    "Gata, m-am săturat de abonamentul de 90 de zile pentru anul 2020. De unde pot să anulez abonamentul?…\n",
    "De data asta suntem cu toții de acord!\nEra mai bine înainte…:)))\n",
    "Prima dată în istorie când putem salva omenirea stând în fața televizorului.\nHai să n-o dăm în bară.\n",
    "Jumătate dintre noi vor ieși din carantină super buni bucătari, iar cealaltă jumătate vor avea o problemă cu băutura…Nu există cale de mijloc.\n",
    "Au spus că e suficient să porți mască și mănuși ca să mergi la magazin. Au mințit, toți au și haine pe ei…:D :D:D 😀\n",
    "Mama tot timpul mi-a zis că n-o să reușesc să fac ceva în viață dacă stau pe canapea. Și, totuși, iată cum salvez lumea întins pe canapea…\n",
    "Într-o zi vei putea spune nepoților: am supraviețuit marii crize de hârtie igienică din 2020! 😀 :D:D 😀\n",
    "După carantină o să fie bine! Unii grași, alții nebuni, unele însărcinate, altele divorțate. Totul va fi bine :)))\n",
    "Se spune că nu poți ține în frâu prostia. Se dovedește că nu poate fi nici pusă în carantină…\n",
    "După ani și ani în care am tot amânat să fac curățenie din lipsă de timp, în carantină mi-am dat seama că nu ăsta era motivul…\n",
    "Uau, ce an a fost săptămâna asta!!!:D\n",
    "Și noi care credeam că săracii câini sunt greu de dresat! Uite cât de greu e cu oamenii, când li se spună să stea pe loc. 😀 😀\n",
    "Doamna care se ocupă cu curățenie tocmai ce m-a sunat să-mi spună că lucrează de acasă dar că ne trimite instrucțiuni detaliate cu ce avem de făcut…:) 🙂\n",
    "De carantină…Băi, mă simt ca un pui de avicola. Se aprinde lumina, mănânc. Se stinge lumina, dorm!\n",
    "Iubito, în seara asta sunt fierbinte.\n-Mâine o să faci testul pentru coronavirus. :)))\n",
    "Oare e prea devreme să împodobesc bradul de Crăciun? Nu mai am alte lucruri de făcut…\n",
    "Vecina s-a supărat când am văzut-o cu mătura în mână și i-am spus…\n– Zborurile sunt interzise până pe 1 august… 😀 😀\n",
    "De carantină… Piticii de pe creier, pot fi socotiți animale de companie? Că vor să-i plimb…\n",
    "Cineva trebuie să inventeze Zoom-ruleta, ca să poți apăsa pe un buton și să ajungi în mod aleator într-un business meeting, curs la universitate sau o întâlnire între prieteni…\n",
    "Când începe sezonul 2 din 2020?\nNu-mi place deloc primul sezon…\n",
    "Se pare că acest an a fost scris de Stephen King…:D 😀\n",
    "Cea mai proastă achiziție pe care am făcut-o vreodată a fost un planner pentru anul 2020…\n",
    "Nu vreau să mă laud, dar mă spălam pe mâini cu mult înainte ca treaba asta să fie atât de la modă… 😀 :D:D 😀\n",
    "La ora de istorie…\n-Gheorghiță, cine a fost Mihai Viteazul?\n-AMZA PELEA!! :)))\n"
  ];
  

function getGlumaAleatoare() {
  // Alege o glumă aleatorie din tablou
  const indexAleator = Math.floor(Math.random() * glume.length);
  return glume[indexAleator];
}

async function getJoke() {
  try {
    jokeEl.innerText = "Se actualizează...";
    btnEl.disabled = true;
    btnEl.innerText = "Se încarcă...";

    // Obține o glumă aleatorie din tablou
    const gluma = getGlumaAleatoare();

    btnEl.disabled = false;
    btnEl.innerText = "Spune-mi o glumă";

    jokeEl.innerText = gluma;
  } catch (error) {
    jokeEl.innerText = "A intervenit o eroare, încearcă din nou mai târziu";
    btnEl.disabled = false;
    btnEl.innerText = "Spune-mi o glumă";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
