export const translations = {
    en: {
        nav: {
            about: "About",
            manifesto: "Manifesto",
            work: "Work",
            contact: "Contact"
        },
        hero: {
            title: "Eptesicus Laboratories",
            subtitle: "Advancing On-device intelligence",
            body: "We build a governance and evaluation runtime that makes on-device AI deployments more auditable and cost-predictable, starting with Lumis-1 as the first packaged product.",
            pills: ["Reduces cloud API spend", "Enterprise licensing", "OEM/ISV partnerships"],
            cta: {
                primary: "Request Pitch Deck",
                secondary: "Join Pilot Program"
            }
        },
        about: {
            label: "ABOUT",
            headline: "Our objective is to make on-device AI the default for real products.",
            intro1: "Cloud AI is easy to start with, but expensive and restrictive to scale. On-device deployment gives teams control over cost, privacy, and availability, but only works when models are efficient and behavior is reliable.",
            intro2: "We develop small language models optimized for strong performance per compute and pair them with reliability engineering so enterprises can ship on-device intelligence with confidence.",
            problemLabel: "The Problem",
            problemBody: "Cloud-first AI creates compounding costs, vendor lock-in, and data exposure. Meanwhile, many small models still struggle with consistency and safe failure modes, which blocks serious deployment.",
            solutionLabel: "Our Solution",
            approachLabel: "Our Approach",
            approachTagline: "We build for shipping, not demos.",
            grid: [
                { title: "Model R&D", desc: "improve capability per compute in small language models (measured against public baselines and internal evals)." },
                { title: "Reliability infrastructure", desc: "datasets + evaluation harnesses that catch regressions and quantify improvements." },
                { title: "Deployment pathways", desc: "packaging, controls, and integration patterns that work for enterprise and OEM/ISV distribution." }
            ],
            visionLabel: "Vision",
            visionBody: "A world where AI runs primarily on customer-controlled hardware, with small models that are both capable and dependable. Eptesicus Laboratories will build a portfolio of on-device models and reliability tooling that can be licensed, bundled, and supported at scale, while also releasing community-facing applications that prove the on-device experience can feel top-tier.",
            leadershipQuote: "“We’re building the foundation for on-device AI to scale commercially: efficient small models, reliability you can measure, and distribution through enterprise licensing and OEM/ISV partnerships.”",
            roles: {
                deyan: "Founder & Operator",
                iliyan: "Co-Founder & CTO"
            }
        },
        validator: {
            label: "THE RELIABILITY LAYER",
            headline: "Deterministic control over probabilistic output.",
            description: "Our runtime wraps the core model with a deterministic Validator Council. Every output is checked against safety, factual, and structural policies before it reaches the user.",
            steps: [
                { id: "draft", title: "Draft", desc: "The core model generates a candidate response based on the input context." },
                { id: "validate", title: "Validate", desc: "The Validator Council executes parallel checks for safety, schema compliance, and logic." },
                { id: "correct", title: "Correct", desc: "If a check fails, the steering loop triggers a regeneration with specific constraints." },
                { id: "output", title: "Output", desc: "Only verified, compliant content is released to the downstream application." }
            ]
        },
        useCases: {
            label: "USE CASES",
            headline: "High-value deployment environments.",
            cases: [
                { icon: "legal", title: "LegalTech", desc: "Automated contract review within strict data residency boundaries. No client data ever leaves the secure enclave." },
                { icon: "health", title: "Healthcare", desc: "Clinical note structuring and patient data processing on hospital hardware, ensuring HIPAA compliance and zero latency." },
                { icon: "industrial", title: "Industrial", desc: "Offline maintenance assistants for field technicians. Technical manuals and diagnostic AI available without internet connectivity." }
            ]
        },
        economics: {
            label: "THE ECONOMICS",
            headline: "Predictable costs at any scale.",
            cloudTitle: "Cloud AI",
            cloudDesc: "Costs scale linearly with usage. High per-token fees, unpredictable monthly bills, and data transfer charges punish growth.",
            onDeviceTitle: "On-Device",
            onDeviceDesc: "Leverage existing hardware with zero marginal cost per token. Flat licensing puts you in control of your margins."
        },
        technology: {
            header: "Technology",
            subheader: "Raising €50,000 to build reliability datasets and acceptance tests, harden the runtime and trace artifacts, and deliver a pilot-ready Lumis-1 package.",
            lumis: {
                name: "Lumis-1",
                status: "[IN DEVELOPMENT]",
                desc: "Our first packaged product: an on-device assistant with a lightweight Validator Council (Safety, Consistency, Accuracy/Support) and a bounded steering loop. Proves the platform thesis and provides a concrete product for early enterprise pilots.",
                pitchDeck: "Request Pitch Deck",
                businessPlan: "View Business Plan",
                specsLabel: "SYS.SPEC",
                specs: [
                    "On-device",
                    "Offline-capable",
                    "Reliability layer"
                ]
            }
        },
        team: {
            back: "Back to Team",
            narrative: "Operational Narrative",
            stack: "Technical Capability Stack"
        },
        footer: {
            legal: "Eptesicus Laboratories is a brand operated by Deyan Todorov and Iliyan Bozhanov. Incorporation pending. All agreements are currently entered into by the founders directly.",
            rights: "All rights reserved.",
            x_twitter: "X (Twitter)",
            instagram: "Instagram",
            contact: "Contact"
        }
    },
    de: {
        nav: {
            about: "Über Uns",
            manifesto: "Manifest",
            work: "Arbeit",
            contact: "Kontakt"
        },
        hero: {
            title: "Eptesicus Laboratories",
            subtitle: "Lokale KI mit vorhersehbaren Stückkosten.",
            body: "Wir entwickeln leistungsstarke kleine Sprachmodelle und die Zuverlässigkeitsinfrastruktur für den Einsatz auf kundeneigener Hardware, um die Abhängigkeit von Cloud-APIs zu reduzieren.",
            pills: ["Reduziert Cloud-API-Kosten", "Enterprise-Lizenzierung", "OEM/ISV-Partnerschaften"]
        },
        about: {
            label: "ÜBER UNS",
            headline: "Unser Ziel ist es, lokale KI zum Standard für reale Produkte zu machen.",
            intro1: "Cloud-KI ist einfach zu beginnen, aber teuer und restriktiv zu skalieren. Lokale Bereitstellung gibt Teams Kontrolle über Kosten, Privatsphäre und Verfügbarkeit, funktioniert aber nur, wenn Modelle effizient und zuverlässig sind.",
            intro2: "Wir entwickeln kleine Sprachmodelle, die für starke Leistung pro Recheneinheit optimiert sind, und kombinieren sie mit Zuverlässigkeits-Engineering, damit Unternehmen lokale Intelligenz mit Vertrauen ausliefern können.",
            problemLabel: "Das Problem",
            problemBody: "Cloud-First-KI verursacht steigende Kosten, Herstellerbindung und Datenexponierung. Viele kleine Modelle kämpfen noch mit Konsistenz und sicheren Fehlermodi, was ernsthafte Einsätze blockiert.",
            solutionLabel: "Unsere Lösung",
            approachLabel: "Unser Ansatz",
            approachTagline: "Wir bauen für den Einsatz, nicht für Demos.",
            grid: [
                { title: "Modell-F&E", desc: "Verbesserung der Fähigkeit pro Recheneinheit in kleinen Sprachmodellen (gemessen an öffentlichen Baselines und internen Evals)." },
                { title: "Zuverlässigkeitsinfrastruktur", desc: "Datensätze + Evaluierungs-Harnische, die Regressionen erfassen und Verbesserungen quantifizieren." },
                { title: "Bereitstellungswege", desc: "Verpackung, Kontrollen und Integrationsmuster, die für Enterprise- und OEM/ISV-Vertrieb funktionieren." }
            ],
            visionLabel: "Vision",
            visionBody: "Eine Welt, in der KI primär auf kundeneigener Hardware läuft, mit kleinen Modellen, die sowohl fähig als auch zuverlässig sind. Eptesicus Laboratories wird ein Portfolio von lokalen Modellen und Zuverlässigkeits-Tools aufbauen, die lizenziert, gebündelt und skaliert unterstützt werden können, während wir auch Community-Anwendungen veröffentlichen, die beweisen, dass sich die lokale Erfahrung erstklassig anfühlen kann.",
            leadershipQuote: "“Wir bauen das Fundament für die kommerzielle Skalierung von lokaler KI: effiziente kleine Modelle, messbare Zuverlässigkeit und Vertrieb durch Enterprise-Lizenzierung und OEM/ISV-Partnerschaften.”",
            roles: {
                deyan: "Gründer & Betreiber",
                iliyan: "Mitgründer & CTO"
            }
        },
        work: {
            header: "Aktive Direktiven",
            subheader: "Derzeit auf der Suche nach Pre-Seed-Finanzierung zur Erweiterung von Zuverlässigkeitsdatensätzen, Sicherung früher Enterprise-Piloten zur Senkung von API-Kosten und Vertiefung von OEM/ISV-Partnerschaften.",
            lumis: {
                name: "Lumis-1",
                status: "[IN ENTWICKLUNG]",
                desc: "Unser erstes kommerzielles Produkt: ein lokaler Assistent, entworfen um den Business Case für lokale Bereitstellung (Kostenkontrolle, Privatsphäre, Verfügbarkeit) zu validieren und weitere F&E zu finanzieren.",
                pitchDeck: "Pitch Deck (PDF)",
                businessPlan: "Businessplan (PDF)",
                specsLabel: "SYS.SPEZ",
                specs: [
                    "Lokal (On-device)",
                    "Offline-fähig",
                    "Zuverlässigkeitsschicht"
                ]
            }
        },
        team: {
            back: "Zurück zum Team",
            narrative: "Operatives Narrativ",
            stack: "Technischer Fähigkeits-Stack"
        },
        footer: {
            legal: "Eptesicus Laboratories ist eine Marke von Deyan Todorov und Iliyan Bozhanov. Eptesicus Laboratories ist keine eingetragene juristische Person. Alle Verträge werden von Deyan Todorov und Iliyan Bozhanov geschlossen.",
            rights: "Alle Rechte vorbehalten.",
            x_twitter: "X (Twitter)",
            instagram: "Instagram",
            contact: "Kontakt"
        }
    },
    bg: {
        nav: {
            about: "За Нас",
            manifesto: "Манифест",
            work: "Дейност",
            contact: "Контакт"
        },
        hero: {
            title: "Eptesicus Laboratories",
            subtitle: "On-device AI с предвидима икономическа ефективност.",
            body: "Изграждаме среда за управление и оценка, която прави внедряването на on-device AI по-проследимо и разходно предсказуемо, като започваме с Lumis-1 като първи пакетиран продукт.",
            pills: ["Намалява разходите за Cloud API", "Enterprise лицензиране", "OEM/ISV партньорства"]
        },
        about: {
            label: "ЗА НАС",
            headline: "Нашата цел е да направим on-device AI стандарт за реални продукти.",
            intro1: "Cloud AI е лесен за стартиране, но скъп и ограничаващ за мащабиране. On-device внедряването дава на екипите контрол върху разходите, поверителността и наличността, но работи само когато моделите са ефективни и надеждни.",
            intro2: "Разработваме малки езикови модели, оптимизирани за висока производителност, и ги съчетаваме с инженеринг за надеждност, така че предприятията да могат да внедряват on-device интелект с увереност.",
            problemLabel: "Проблемът",
            problemBody: "Cloud-first AI създава нарастващи разходи, зависимост от доставчика и излагане на данни. Междувременно много малки модели все още се борят с последователността и безопасните режими на отказ, което блокира сериозното внедряване.",
            solutionLabel: "Нашето Решение",
            approachLabel: "Нашият Подход",
            approachTagline: "Строим за доставка, не за демо.",
            grid: [
                { title: "Model R&D", desc: "подобряване на способността на малки езикови модели (измерено спрямо публични базови линии и вътрешни evals)." },
                { title: "Инфраструктура за надеждност", desc: "набори от данни + инструменти за оценка, които улавят регресии и количествено определят подобренията." },
                { title: "Пътища за внедряване", desc: "пакетиране, контроли и интеграционни модели, които работят за enterprise и OEM/ISV разпространение." }
            ],
            visionLabel: "Визия",
            visionBody: "Свят, в който AI работи предимно на хардуер, контролиран от клиента, с малки модели, които са както способни, така и надеждни. Eptesicus Laboratories ще изгради портфолио от on-device модели и инструменти за надеждност.",
            leadershipQuote: "„Изграждаме основата за търговско мащабиране на on-device AI: ефективни малки модели, измерима надеждност и разпространение чрез enterprise лицензиране.“",
            roles: {
                deyan: "Основател & Оператор",
                iliyan: "Съосновател & CTO"
            }
        },
        work: {
            header: "Активни Директиви",
            subheader: "Набираме €50,000 за изграждане на datasets за надеждност и приемни тестове, укрепване на средата за изпълнение и доставка на Lumis-1 готова за пилот.",
            lumis: {
                name: "Lumis-1",
                status: "[В РАЗРАБОТКА]",
                desc: "Нашият първи пакетиран продукт: on-device асистент с олекотен Validator Council (Safety, Consistency, Accuracy/Support) и ограничен steering loop.",
                pitchDeck: "Pitch Deck (PDF)",
                businessPlan: "Бизнес План (PDF)",
                specsLabel: "SYS.SPEC",
                specs: [
                    "On-device",
                    "Офлайн",
                    "Слой за надеждност"
                ]
            }
        },
        team: {
            back: "Назад към екипа",
            narrative: "Оперативен Наратив",
            stack: "Технически Stack"
        },
        footer: {
            legal: "Eptesicus Laboratories е марка, управлявана от Деян Тодоров и Илиян Божанов. Eptesicus Laboratories не е регистрирано юридическо лице. Всички договори се сключват от Деян Тодоров и Илиян Божанов.",
            rights: "Всички права запазени.",
            x_twitter: "X (Twitter)",
            instagram: "Instagram",
            contact: "Контакт"
        }
    },
    el: {
        nav: {
            about: "Σχετικά",
            manifesto: "Μανιφέστο",
            work: "Έργα",
            contact: "Επικοινωνία"
        },
        hero: {
            title: "Eptesicus Laboratories",
            subtitle: "On-device AI με προβλέψιμη οικονομία μονάδας.",
            body: "Κατασκευάζουμε περιβάλλον διακυβέρνησης και αξιολόγησης που καθιστά τις εγκαταστάσεις on-device AI πιο ελέγξιμες και οικονομικά προβλέψιμες, ξεκινώντας με το Lumis-1 ως το πρώτο πακεταρισμένο προϊόν.",
            pills: ["Μειώνει το κόστος Cloud API", "Enterprise αδειοδότηση", "OEM/ISV συνεργασίες"]
        },
        about: {
            label: "ΣΧΕΤΙΚΑ",
            headline: "Στόχος μας είναι να κάνουμε το on-device AI το πρότυπο για πραγματικά προϊόντα.",
            intro1: "Το Cloud AI είναι εύκολο για να ξεκινήσεις, αλλά ακριβό και περιοριστικό στην κλιμάκωση. Η on-device εγκατάσταση δίνει στις ομάδες έλεγχο στο κόστος, την ιδιωτικότητα και τη διαθεσιμότητα, αλλά λειτουργεί μόνο όταν τα μοντέλα είναι αποδοτικά και αξιόπιστα.",
            intro2: "Αναπτύσσουμε μικρά γλωσσικά μοντέλα βελτιστοποιημένα για υψηλή απόδοση και τα συνδυάζουμε με μηχανική αξιοπιστίας ώστε οι επιχειρήσεις να μπορούν να εγκαταστήσουν on-device νοημοσύνη με εμπιστοσύνη.",
            problemLabel: "Το Πρόβλημα",
            problemBody: "Το Cloud-first AI δημιουργεί αυξανόμενα κόστη, εξάρτηση από προμηθευτή και έκθεση δεδομένων. Πολλά μικρά μοντέλα εξακολουθούν να δυσκολεύονται με τη συνέπεια και τις ασφαλείς λειτουργίες αποτυχίας, που μπλοκάρουν τη σοβαρή εγκατάσταση.",
            solutionLabel: "Η Λύση μας",
            approachLabel: "Η Προσέγγισή μας",
            approachTagline: "Χτίζουμε για παράδοση, όχι για demos.",
            grid: [
                { title: "Model R&D", desc: "βελτίωση της ικανότητας ανά υπολογισμό σε μικρά γλωσσικά μοντέλα (μετρημένη έναντι δημόσιων baselines και εσωτερικών evals)." },
                { title: "Υποδομή αξιοπιστίας", desc: "datasets + εργαλεία αξιολόγησης που εντοπίζουν παλινδρομήσεις και ποσοτικοποιούν βελτιώσεις." },
                { title: "Διαδρομές εγκατάστασης", desc: "πακετάρισμα, έλεγχοι και μοτίβα ενσωμάτωσης που λειτουργούν για enterprise και OEM/ISV διανομή." }
            ],
            visionLabel: "Όραμα",
            visionBody: "Ένας κόσμος όπου η AI τρέχει κυρίως σε hardware ελεγχόμενο από τον πελάτη, με μικρά μοντέλα που είναι τόσο ικανά όσο και αξιόπιστα. Η Eptesicus Laboratories θα χτίσει ένα χαρτοφυλάκιο on-device μοντέλων και εργαλείων αξιοπιστίας.",
            leadershipQuote: "«Χτίζουμε τα θεμέλια για την εμπορική κλιμάκωση του on-device AI: αποδοτικά μικρά μοντέλα, μετρήσιμη αξιοπιστία και διανομή μέσω enterprise αδειοδότησης.»",
            roles: {
                deyan: "Ιδρυτής & Διαχειριστής",
                iliyan: "Συνιδρυτής & CTO"
            }
        },
        work: {
            header: "Ενεργές Οδηγίες",
            subheader: "Συγκεντρώνουμε €50.000 για δημιουργία datasets αξιοπιστίας και δοκιμών αποδοχής, ενίσχυση του runtime και παράδοση Lumis-1 έτοιμου για pilot.",
            lumis: {
                name: "Lumis-1",
                status: "[ΣΕ ΑΝΑΠΤΥΞΗ]",
                desc: "Το πρώτο μας πακεταρισμένο προϊόν: on-device βοηθός με ελαφρύ Validator Council (Safety, Consistency, Accuracy/Support) και περιορισμένο steering loop.",
                pitchDeck: "Pitch Deck (PDF)",
                businessPlan: "Επιχειρηματικό Πλάνο (PDF)",
                specsLabel: "SYS.SPEC",
                specs: [
                    "On-device",
                    "Offline",
                    "Επίπεδο αξιοπιστίας"
                ]
            }
        },
        team: {
            back: "Πίσω στην ομάδα",
            narrative: "Λειτουργική Αφήγηση",
            stack: "Τεχνικό Stack"
        },
        footer: {
            legal: "Η Eptesicus Laboratories είναι εμπορική επωνυμία που λειτουργεί από τους Deyan Todorov και Iliyan Bozhanov. Η Eptesicus Laboratories δεν είναι εγγεγραμμένη νομική οντότητα. Όλες οι συμβάσεις συνάπτονται από τους Deyan Todorov και Iliyan Bozhanov.",
            rights: "Με επιφύλαξη παντός δικαιώματος.",
            x_twitter: "X (Twitter)",
            instagram: "Instagram",
            contact: "Επικοινωνία"
        }
    },
    it: {
        nav: {
            about: "Chi Siamo",
            manifesto: "Manifesto",
            work: "Lavori",
            contact: "Contatti"
        },
        hero: {
            title: "Eptesicus Laboratories",
            subtitle: "IA on-device con unit economics prevedibili.",
            body: "Costruiamo piccoli modelli linguistici ad alte prestazioni e l'infrastruttura di affidabilità per distribuirli su hardware controllato dal cliente, riducendo la dipendenza dalle API cloud.",
            pills: ["Riduzione costi API Cloud", "Licenze Enterprise", "Partnership OEM/ISV"]
        },
        about: {
            label: "CHI SIAMO",
            headline: "Il nostro obiettivo è rendere l'IA on-device lo standard per i prodotti reali.",
            intro1: "L'IA in Cloud è facile all'inizio, ma costosa e restrittiva da scalare. Il deployment locale offre controllo su costi, privacy e disponibilità, ma funziona solo se i modelli sono efficienti e affidabili.",
            intro2: "Sviluppiamo piccoli modelli ottimizzati per performance e li abbiniamo a ingegneria dell'affidabilità affinché le aziende possano distribuire intelligenza locale con fiducia.",
            problemLabel: "Il Problema",
            problemBody: "L'IA Cloud-first crea costi crescenti, vendor lock-in ed esposizione dei dati. Molti piccoli modelli faticano ancora con la coerenza, bloccando il deployment serio.",
            solutionLabel: "La Nostra Soluzione",
            approachLabel: "Il Nostro Approccio",
            approachTagline: "Costruiamo per spedire, non per demo.",
            grid: [
                { title: "R&D Modelli", desc: "migliorare la capacità per calcolo nei piccoli modelli linguistici (misurata rispetto a baseline pubbliche)." },
                { title: "Infrastruttura di affidabilità", desc: "dataset + strumenti di valutazione che catturano regressioni e quantificano miglioramenti." },
                { title: "Percorsi di deployment", desc: "pacchettizzazione, controlli e pattern di integrazione per distribuzione Enterprise e OEM/ISV." }
            ],
            visionLabel: "Visione",
            visionBody: "Un mondo in cui l'IA gira principalmente su hardware controllato dal cliente. Eptesicus Laboratories costruirà un portafoglio di modelli on-device e strumenti di affidabilità.",
            leadershipQuote: "“Stiamo costruendo le fondamenta per scalare commercialmente l'IA on-device: modelli efficienti, affidabilità misurabile e distribuzione tramite licenze Enterprise.”",
            roles: {
                deyan: "Fondatore & Operatore",
                iliyan: "Co-Fondatore & CTO"
            }
        },
        work: {
            header: "Direttive Attive",
            subheader: "Attualmente alla ricerca di finanziamenti pre-seed per espandere dataset di affidabilità, assicurare pilot aziendali e approfondire partnership OEM/ISV.",
            lumis: {
                name: "Lumis-1",
                status: "[IN SVILUPPO]",
                desc: "Il nostro primo prodotto commerciale: un assistente on-device progettato per validare il business case del deployment locale.",
                pitchDeck: "Pitch Deck (PDF)",
                businessPlan: "Business Plan (PDF)",
                specsLabel: "SYS.SPEC",
                specs: [
                    "On-device",
                    "Offline-capable",
                    "Livello di affidabilità"
                ]
            }
        },
        team: {
            back: "Torna al Team",
            narrative: "Narrativa Operativa",
            stack: "Stack di Capacità Tecniche"
        },
        footer: {
            legal: "Eptesicus Laboratories è un marchio operato da Deyan Todorov e Iliyan Bozhanov. Eptesicus Laboratories non è un'entità legale registrata. Tutti i contratti sono stipulati da Deyan Todorov e Iliyan Bozhanov.",
            rights: "Tutti i diritti riservati.",
            x_twitter: "X (Twitter)",
            instagram: "Instagram",
            contact: "Contatti"
        }
    }
};
