// Konfigurierbare Fragen für das T-Fox Techero-Quiz
// Die Fragen sind nach Kategorien sortiert

const quizQuestions = {
    // Kategorie: Teamhelden - Fragen zu Teamarbeit, Zusammenhalt und Freundschaft
    teamhelden: [
        {
            question: "Was ist eine wichtige Eigenschaft eines guten Teamplayers?",
            answers: [
                "Immer die eigene Meinung durchsetzen",
                "Anderen zuhören können",
                "Alleine arbeiten",
                "Alle Aufgaben selbst erledigen"
            ],
            correctAnswer: 1,
            explanation: "Ein guter Teamplayer kann anderen zuhören und ihre Ideen respektieren."
        },
        {
            question: "Warum ist Zusammenarbeit wichtig?",
            answers: [
                "Damit man weniger arbeiten muss",
                "Weil man dann mehr Pausen machen kann",
                "Weil man gemeinsam bessere Ideen entwickeln kann",
                "Damit man nicht alleine die Schuld bekommt"
            ],
            correctAnswer: 2,
            explanation: "Durch Zusammenarbeit können wir unsere Ideen teilen und gemeinsam bessere Lösungen finden."
        },
        {
            question: "Was bedeutet T-Fox' Motto 'Leave no one behind'?",
            answers: [
                "Man sollte immer der Letzte sein",
                "Man sollte niemanden zurücklassen",
                "Man sollte immer hinter den anderen bleiben",
                "Man sollte sich nicht umdrehen"
            ],
            correctAnswer: 1,
            explanation: "T-Fox' Motto bedeutet, dass wir niemanden zurücklassen oder ausschließen sollten."
        },
        {
            question: "Was kann man tun, wenn jemand im Team Hilfe braucht?",
            answers: [
                "So tun, als hätte man es nicht bemerkt",
                "Sagen, dass man keine Zeit hat",
                "Dem Teamleiter Bescheid geben, dass jemand zu langsam ist",
                "Fragen, wie man helfen kann und Unterstützung anbieten"
            ],
            correctAnswer: 3,
            explanation: "In einem guten Team bietet man Hilfe an, wenn jemand Unterstützung braucht."
        },
        {
            question: "Was ist eine gute Methode, um Konflikte im Team zu lösen?",
            answers: [
                "Miteinander sprechen und gemeinsam eine Lösung finden",
                "Den Konflikt ignorieren",
                "Sich beim Lehrer beschweren",
                "Nicht mehr mit der Person sprechen"
            ],
            correctAnswer: 0,
            explanation: "Konflikte löst man am besten durch Gespräche und gemeinsames Finden einer Lösung."
        },
        {
            question: "Was macht ein guter Teamleiter?",
            answers: [
                "Er gibt allen Befehle und kontrolliert alles",
                "Er macht die ganze Arbeit selbst",
                "Er motiviert das Team und verteilt Aufgaben fair",
                "Er bestraft diejenigen, die Fehler machen"
            ],
            correctAnswer: 2,
            explanation: "Ein guter Teamleiter motiviert sein Team und sorgt dafür, dass die Aufgaben fair verteilt werden."
        },
        {
            question: "Warum ist es wichtig, Feedback im Team zu geben?",
            answers: [
                "Um zu zeigen, wer der Boss ist",
                "Um anderen zu sagen, was sie falsch machen",
                "Um sich zu beschweren",
                "Um sich gegenseitig zu helfen, besser zu werden"
            ],
            correctAnswer: 3,
            explanation: "Feedback hilft allen Teammitgliedern, sich zu verbessern und gemeinsam zu wachsen."
        },
        {
            question: "Was bedeutet 'Teamgeist'?",
            answers: [
                "Ein Gespenst, das Teams heimsucht",
                "Das Gefühl der Zusammengehörigkeit in einer Gruppe",
                "Wenn man immer gewinnen will",
                "Wenn man besser ist als die anderen im Team"
            ],
            correctAnswer: 1,
            explanation: "Teamgeist ist das Gefühl der Zusammengehörigkeit und des gemeinsamen Ziels in einer Gruppe."
        },
        {
            question: "Wie kann man neue Teammitglieder willkommen heißen?",
            answers: [
                "Sie ignorieren, bis sie sich bewiesen haben",
                "Ihnen die schwersten Aufgaben geben",
                "Sie vorstellen, einbeziehen und ihnen helfen",
                "Ihnen sagen, dass sie noch viel lernen müssen"
            ],
            correctAnswer: 2,
            explanation: "Neue Teammitglieder fühlen sich willkommen, wenn man sie vorstellt, einbezieht und ihnen hilft."
        },
        {
            question: "Was ist wichtiger in einem Team?",
            answers: [
                "Dass einer alles bestimmt",
                "Dass jeder seine Meinung sagen darf",
                "Dass man immer gewinnt",
                "Dass man keine Fehler macht"
            ],
            correctAnswer: 1,
            explanation: "In einem guten Team darf jeder seine Meinung äußern und wird gehört."
        },
        {
            question: "Wie kann man im Team Entscheidungen treffen?",
            answers: [
                "Der Stärkste entscheidet immer",
                "Man wirft eine Münze",
                "Man diskutiert gemeinsam und findet einen Kompromiss",
                "Man fragt immer den Lehrer"
            ],
            correctAnswer: 2,
            explanation: "Gute Teamentscheidungen werden durch Diskussion und Kompromisse getroffen."
        },
        {
            question: "Was sollte man tun, wenn man im Team einen Fehler gemacht hat?",
            answers: [
                "Den Fehler verheimlichen",
                "Jemand anderem die Schuld geben",
                "Den Fehler zugeben und versuchen, ihn zu beheben",
                "Das Team verlassen"
            ],
            correctAnswer: 2,
            explanation: "Es ist wichtig, zu seinen Fehlern zu stehen und gemeinsam nach Lösungen zu suchen."
        },
        {
            question: "Warum ist es wichtig, Aufgaben im Team zu verteilen?",
            answers: [
                "Damit man selbst weniger arbeiten muss",
                "Damit jeder seine Stärken einbringen kann",
                "Damit man weiß, wen man beschuldigen kann",
                "Damit der Chef weniger zu tun hat"
            ],
            correctAnswer: 1,
            explanation: "Durch die Verteilung von Aufgaben kann jeder seine Stärken einbringen und zum Erfolg beitragen."
        },
        {
            question: "Was bedeutet 'Verantwortung übernehmen' im Team?",
            answers: [
                "Alle Aufgaben selbst erledigen",
                "Die Schuld auf sich nehmen, wenn etwas schief geht",
                "Für seine Aufgaben und Handlungen einstehen",
                "Den anderen sagen, was sie tun sollen"
            ],
            correctAnswer: 2,
            explanation: "Verantwortung übernehmen bedeutet, für seine Aufgaben und Handlungen einzustehen."
        },
        {
            question: "Wie kann man ein Teammitglied motivieren, das traurig ist?",
            answers: [
                "Ihm sagen, dass es sich zusammenreißen soll",
                "Es ignorieren, bis es wieder fröhlich ist",
                "Ihm zuhören und Unterstützung anbieten",
                "Ihm mehr Arbeit geben, damit es abgelenkt ist"
            ],
            correctAnswer: 2,
            explanation: "Zuhören und Unterstützung anbieten sind gute Wege, um jemandem zu helfen, der traurig ist."
        }
    ],
    
    // Kategorie: Kreativ-Ecke - Fragen zu Kunst, Kreativität und Problemlösung
    kreativ: [
        {
            question: "Was kann helfen, wenn man eine kreative Blockade hat?",
            answers: [
                "Aufgeben und etwas anderes machen",
                "Eine Pause machen und später mit frischen Ideen zurückkommen",
                "Genau das Gleiche wie alle anderen machen",
                "Sich ärgern und beschweren"
            ],
            correctAnswer: 1,
            explanation: "Eine Pause kann helfen, den Kopf frei zu bekommen und mit neuen Ideen zurückzukehren."
        },
        {
            question: "Was ist Brainstorming?",
            answers: [
                "Ein Gewitter im Gehirn",
                "Eine Methode, um viele Ideen zu sammeln, ohne sie sofort zu bewerten",
                "Eine Sportart für das Gehirn",
                "Eine Methode, um Gedanken zu sortieren"
            ],
            correctAnswer: 1,
            explanation: "Beim Brainstorming sammelt man viele Ideen, ohne sie sofort zu kritisieren."
        },
        {
            question: "Welche Farben ergeben gemischt die Farbe Grün?",
            answers: [
                "Rot und Blau",
                "Gelb und Blau",
                "Rot und Gelb",
                "Blau und Lila"
            ],
            correctAnswer: 1,
            explanation: "Gelb und Blau ergeben zusammen die Farbe Grün."
        },
        {
            question: "Was ist ein guter erster Schritt, um ein Problem zu lösen?",
            answers: [
                "Sofort mit der erstbesten Lösung anfangen",
                "Das Problem genau verstehen und definieren",
                "Jemand anderen bitten, es für dich zu lösen",
                "Hoffen, dass das Problem von alleine verschwindet"
            ],
            correctAnswer: 1,
            explanation: "Um ein Problem zu lösen, sollte man es zuerst genau verstehen."
        },
        {
            question: "Was bedeutet es, 'out of the box' zu denken?",
            answers: [
                "Draußen zu denken, nicht in einem Raum",
                "An Dinge zu denken, die in einer Box sind",
                "Ungewöhnliche und neue Lösungswege zu finden",
                "Nur an bekannte Lösungen zu denken"
            ],
            correctAnswer: 2,
            explanation: "'Out of the box' denken bedeutet, ungewöhnliche und kreative Lösungswege zu finden."
        },
        {
            question: "Welche Farben sind die Grundfarben?",
            answers: [
                "Rot, Blau und Gelb",
                "Grün, Orange und Lila",
                "Schwarz, Weiß und Grau",
                "Pink, Türkis und Braun"
            ],
            correctAnswer: 0,
            explanation: "Die Grundfarben sind Rot, Blau und Gelb. Aus ihnen können alle anderen Farben gemischt werden."
        },
        {
            question: "Was ist ein Mindmap?",
            answers: [
                "Eine Landkarte für Gedanken",
                "Eine grafische Darstellung von Ideen und Konzepten",
                "Ein Spiel für kluge Kinder",
                "Eine App für das Smartphone"
            ],
            correctAnswer: 1,
            explanation: "Ein Mindmap ist eine grafische Methode, um Ideen und ihre Verbindungen darzustellen."
        },
        {
            question: "Welche dieser Aktivitäten fördert die Kreativität?",
            answers: [
                "Fernsehen schauen",
                "Computerspiele spielen",
                "Malen und Zeichnen",
                "Schlafen"
            ],
            correctAnswer: 2,
            explanation: "Malen und Zeichnen sind kreative Tätigkeiten, die die Fantasie anregen."
        },
        {
            question: "Was ist ein Prototyp?",
            answers: [
                "Ein erstes Testmodell einer Erfindung",
                "Ein besonders kluger Mensch",
                "Eine Art von Dinosaurier",
                "Ein Computervirus"
            ],
            correctAnswer: 0,
            explanation: "Ein Prototyp ist ein erstes Modell oder Muster, das zum Testen einer Idee dient."
        },
        {
            question: "Welche Farben ergeben gemischt die Farbe Orange?",
            answers: [
                "Rot und Gelb",
                "Blau und Gelb",
                "Rot und Blau",
                "Grün und Rot"
            ],
            correctAnswer: 0,
            explanation: "Rot und Gelb ergeben zusammen die Farbe Orange."
        },
        {
            question: "Was ist ein Experiment?",
            answers: [
                "Eine gefährliche Aktivität",
                "Ein Test, um etwas herauszufinden",
                "Eine Art von Hausaufgabe",
                "Ein Trick"
            ],
            correctAnswer: 1,
            explanation: "Ein Experiment ist ein Test oder Versuch, um eine Frage zu beantworten oder etwas zu erforschen."
        },
        {
            question: "Was bedeutet 'Innovation'?",
            answers: [
                "Etwas kaputt machen",
                "Etwas Neues erfinden oder verbessern",
                "Etwas kopieren",
                "Etwas vergessen"
            ],
            correctAnswer: 1,
            explanation: "Innovation bedeutet, etwas Neues zu schaffen oder etwas Bestehendes zu verbessern."
        },
        {
            question: "Welches dieser Materialien eignet sich gut zum Basteln?",
            answers: [
                "Glas",
                "Metall",
                "Papier und Pappe",
                "Stein"
            ],
            correctAnswer: 2,
            explanation: "Papier und Pappe sind leicht zu bearbeiten und vielseitig einsetzbar beim Basteln."
        },
        {
            question: "Was ist ein Rätsel?",
            answers: [
                "Eine Art von Süßigkeit",
                "Eine knifflige Aufgabe, die gelöst werden muss",
                "Ein Spielzeug für Babys",
                "Ein Tier im Zoo"
            ],
            correctAnswer: 1,
            explanation: "Ein Rätsel ist eine knifflige Aufgabe oder Frage, die zum Nachdenken anregt."
        },
        {
            question: "Warum ist es manchmal gut, Fehler zu machen?",
            answers: [
                "Weil man dann bestraft wird",
                "Weil man dann weniger arbeiten muss",
                "Weil man daraus lernen kann",
                "Weil Fehler immer lustig sind"
            ],
            correctAnswer: 2,
            explanation: "Aus Fehlern kann man lernen und sie helfen uns, besser zu werden."
        }
    ],
    
    // Kategorie: Weltentdecker - Fragen zu verschiedenen Ländern, Kulturen und Technologien
    weltentdecker: [
        {
            question: "Welches ist das größte Land der Erde?",
            answers: [
                "China",
                "USA",
                "Russland",
                "Kanada"
            ],
            correctAnswer: 2,
            explanation: "Russland ist mit über 17 Millionen Quadratkilometern das flächenmäßig größte Land der Erde."
        },
        {
            question: "Welches dieser Tiere lebt NICHT in Afrika?",
            answers: [
                "Löwe",
                "Elefant",
                "Känguru",
                "Giraffe"
            ],
            correctAnswer: 2,
            explanation: "Kängurus leben in Australien, nicht in Afrika."
        },
        {
            question: "Was ist das Internet?",
            answers: [
                "Ein großes Spinnennetz",
                "Ein weltweites Netzwerk von Computern",
                "Ein spezielles Fernsehprogramm",
                "Eine App auf dem Smartphone"
            ],
            correctAnswer: 1,
            explanation: "Das Internet ist ein weltweites Netzwerk, das Computer miteinander verbindet."
        },
        {
            question: "Welche Sprache wird in Brasilien gesprochen?",
            answers: [
                "Spanisch",
                "Brasilianisch",
                "Portugiesisch",
                "Englisch"
            ],
            correctAnswer: 2,
            explanation: "In Brasilien wird hauptsächlich Portugiesisch gesprochen."
        },
        {
            question: "Was ist Robotik?",
            answers: [
                "Eine Sportart mit Robotern",
                "Ein Computerspiel",
                "Die Wissenschaft und Technik, die sich mit Robotern beschäftigt",
                "Eine Art von Musik"
            ],
            correctAnswer: 2,
            explanation: "Robotik ist die Wissenschaft und Technik, die sich mit dem Design, Bau und Einsatz von Robotern beschäftigt."
        },
        {
            question: "Welches ist der höchste Berg der Welt?",
            answers: [
                "Mont Blanc",
                "Kilimandscharo",
                "Mount Everest",
                "Matterhorn"
            ],
            correctAnswer: 2,
            explanation: "Der Mount Everest ist mit 8.848 Metern der höchste Berg der Welt."
        },
        {
            question: "Auf welchem Kontinent liegt Ägypten?",
            answers: [
                "Asien",
                "Europa",
                "Afrika",
                "Südamerika"
            ],
            correctAnswer: 2,
            explanation: "Ägypten liegt im Nordosten von Afrika."
        },
        {
            question: "Was ist ein Smartphone?",
            answers: [
                "Ein besonders kluges Telefon",
                "Ein tragbarer Computer mit Telefonfunktion",
                "Ein Telefon nur für schlaue Menschen",
                "Ein Telefon, das nur in der Schule benutzt werden darf"
            ],
            correctAnswer: 1,
            explanation: "Ein Smartphone ist ein tragbarer Computer mit Telefonfunktion, Internet und Apps."
        },
        {
            question: "Welches dieser Länder liegt NICHT in Europa?",
            answers: [
                "Frankreich",
                "Italien",
                "Japan",
                "Spanien"
            ],
            correctAnswer: 2,
            explanation: "Japan liegt in Asien, nicht in Europa."
        },
        {
            question: "Was ist ein Algorithmus?",
            answers: [
                "Eine Krankheit",
                "Ein Musikinstrument",
                "Eine Schritt-für-Schritt-Anleitung zur Lösung eines Problems",
                "Ein besonderes Tier"
            ],
            correctAnswer: 2,
            explanation: "Ein Algorithmus ist eine genaue Schritt-für-Schritt-Anleitung, wie ein Problem gelöst werden kann."
        },
        {
            question: "Welches ist das bevölkerungsreichste Land der Welt?",
            answers: [
                "Indien",
                "USA",
                "China",
                "Russland"
            ],
            correctAnswer: 2,
            explanation: "China ist mit über 1,4 Milliarden Menschen das bevölkerungsreichste Land der Welt."
        },
        {
            question: "Was ist eine App?",
            answers: [
                "Ein kleines Programm für Smartphones oder Tablets",
                "Ein besonderes Spielzeug",
                "Eine Art von Süßigkeit",
                "Ein Haustier"
            ],
            correctAnswer: 0,
            explanation: "Eine App (Applikation) ist ein Programm, das auf Smartphones oder Tablets installiert werden kann."
        },
        {
            question: "Welches Tier ist das Symbol von Australien?",
            answers: [
                "Koala",
                "Känguru",
                "Krokodil",
                "Komodowaran"
            ],
            correctAnswer: 1,
            explanation: "Das Känguru ist ein Symbol Australiens und erscheint auch im Wappen des Landes."
        },
        {
            question: "Was ist ein 3D-Drucker?",
            answers: [
                "Ein Drucker, der besonders schnell druckt",
                "Ein Gerät, das dreidimensionale Objekte herstellen kann",
                "Ein Drucker, der nur Fotos drucken kann",
                "Ein Drucker für drei Personen gleichzeitig"
            ],
            correctAnswer: 1,
            explanation: "Ein 3D-Drucker kann dreidimensionale Objekte Schicht für Schicht aufbauen."
        },
        {
            question: "Welches dieser Tiere lebt im Meer?",
            answers: [
                "Elefant",
                "Giraffe",
                "Delfin",
                "Löwe"
            ],
            correctAnswer: 2,
            explanation: "Delfine sind Meeressäugetiere, die in Ozeanen und Meeren leben."
        }
    ],
    
    // Kategorie: Gemeinsam stark - Fragen zu Inklusion, Vielfalt und wie man füreinander da sein kann
    gemeinsam: [
        {
            question: "Was bedeutet Inklusion?",
            answers: [
                "Wenn alle ausgeschlossen werden",
                "Wenn alle einbezogen werden, unabhängig von ihren Unterschieden",
                "Wenn man alleine arbeitet",
                "Wenn man nur mit seinen Freunden spielt"
            ],
            correctAnswer: 1,
            explanation: "Inklusion bedeutet, dass alle Menschen einbezogen werden, unabhängig von ihren Unterschieden."
        },
        {
            question: "Warum ist Vielfalt in einer Gruppe wichtig?",
            answers: [
                "Sie ist nicht wichtig",
                "Damit es mehr Streit gibt",
                "Weil unterschiedliche Menschen unterschiedliche Stärken und Ideen haben",
                "Damit man mehr Leute kennenlernt"
            ],
            correctAnswer: 2,
            explanation: "Vielfalt bringt unterschiedliche Perspektiven, Stärken und Ideen in eine Gruppe."
        },
        {
            question: "Was kann man tun, wenn jemand ausgeschlossen wird?",
            answers: [
                "Nichts, das ist nicht mein Problem",
                "Mitmachen beim Ausschließen",
                "Die Person einladen, mitzumachen und sie unterstützen",
                "Der Lehrerin sagen, sie soll etwas tun"
            ],
            correctAnswer: 2,
            explanation: "Wenn jemand ausgeschlossen wird, sollte man aktiv werden und die Person einbeziehen."
        },
        {
            question: "Was bedeutet Barrierefreiheit?",
            answers: [
                "Dass es keine Zäune gibt",
                "Dass alle Menschen Zugang zu Orten, Informationen und Aktivitäten haben",
                "Dass man überall kostenlos hinein darf",
                "Dass es keine Türen gibt"
            ],
            correctAnswer: 1,
            explanation: "Barrierefreiheit bedeutet, dass alle Menschen Zugang zu Orten, Informationen und Aktivitäten haben."
        },
        {
            question: "Wie kann man jemandem helfen, der eine andere Sprache spricht?",
            answers: [
                "Langsam und deutlich sprechen und Gesten benutzen",
                "Lauter sprechen",
                "Die Person ignorieren",
                "In einer anderen Sprache antworten"
            ],
            correctAnswer: 0,
            explanation: "Langsames und deutliches Sprechen sowie Gesten können helfen, Sprachbarrieren zu überwinden."
        },
        {
            question: "Was bedeutet Respekt?",
            answers: [
                "Angst vor jemandem haben",
                "Jemanden bewundern und seine Grenzen achten",
                "Jemanden ignorieren",
                "Jemandem immer Recht geben"
            ],
            correctAnswer: 1,
            explanation: "Respekt bedeutet, andere zu achten, ihre Grenzen zu respektieren und sie wertzuschätzen."
        },
        {
            question: "Was kann man tun, wenn jemand gemobbt wird?",
            answers: [
                "Mitmachen, um nicht selbst gemobbt zu werden",
                "Wegsehen und so tun, als hätte man nichts bemerkt",
                "Eingreifen, die Person unterstützen und Hilfe holen",
                "Darüber lachen, weil es lustig ist"
            ],
            correctAnswer: 2,
            explanation: "Bei Mobbing sollte man eingreifen, die betroffene Person unterstützen und bei Bedarf Hilfe holen."
        },
        {
            question: "Was ist Empathie?",
            answers: [
                "Eine Krankheit",
                "Die Fähigkeit, sich in andere hineinzuversetzen",
                "Wenn man immer wütend ist",
                "Wenn man sehr stark ist"
            ],
            correctAnswer: 1,
            explanation: "Empathie ist die Fähigkeit, sich in andere hineinzuversetzen und ihre Gefühle zu verstehen."
        },
        {
            question: "Warum ist es wichtig, 'Danke' und 'Bitte' zu sagen?",
            answers: [
                "Weil es eine Regel ist",
                "Weil man sonst bestraft wird",
                "Um höflich zu sein und Wertschätzung zu zeigen",
                "Weil es die Erwachsenen wollen"
            ],
            correctAnswer: 2,
            explanation: "'Danke' und 'Bitte' zu sagen zeigt Höflichkeit und Wertschätzung gegenüber anderen."
        },
        {
            question: "Was bedeutet 'fair play'?",
            answers: [
                "Immer gewinnen",
                "Nach den Regeln spielen und andere respektieren",
                "Besser spielen als die anderen",
                "Nur mit den besten Spielern spielen"
            ],
            correctAnswer: 1,
            explanation: "'Fair play' bedeutet, nach den Regeln zu spielen, andere zu respektieren und sportlich zu sein."
        },
        {
            question: "Was kann man tun, wenn jemand traurig ist?",
            answers: [
                "Die Person ignorieren",
                "Der Person sagen, sie soll nicht traurig sein",
                "Zuhören und fragen, wie man helfen kann",
                "So tun, als wäre nichts"
            ],
            correctAnswer: 2,
            explanation: "Wenn jemand traurig ist, hilft es, zuzuhören und Unterstützung anzubieten."
        },
        {
            question: "Was bedeutet 'Toleranz'?",
            answers: [
                "Andere Menschen nicht mögen",
                "Andere Meinungen und Lebensweisen akzeptieren",
                "Alles erlauben, auch wenn es falsch ist",
                "Immer nachgeben"
            ],
            correctAnswer: 1,
            explanation: "Toleranz bedeutet, andere Meinungen, Überzeugungen und Lebensweisen zu akzeptieren, auch wenn sie sich von den eigenen unterscheiden."
        },
        {
            question: "Warum ist es wichtig, Regeln zu haben?",
            answers: [
                "Damit Erwachsene Kinder kontrollieren können",
                "Damit das Zusammenleben fair und sicher ist",
                "Damit man bestraft werden kann",
                "Regeln sind nicht wichtig"
            ],
            correctAnswer: 1,
            explanation: "Regeln sorgen dafür, dass das Zusammenleben fair, sicher und geordnet abläuft."
        },
        {
            question: "Was bedeutet 'Freundschaft'?",
            answers: [
                "Wenn man jemanden mag, weil er Spielzeug hat",
                "Eine Beziehung, die auf gegenseitigem Vertrauen und Respekt basiert",
                "Wenn man immer zusammen ist",
                "Wenn man jemandem Geschenke macht"
            ],
            correctAnswer: 1,
            explanation: "Freundschaft ist eine Beziehung, die auf gegenseitigem Vertrauen, Respekt und Zuneigung basiert."
        },
        {
            question: "Was kann man tun, um neue Freunde zu finden?",
            answers: [
                "Zu Hause bleiben und warten",
                "Anderen Geschenke geben",
                "Offen sein, andere ansprechen und gemeinsame Interessen teilen",
                "So tun, als wäre man jemand anderes"
            ],
            correctAnswer: 2,
            explanation: "Um neue Freunde zu finden, hilft es, offen zu sein, auf andere zuzugehen und gemeinsame Interessen zu teilen."
        }
    ]
};