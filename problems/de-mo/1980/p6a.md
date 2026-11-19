---
tag: 387VJW8TF0
kind: problem
appearances:
  - at: de-mo/1980/p6a
    primary: true
canonical:
  statement: S2
  rule: curated
statements:
  - id: S1
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 19. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/19124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 19. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/19124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
    extraction: vision/claude@2.1.325 (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
Eine Folge $\{x_k\}$ reeller Zahlen heiße genau dann $C$-konvergent gegen eine reelle Zahl $z$, wenn

$$\lim_{n \to \infty} \left( \frac{1}{n} \sum_{k=1}^{n} x_k \right) = z \quad \text{gilt.}$$

Eine Funktion $f$ heiße genau dann $C$-stetig an der Stelle $a$ ihres Definitionsbereiches, wenn für jede Folge $\{x_k\}$, die $C$-konvergent gegen $a$ ist und deren sämtliche Glieder $x_k$ im Definitionsbereich von $f$ liegen, die Folge $\{f(x_k)\}$ stets $C$-konvergent gegen $f(a)$ ist.

Man zeige:

a) Sind $A$, $B$ und $a$ beliebige reelle Zahlen, so gilt:

Die durch $f(x) = Ax + B$ für alle reellen Zahlen $x$ definierte Funktion $f$ ist $C$-stetig an der Stelle $a$.

b) Wenn eine für alle reellen Zahlen $x$ definierte Funktion $f$ an der Stelle $a = 0$ den Funktionswert $f(0) = 0$ hat und an dieser Stelle $C$-stetig ist, so gilt für beliebige reelle $p$, $q$ die Gleichung $f(p+q) = f(p) + f(q)$.
