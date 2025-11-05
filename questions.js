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
            question: "Was bedeutet 'Teambuilding'?",
            answers: [
                "Ein Haus für das Team bauen",
                "Aktivitäten, die den Zusammenhalt im Team stärken",
                "Neue Teammitglieder finden",
                "Ein Computerspiel für Teams"
            ],
            correctAnswer: 1,
            explanation: "Teambuilding umfasst Aktivitäten, die den Zusammenhalt und die Zusammenarbeit im Team verbessern."
        },
        {
            question: "Wie kann man Konflikte im Team am besten lösen?",
            answers: [
                "Den Konflikt ignorieren",
                "Sich beim Chef beschweren",
                "Offen darüber sprechen und gemeinsam eine Lösung finden",
                "Das Team verlassen"
            ],
            correctAnswer: 2,
            explanation: "Offene Kommunikation und gemeinsames Problemlösen sind der beste Weg, um Konflikte zu lösen."
        },
        {
            question: "Was ist wichtig für eine gute Kommunikation im Team?",
            answers: [
                "Nur sprechen, wenn man gefragt wird",
                "Klar und respektvoll kommunizieren",
                "Immer die längsten Erklärungen geben",
                "Nur mit dem Teamleiter sprechen"
            ],
            correctAnswer: 1,
            explanation: "Klare und respektvolle Kommunikation hilft, Missverständnisse zu vermeiden und fördert die Zusammenarbeit."
        },
        {
            question: "Was ist ein 'Brainstorming' im Team?",
            answers: [
                "Wenn alle gleichzeitig schreien",
                "Eine Methode, um gemeinsam viele Ideen zu sammeln",
                "Eine Pause, um den Kopf frei zu bekommen",
                "Ein Test, um das klügste Teammitglied zu finden"
            ],
            correctAnswer: 1,
            explanation: "Beim Brainstorming sammelt das Team gemeinsam viele Ideen, ohne sie sofort zu bewerten."
        },
        {
            question: "Warum ist Vertrauen im Team wichtig?",
            answers: [
                "Es ist nicht wichtig",
                "Damit man Geheimnisse teilen kann",
                "Es ermöglicht effektive Zusammenarbeit und offene Kommunikation",
                "Damit man Fehler auf andere schieben kann"
            ],
            correctAnswer: 2,
            explanation: "Vertrauen ist die Basis für effektive Zusammenarbeit, offene Kommunikation und gegenseitige Unterstützung."
        },
        {
            question: "Was bedeutet 'Synergie' im Team?",
            answers: [
                "Wenn alle gleichzeitig krank werden",
                "Wenn das Team zusammen mehr erreicht als die Einzelpersonen allein",
                "Wenn alle die gleiche Meinung haben",
                "Wenn man Energie spart"
            ],
            correctAnswer: 1,
            explanation: "Synergie bedeutet, dass das Team gemeinsam mehr erreichen kann als die Summe der Einzelleistungen."
        },
        {
            question: "Wie kann man ein neues Teammitglied unterstützen?",
            answers: [
                "Es ignorieren, bis es sich eingewöhnt hat",
                "Es mit schwierigen Aufgaben testen",
                "Es vorstellen, einbeziehen und bei Fragen helfen",
                "Ihm alle einfachen Aufgaben geben"
            ],
            correctAnswer: 2,
            explanation: "Neue Teammitglieder fühlen sich willkommen, wenn man sie vorstellt, einbezieht und ihnen bei Fragen hilft."
        },
        {
            question: "Was ist ein 'Teamritual'?",
            answers: [
                "Eine geheime Zeremonie",
                "Eine regelmäßige gemeinsame Aktivität, die das Team verbindet",
                "Eine Bestrafung für schlechte Teamarbeit",
                "Ein Wettbewerb im Team"
            ],
            correctAnswer: 1,
            explanation: "Teamrituale sind regelmäßige Aktivitäten wie gemeinsame Meetings oder Feiern, die den Zusammenhalt stärken."
        },
        {
            question: "Warum ist konstruktives Feedback im Team wichtig?",
            answers: [
                "Um zu zeigen, wer der Boss ist",
                "Es ist nicht wichtig",
                "Um andere zu kritisieren",
                "Um sich gegenseitig zu helfen, besser zu werden"
            ],
            correctAnswer: 3,
            explanation: "Konstruktives Feedback hilft allen Teammitgliedern, sich zu verbessern und gemeinsam zu wachsen."
        },
        {
            question: "Was ist ein 'Teamplayer'?",
            answers: [
                "Jemand, der nur Mannschaftssport mag",
                "Jemand, der gut mit anderen zusammenarbeitet und das Team unterstützt",
                "Der Kapitän einer Sportmannschaft",
                "Jemand, der alle Entscheidungen im Team trifft"
            ],
            correctAnswer: 1,
            explanation: "Ein Teamplayer ist jemand, der gut mit anderen zusammenarbeitet und zum Erfolg des Teams beiträgt."
        },
        {
            question: "Was ist wichtiger für den Teamerfolg?",
            answers: [
                "Dass jeder seine Arbeit alleine macht",
                "Dass es einen klaren Anführer gibt",
                "Dass alle zusammenarbeiten und sich gegenseitig unterstützen",
                "Dass man besser ist als andere Teams"
            ],
            correctAnswer: 2,
            explanation: "Zusammenarbeit und gegenseitige Unterstützung sind entscheidend für den Erfolg eines Teams."
        },
        {
            question: "Wie kann man die Stimmung im Team verbessern?",
            answers: [
                "Mehr Arbeit verteilen",
                "Gemeinsame Aktivitäten und positive Kommunikation fördern",
                "Strenge Regeln einführen",
                "Die schwächeren Teammitglieder ausschließen"
            ],
            correctAnswer: 1,
            explanation: "Gemeinsame Aktivitäten, Anerkennung und positive Kommunikation verbessern die Teamstimmung."
        },
        {
            question: "Was ist ein 'Teamprojekt'?",
            answers: [
                "Ein Projekt, das man alleine macht",
                "Ein Projekt, bei dem jeder einen separaten Teil bearbeitet",
                "Ein Projekt, das gemeinsam geplant und durchgeführt wird",
                "Ein Wettbewerb zwischen verschiedenen Teams"
            ],
            correctAnswer: 2,
            explanation: "Ein Teamprojekt wird gemeinsam geplant, durchgeführt und verantwortet."
        },
        {
            question: "Warum sind unterschiedliche Fähigkeiten im Team wichtig?",
            answers: [
                "Sie sind nicht wichtig, alle sollten gleich sein",
                "Damit man vergleichen kann, wer besser ist",
                "Weil verschiedene Aufgaben verschiedene Fähigkeiten erfordern",
                "Damit es mehr Wettbewerb gibt"
            ],
            correctAnswer: 2,
            explanation: "Unterschiedliche Fähigkeiten ergänzen sich und ermöglichen dem Team, vielfältige Aufgaben zu bewältigen."
        },
        {
            question: "Was bedeutet 'Teamdynamik'?",
            answers: [
                "Wie schnell ein Team rennen kann",
                "Die Art und Weise, wie Teammitglieder miteinander interagieren",
                "Wie laut ein Team ist",
                "Die Größe eines Teams"
            ],
            correctAnswer: 1,
            explanation: "Teamdynamik beschreibt, wie Teammitglieder miteinander interagieren und zusammenarbeiten."
        },
        {
            question: "Wie kann man Entscheidungen im Team fair treffen?",
            answers: [
                "Der Chef entscheidet immer",
                "Man würfelt",
                "Durch Diskussion, Abstimmung oder Konsens",
                "Der Älteste entscheidet"
            ],
            correctAnswer: 2,
            explanation: "Faire Teamentscheidungen werden durch offene Diskussion, Abstimmung oder Konsensbildung getroffen."
        },
        {
            question: "Was ist wichtig bei der Aufgabenverteilung im Team?",
            answers: [
                "Die unbeliebten Aufgaben den Neuen geben",
                "Alle machen alles gemeinsam",
                "Aufgaben nach Fähigkeiten und Interessen fair verteilen",
                "Die schwierigsten Aufgaben dem Teamleiter geben"
            ],
            correctAnswer: 2,
            explanation: "Eine faire Aufgabenverteilung berücksichtigt die Fähigkeiten und Interessen der Teammitglieder."
        },
        {
            question: "Was ist ein 'Teamziel'?",
            answers: [
                "Ein Tor beim Fußball",
                "Ein gemeinsames Ziel, das das Team zusammen erreichen will",
                "Die Belohnung nach getaner Arbeit",
                "Eine Aufgabe für ein einzelnes Teammitglied"
            ],
            correctAnswer: 1,
            explanation: "Ein Teamziel ist ein gemeinsames Ziel, auf das alle Teammitglieder zusammen hinarbeiten."
        },
        {
            question: "Wie kann man Erfolge im Team feiern?",
            answers: [
                "Gar nicht, man macht einfach weiter",
                "Nur der Teamleiter wird gelobt",
                "Gemeinsam den Erfolg anerkennen und wertschätzen",
                "Einen Wettbewerb daraus machen, wer am meisten beigetragen hat"
            ],
            correctAnswer: 2,
            explanation: "Erfolge sollten gemeinsam gefeiert werden, wobei die Beiträge aller anerkannt werden."
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
        },
        {
            question: "Was ist wichtig, wenn man in einem Team arbeitet?",
            answers: [
                "Immer Recht haben wollen",
                "Aufeinander hören und sich respektieren",
                "Nur die eigenen Ideen durchsetzen",
                "Andere kritisieren"
            ],
            correctAnswer: 1,
            explanation: "Respekt und Zuhören sind die Grundlagen für eine gute Teamarbeit."
        },
        {
            question: "Wie kann man zeigen, dass man ein guter Teamkamerad ist?",
            answers: [
                "Anderen bei Problemen helfen",
                "Immer der Beste sein wollen",
                "Nur mit den Stärkeren zusammenarbeiten",
                "Schwächere ausschließen"
            ],
            correctAnswer: 0,
            explanation: "Ein guter Teamkamerad hilft anderen und schließt niemanden aus."
        },
        {
            question: "Was bedeutet es, 'fair' im Team zu sein?",
            answers: [
                "Immer gewinnen wollen",
                "Nur die leichten Aufgaben übernehmen",
                "Alle gleich behandeln und gerecht sein",
                "Sich die besten Sachen aussuchen"
            ],
            correctAnswer: 2,
            explanation: "Fairness bedeutet, alle gleich zu behandeln und gerecht zu handeln."
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
            question: "Was ist ein 'kreativer Prozess'?",
            answers: [
                "Ein spezieller Drucker für Kunstwerke",
                "Eine Reihe von Schritten, um von einer Idee zu einem kreativen Ergebnis zu kommen",
                "Ein Computerprogramm für Künstler",
                "Eine besondere Art von Farbe"
            ],
            correctAnswer: 1,
            explanation: "Der kreative Prozess umfasst verschiedene Phasen wie Inspiration, Ideenfindung, Ausarbeitung und Umsetzung."
        },
        {
            question: "Was kann man tun, um kreativer zu werden?",
            answers: [
                "Immer das Gleiche machen",
                "Neue Dinge ausprobieren und experimentieren",
                "Nur kopieren, was andere machen",
                "Aufgeben, wenn es schwierig wird"
            ],
            correctAnswer: 1,
            explanation: "Kreativität wächst, wenn man neue Dinge ausprobiert und experimentiert."
        },
        {
            question: "Welche Grundfarben gibt es?",
            answers: [
                "Rot, Blau, Gelb",
                "Grün, Orange, Lila",
                "Schwarz, Weiß, Grau",
                "Rosa, Braun, Türkis"
            ],
            correctAnswer: 0,
            explanation: "Die drei Grundfarben sind Rot, Blau und Gelb. Aus ihnen können alle anderen Farben gemischt werden."
        },
        {
            question: "Was ist ein 'Entwurf' oder 'Sketch'?",
            answers: [
                "Ein fertiges Kunstwerk",
                "Eine erste schnelle Zeichnung einer Idee",
                "Ein teurer Pinsel",
                "Eine Art von Farbe"
            ],
            correctAnswer: 1,
            explanation: "Ein Entwurf oder Sketch ist eine erste schnelle Zeichnung, um eine Idee festzuhalten."
        },
        {
            question: "Welche Farben ergeben gemischt die Farbe Lila?",
            answers: [
                "Rot und Blau",
                "Blau und Gelb",
                "Rot und Gelb",
                "Grün und Rot"
            ],
            correctAnswer: 0,
            explanation: "Rot und Blau ergeben zusammen die Farbe Lila oder Violett."
        },
        {
            question: "Was ist eine 'Collage'?",
            answers: [
                "Eine spezielle Malerei mit Wasserfarben",
                "Ein Kunstwerk aus verschiedenen zusammengeklebten Materialien",
                "Eine Sammlung von Stiften",
                "Ein Musikstück"
            ],
            correctAnswer: 1,
            explanation: "Eine Collage ist ein Kunstwerk, bei dem verschiedene Materialien wie Papier, Fotos oder Stoffe zusammengeklebt werden."
        },
        {
            question: "Was bedeutet 'Inspiration'?",
            answers: [
                "Tief einatmen",
                "Eine plötzliche kreative Idee oder Anregung",
                "Sehr müde sein",
                "Eine Art von Krankheit"
            ],
            correctAnswer: 1,
            explanation: "Inspiration ist eine plötzliche kreative Idee oder Anregung, die zu neuen Gedanken oder Werken führt."
        },
        {
            question: "Welches dieser Werkzeuge wird beim Töpfern verwendet?",
            answers: [
                "Hammer",
                "Säge",
                "Töpferscheibe",
                "Bohrer"
            ],
            correctAnswer: 2,
            explanation: "Die Töpferscheibe ist ein wichtiges Werkzeug beim Töpfern, um Gefäße zu formen."
        },
        {
            question: "Was ist ein 'Skizzenbuch'?",
            answers: [
                "Ein Buch mit fertigen Zeichnungen zum Ausmalen",
                "Ein Notizbuch für schnelle Zeichnungen und Ideen",
                "Ein Buch über berühmte Künstler",
                "Ein Buch mit Anleitungen zum Zeichnen"
            ],
            correctAnswer: 1,
            explanation: "Ein Skizzenbuch ist ein Notizbuch, in dem man schnelle Zeichnungen, Ideen und Entwürfe festhalten kann."
        },
        {
            question: "Was ist 'Perspektive' in der Kunst?",
            answers: [
                "Eine besondere Farbe",
                "Die Darstellung von Tiefe und räumlichen Beziehungen auf einer flachen Oberfläche",
                "Ein spezieller Pinsel",
                "Eine Art von Skulptur"
            ],
            correctAnswer: 1,
            explanation: "Perspektive ist die Technik, dreidimensionale Objekte auf einer zweidimensionalen Fläche darzustellen."
        },
        {
            question: "Welche dieser Kunstrichtungen ist die älteste?",
            answers: [
                "Höhlenmalerei",
                "Pop-Art",
                "Impressionismus",
                "Kubismus"
            ],
            correctAnswer: 0,
            explanation: "Höhlenmalerei ist eine der ältesten Kunstformen der Menschheit, die bereits vor tausenden von Jahren praktiziert wurde."
        },
        {
            question: "Was ist ein 'Mosaik'?",
            answers: [
                "Eine Zeichnung mit Bleistift",
                "Ein Bild aus vielen kleinen farbigen Steinen oder Glasstücken",
                "Eine Skulptur aus Holz",
                "Eine spezielle Maltechnik mit Wasserfarben"
            ],
            correctAnswer: 1,
            explanation: "Ein Mosaik ist ein Bild oder Muster, das aus vielen kleinen farbigen Steinen, Glasstücken oder anderen Materialien zusammengesetzt ist."
        },
        {
            question: "Was ist 'Origami'?",
            answers: [
                "Eine japanische Kampfkunst",
                "Eine besondere Art von Sushi",
                "Die Kunst des Papierfaltens",
                "Eine traditionelle japanische Malerei"
            ],
            correctAnswer: 2,
            explanation: "Origami ist die japanische Kunst des Papierfaltens, bei der aus einem Blatt Papier Figuren gefaltet werden."
        },
        {
            question: "Was ist ein 'Stillleben' in der Malerei?",
            answers: [
                "Ein Bild von schlafenden Menschen",
                "Ein Bild von unbewegten Gegenständen wie Früchten, Blumen oder Vasen",
                "Ein Bild ohne Farben",
                "Ein Bild von einer leeren Landschaft"
            ],
            correctAnswer: 1,
            explanation: "Ein Stillleben ist ein Gemälde, das unbewegliche, leblose Gegenstände wie Früchte, Blumen oder Alltagsobjekte darstellt."
        },
        {
            question: "Welches Material wird für Aquarellmalerei verwendet?",
            answers: [
                "Ölfarben",
                "Wasserfarben",
                "Wachsmalstifte",
                "Tonerde"
            ],
            correctAnswer: 1,
            explanation: "Für Aquarellmalerei werden Wasserfarben verwendet, die mit Wasser verdünnt werden."
        },
        {
            question: "Was ist eine 'Skulptur'?",
            answers: [
                "Eine flache Zeichnung",
                "Ein dreidimensionales Kunstwerk",
                "Eine Art von Gemälde",
                "Ein digitales Kunstwerk"
            ],
            correctAnswer: 1,
            explanation: "Eine Skulptur ist ein dreidimensionales Kunstwerk, das durch Formen von Material wie Stein, Holz oder Metall entsteht."
        },
        {
            question: "Was bedeutet 'abstrakte Kunst'?",
            answers: [
                "Kunst, die sehr realistisch ist",
                "Kunst, die nicht versucht, die Realität genau abzubilden",
                "Kunst, die nur von Kindern gemacht wird",
                "Kunst, die nur in Museen zu sehen ist"
            ],
            correctAnswer: 1,
            explanation: "Abstrakte Kunst stellt die Realität nicht naturgetreu dar, sondern verwendet Formen, Farben und Linien, um Ideen oder Gefühle auszudrücken."
        },
        {
            question: "Was ist ein 'Portfolio' für Künstler?",
            answers: [
                "Ein spezieller Pinsel",
                "Eine Sammlung der besten Arbeiten eines Künstlers",
                "Ein Gemälde von einem Porträt",
                "Ein Kunstmuseum"
            ],
            correctAnswer: 1,
            explanation: "Ein Portfolio ist eine Sammlung der besten oder repräsentativsten Arbeiten eines Künstlers, die seine Fähigkeiten zeigt."
        },
        {
            question: "Was ist 'Schattenspiel'?",
            answers: [
                "Ein Brettspiel",
                "Eine Technik, um Schatten in Zeichnungen darzustellen",
                "Ein Theaterstück mit Schattenfiguren",
                "Ein Versteckspiel im Dunkeln"
            ],
            correctAnswer: 2,
            explanation: "Schattenspiel ist eine Theaterform, bei der Figuren hinter einer beleuchteten Leinwand bewegt werden, sodass nur ihre Schatten sichtbar sind."
        },
        {
            question: "Welches dieser Werkzeuge wird zum Schnitzen verwendet?",
            answers: [
                "Pinsel",
                "Schnitzmesser",
                "Hammer",
                "Schere"
            ],
            correctAnswer: 1,
            explanation: "Ein Schnitzmesser ist ein spezielles Werkzeug mit einer scharfen Klinge, das zum Schnitzen von Holz oder anderen Materialien verwendet wird."
        },
        {
            question: "Was ist eine 'Installation' in der Kunst?",
            answers: [
                "Das Aufhängen eines Bildes an der Wand",
                "Ein dreidimensionales Kunstwerk, das einen Raum gestaltet oder verändert",
                "Die Installation einer Software auf dem Computer",
                "Eine Anleitung zum Basteln"
            ],
            correctAnswer: 1,
            explanation: "Eine Installation ist ein räumliches Kunstwerk, das oft einen ganzen Raum einnimmt und verschiedene Materialien und Medien kombinieren kann."
        },
        {
            question: "Was ist ein 'Farbkreis'?",
            answers: [
                "Ein rundes Bild",
                "Eine kreisförmige Anordnung von Farben, die ihre Beziehungen zueinander zeigt",
                "Ein Kreis, der mit verschiedenen Farben gemalt wurde",
                "Ein Spielzeug für Kinder"
            ],
            correctAnswer: 1,
            explanation: "Ein Farbkreis ist eine kreisförmige Anordnung von Farben, die ihre Beziehungen zueinander (wie Primär-, Sekundär- und Komplementärfarben) zeigt."
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
            question: "Was ist ein 'Satellit'?",
            answers: [
                "Ein kleiner Planet",
                "Ein Objekt, das um einen Planeten kreist",
                "Ein Stern",
                "Ein Teleskop im Weltraum"
            ],
            correctAnswer: 1,
            explanation: "Ein Satellit ist ein Objekt, das um einen Planeten oder anderen Himmelskörper kreist, wie der Mond um die Erde."
        },
        {
            question: "Welches ist der längste Fluss der Welt?",
            answers: [
                "Amazonas",
                "Nil",
                "Mississippi",
                "Rhein"
            ],
            correctAnswer: 1,
            explanation: "Der Nil in Afrika ist mit etwa 6.650 Kilometern der längste Fluss der Welt."
        },
        {
            question: "Was ist ein 'Tablet'?",
            answers: [
                "Eine Medizin",
                "Ein tragbarer Computer mit Touchscreen",
                "Ein kleiner Tisch",
                "Ein elektronisches Buch"
            ],
            correctAnswer: 1,
            explanation: "Ein Tablet ist ein tragbarer Computer mit Touchscreen, der zwischen Smartphone und Laptop liegt."
        },
        {
            question: "Auf welchem Kontinent liegt Deutschland?",
            answers: [
                "Asien",
                "Afrika",
                "Europa",
                "Nordamerika"
            ],
            correctAnswer: 2,
            explanation: "Deutschland liegt in Mitteleuropa und ist Teil des europäischen Kontinents."
        },
        {
            question: "Was ist 'Künstliche Intelligenz'?",
            answers: [
                "Ein Roboter mit menschlichem Aussehen",
                "Computersysteme, die menschenähnliche Intelligenz zeigen können",
                "Ein sehr kluger Mensch",
                "Ein Computerspiel"
            ],
            correctAnswer: 1,
            explanation: "Künstliche Intelligenz bezeichnet Computersysteme, die Aufgaben ausführen können, die normalerweise menschliche Intelligenz erfordern."
        },
        {
            question: "Welches ist das kleinste Land der Welt?",
            answers: [
                "Monaco",
                "Liechtenstein",
                "Vatikanstadt",
                "San Marino"
            ],
            correctAnswer: 2,
            explanation: "Die Vatikanstadt ist mit nur etwa 0,44 Quadratkilometern das kleinste Land der Welt."
        },
        {
            question: "Was ist ein 'QR-Code'?",
            answers: [
                "Ein geheimer Code für Spione",
                "Ein zweidimensionaler Barcode, der Informationen enthält",
                "Ein Code für Computerspiele",
                "Eine neue Programmiersprache"
            ],
            correctAnswer: 1,
            explanation: "Ein QR-Code ist ein quadratischer Barcode, der Informationen wie Weblinks oder Texte speichern kann."
        },
        {
            question: "Welches dieser Tiere lebt in der Antarktis?",
            answers: [
                "Eisbär",
                "Pinguin",
                "Giraffe",
                "Känguru"
            ],
            correctAnswer: 1,
            explanation: "Pinguine leben in der Antarktis, während Eisbären nur in der Arktis (Nordpol) vorkommen."
        },
        {
            question: "Was ist 'Augmented Reality'?",
            answers: [
                "Eine Brille mit Vergrößerungsgläsern",
                "Eine Technologie, die digitale Inhalte in die reale Welt einblendet",
                "Ein neuer Kinofilm",
                "Eine Art von Fernglas"
            ],
            correctAnswer: 1,
            explanation: "Augmented Reality (erweiterte Realität) ist eine Technologie, die digitale Inhalte in die reale Umgebung einblendet."
        },
        {
            question: "Welche Sprache wird in Japan gesprochen?",
            answers: [
                "Chinesisch",
                "Koreanisch",
                "Japanisch",
                "Englisch"
            ],
            correctAnswer: 2,
            explanation: "In Japan wird hauptsächlich Japanisch gesprochen."
        },
        {
            question: "Was ist ein 'Blog'?",
            answers: [
                "Ein digitales Tagebuch oder eine Webseite mit regelmäßigen Einträgen",
                "Ein Fehler in einem Computerprogramm",
                "Ein kleines Buch",
                "Ein Spielzeug"
            ],
            correctAnswer: 0,
            explanation: "Ein Blog ist eine Webseite, auf der regelmäßig neue Beiträge veröffentlicht werden, ähnlich einem digitalen Tagebuch."
        },
        {
            question: "Welches ist das heißeste Land der Erde?",
            answers: [
                "Australien",
                "Brasilien",
                "Mali",
                "Libyen"
            ],
            correctAnswer: 3,
            explanation: "Libyen hat mit der höchsten jemals gemessenen Durchschnittstemperatur eines der heißesten Klimate der Erde."
        },
        {
            question: "Was ist 'Virtual Reality'?",
            answers: [
                "Ein Traum",
                "Eine computergenerierte Umgebung, in die man eintauchen kann",
                "Ein Fernsehprogramm",
                "Ein Fantasiebuch"
            ],
            correctAnswer: 1,
            explanation: "Virtual Reality ist eine computergenerierte Umgebung, in die Nutzer mit speziellen Brillen oder Headsets eintauchen können."
        },
        {
            question: "Welches Tier ist das Nationalsymbol von China?",
            answers: [
                "Drache",
                "Panda",
                "Tiger",
                "Adler"
            ],
            correctAnswer: 1,
            explanation: "Der Große Panda ist ein Nationalsymbol Chinas und wird weltweit mit dem Land assoziiert."
        },
        {
            question: "Was ist ein 'Podcast'?",
            answers: [
                "Eine kleine Tasche",
                "Eine digitale Audiodatei, die man herunterladen und anhören kann",
                "Ein kleiner Computer",
                "Ein Gerät zum Musikhören"
            ],
            correctAnswer: 1,
            explanation: "Ein Podcast ist eine Serie von digitalen Audiodateien, die man abonnieren, herunterladen und anhören kann."
        },
        {
            question: "Welches ist der größte Ozean der Welt?",
            answers: [
                "Atlantischer Ozean",
                "Indischer Ozean",
                "Pazifischer Ozean",
                "Arktischer Ozean"
            ],
            correctAnswer: 2,
            explanation: "Der Pazifische Ozean ist mit etwa 166 Millionen Quadratkilometern der größte und tiefste Ozean der Erde."
        },
        {
            question: "Was ist 'Cloud Computing'?",
            answers: [
                "Das Berechnen von Wolkenformen",
                "Die Nutzung von Computerdiensten über das Internet",
                "Ein Computerspiel über Wolken",
                "Das Vorhersagen des Wetters"
            ],
            correctAnswer: 1,
            explanation: "Cloud Computing bezeichnet die Bereitstellung von Computerdiensten wie Speicher oder Software über das Internet."
        },
        {
            question: "Welches Land hat die meisten Einwohner in Europa?",
            answers: [
                "Deutschland",
                "Frankreich",
                "Russland",
                "Großbritannien"
            ],
            correctAnswer: 2,
            explanation: "Russland ist das bevölkerungsreichste Land Europas, obwohl ein Teil des Landes in Asien liegt."
        },
        {
            question: "Was ist ein 'Emoji'?",
            answers: [
                "Ein kleines Bild, das Gefühle oder Ideen darstellt",
                "Eine japanische Comicfigur",
                "Ein elektronisches Spielzeug",
                "Eine Art von Handy"
            ],
            correctAnswer: 0,
            explanation: "Emojis sind kleine digitale Bilder oder Symbole, die verwendet werden, um Gefühle, Ideen oder Objekte darzustellen."
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
            question: "Was ist 'Zivilcourage'?",
            answers: [
                "Eine besondere Schuluniform",
                "Mut, für andere einzustehen und bei Unrecht einzugreifen",
                "Eine Sportart",
                "Ein Feiertag"
            ],
            correctAnswer: 1,
            explanation: "Zivilcourage bedeutet, Mut zu zeigen und für andere einzustehen, wenn ihnen Unrecht geschieht."
        },
        {
            question: "Was bedeutet 'Diversität'?",
            answers: [
                "Wenn alle gleich sind",
                "Vielfalt und Unterschiedlichkeit in einer Gruppe",
                "Eine Sportart",
                "Ein besonderes Fest"
            ],
            correctAnswer: 1,
            explanation: "Diversität bedeutet Vielfalt und bezieht sich auf die Unterschiedlichkeit von Menschen in einer Gruppe."
        },
        {
            question: "Warum ist es wichtig, anderen zuzuhören?",
            answers: [
                "Es ist nicht wichtig",
                "Damit man später mitreden kann",
                "Um andere Menschen und ihre Perspektiven zu verstehen",
                "Weil es höflich ist"
            ],
            correctAnswer: 2,
            explanation: "Zuhören hilft uns, andere Menschen und ihre Perspektiven zu verstehen und zu respektieren."
        },
        {
            question: "Was ist ein 'Vorurteil'?",
            answers: [
                "Eine Meinung über jemanden, bevor man ihn kennengelernt hat",
                "Ein besonders gutes Urteil",
                "Eine Gerichtsverhandlung",
                "Ein Kompliment"
            ],
            correctAnswer: 0,
            explanation: "Ein Vorurteil ist eine vorgefasste Meinung über eine Person oder Gruppe, ohne sie wirklich zu kennen."
        },
        {
            question: "Was kann man tun, wenn man sieht, dass jemand unfair behandelt wird?",
            answers: [
                "Wegsehen, es ist nicht mein Problem",
                "Mitmachen, um nicht selbst unfair behandelt zu werden",
                "Eingreifen und der Person helfen",
                "Darüber lachen"
            ],
            correctAnswer: 2,
            explanation: "Wenn jemand unfair behandelt wird, sollte man eingreifen und der Person helfen oder Unterstützung holen."
        },
        {
            question: "Was bedeutet es, 'offen für Neues' zu sein?",
            answers: [
                "Immer die Tür offen zu lassen",
                "Bereit sein, neue Dinge, Menschen und Ideen kennenzulernen",
                "Viele Geschenke zu bekommen",
                "Immer draußen zu spielen"
            ],
            correctAnswer: 1,
            explanation: "Offen für Neues zu sein bedeutet, bereit zu sein, neue Erfahrungen zu machen und verschiedene Menschen und Ideen kennenzulernen."
        },
        {
            question: "Warum ist es wichtig, 'Nein' sagen zu können?",
            answers: [
                "Um immer seinen Willen durchzusetzen",
                "Es ist nicht wichtig",
                "Um seine eigenen Grenzen zu schützen",
                "Um andere zu ärgern"
            ],
            correctAnswer: 2,
            explanation: "'Nein' sagen zu können ist wichtig, um die eigenen Grenzen zu schützen und selbstbestimmt zu handeln."
        },
        {
            question: "Was ist 'Diskriminierung'?",
            answers: [
                "Eine besondere Auszeichnung",
                "Die ungerechte Behandlung von Menschen aufgrund bestimmter Merkmale",
                "Eine Sportart",
                "Ein Spiel"
            ],
            correctAnswer: 1,
            explanation: "Diskriminierung ist die ungerechte Behandlung von Menschen aufgrund von Merkmalen wie Herkunft, Geschlecht oder Religion."
        },
        {
            question: "Was bedeutet 'Kompromiss'?",
            answers: [
                "Wenn einer immer gewinnt",
                "Eine Einigung, bei der beide Seiten etwas nachgeben",
                "Ein besonderes Geschenk",
                "Wenn man immer nachgibt"
            ],
            correctAnswer: 1,
            explanation: "Ein Kompromiss ist eine Lösung, bei der beide Seiten etwas nachgeben, um zu einer gemeinsamen Einigung zu kommen."
        },
        {
            question: "Warum ist es wichtig, sich für andere einzusetzen?",
            answers: [
                "Es ist nicht wichtig",
                "Damit man beliebt ist",
                "Um eine gerechte und unterstützende Gemeinschaft zu schaffen",
                "Um Belohnungen zu bekommen"
            ],
            correctAnswer: 2,
            explanation: "Sich für andere einzusetzen hilft, eine gerechte und unterstützende Gemeinschaft zu schaffen, in der alle respektiert werden."
        },
        {
            question: "Was bedeutet 'Solidarität'?",
            answers: [
                "Alleine zu sein",
                "Zusammenhalt und gegenseitige Unterstützung in einer Gruppe",
                "Ein besonderes Fest",
                "Eine Sportart"
            ],
            correctAnswer: 1,
            explanation: "Solidarität bedeutet Zusammenhalt und gegenseitige Unterstützung innerhalb einer Gruppe oder Gemeinschaft."
        },
        {
            question: "Was kann man tun, um neue Kulturen kennenzulernen?",
            answers: [
                "Nichts, das ist nicht interessant",
                "Bücher lesen, Menschen treffen, Essen probieren und Feste feiern",
                "Nur im Urlaub",
                "Fernsehen schauen"
            ],
            correctAnswer: 1,
            explanation: "Man kann neue Kulturen kennenlernen, indem man Bücher liest, Menschen aus anderen Kulturen trifft, verschiedenes Essen probiert und an kulturellen Festen teilnimmt."
        },
        {
            question: "Was ist 'Gleichberechtigung'?",
            answers: [
                "Wenn alle immer das Gleiche bekommen",
                "Wenn alle die gleichen Rechte und Chancen haben",
                "Wenn alle gleich aussehen",
                "Wenn alle gleich denken"
            ],
            correctAnswer: 1,
            explanation: "Gleichberechtigung bedeutet, dass alle Menschen die gleichen Rechte und Chancen haben, unabhängig von ihren Unterschieden."
        },
        {
            question: "Warum ist es wichtig, Konflikte friedlich zu lösen?",
            answers: [
                "Es ist nicht wichtig",
                "Damit man nicht bestraft wird",
                "Um Beziehungen zu erhalten und gemeinsam Lösungen zu finden",
                "Um immer zu gewinnen"
            ],
            correctAnswer: 2,
            explanation: "Friedliche Konfliktlösung hilft, Beziehungen zu erhalten und gemeinsam Lösungen zu finden, die für alle akzeptabel sind."
        },
        {
            question: "Was bedeutet 'Mitgefühl'?",
            answers: [
                "Wenn man mit jemandem zusammen fühlt",
                "Die Fähigkeit, die Gefühle anderer zu verstehen und Anteil zu nehmen",
                "Wenn man immer traurig ist",
                "Wenn man seine Gefühle versteckt"
            ],
            correctAnswer: 1,
            explanation: "Mitgefühl ist die Fähigkeit, die Gefühle anderer zu verstehen und Anteil an ihrem Leid oder ihrer Freude zu nehmen."
        },
        {
            question: "Was kann man tun, um ein guter Zuhörer zu sein?",
            answers: [
                "Immer unterbrechen und die eigene Meinung sagen",
                "Aufmerksam sein, Blickkontakt halten und nachfragen",
                "Nebenbei etwas anderes machen",
                "So tun, als würde man zuhören"
            ],
            correctAnswer: 1,
            explanation: "Ein guter Zuhörer ist aufmerksam, hält Blickkontakt, unterbricht nicht und stellt Fragen, um das Gesagte besser zu verstehen."
        },
        {
            question: "Was ist 'Teamwork'?",
            answers: [
                "Wenn einer die ganze Arbeit macht",
                "Zusammenarbeit, bei der alle zum gemeinsamen Ziel beitragen",
                "Ein Computerspiel",
                "Wenn man alleine arbeitet"
            ],
            correctAnswer: 1,
            explanation: "Teamwork bedeutet, dass alle zusammenarbeiten und ihre Stärken einbringen, um ein gemeinsames Ziel zu erreichen."
        },
        {
            question: "Warum ist es wichtig, 'Danke' zu sagen?",
            answers: [
                "Es ist nicht wichtig",
                "Weil es eine Regel ist",
                "Um Wertschätzung und Dankbarkeit auszudrücken",
                "Damit man mehr Geschenke bekommt"
            ],
            correctAnswer: 2,
            explanation: "'Danke' zu sagen drückt Wertschätzung und Dankbarkeit aus und stärkt positive Beziehungen."
        },
        {
            question: "Was bedeutet 'Verantwortung'?",
            answers: [
                "Wenn man für etwas oder jemanden sorgt und die Folgen seiner Handlungen trägt",
                "Wenn man immer bestraft wird",
                "Wenn man keine Freiheit hat",
                "Wenn man tun kann, was man will"
            ],
            correctAnswer: 0,
            explanation: "Verantwortung bedeutet, für etwas oder jemanden zu sorgen und die Folgen der eigenen Handlungen zu tragen."
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
};module.exports = quizQuestions;
