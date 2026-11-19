---
tag: 4B2XK0140Z
kind: problem
appearances:
  - at: de-mo/1989/p6a
    primary: true
canonical:
  statement: S2
  rule: curated
statements:
  - id: S1
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 28. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/28124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 28. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/28124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
    extraction: vision/claude@2.1.325 (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
Man beweise: Für jede natürliche Zahl $n > 1$ und für je $n+2$ reelle Zahlen $p$, $q$, $a_1$, $a_2$, ..., $a_n$, die

$$0 < p \leq a_i \leq q \quad (i = 1, 2, ..., n) \tag{1}$$

erfüllen, gelten die beiden Ungleichungen

$$n^2 \leq \left( \sum_{i=1}^{n} a_i \right) \cdot \left( \sum_{k=1}^{n} \frac{1}{a_k} \right) \leq n^2 + \left[ \frac{n^2}{4} \right] \cdot \left( \sqrt{\frac{p}{q}} - \sqrt{\frac{q}{p}} \right)^2 . \tag{2}$$

*Hinweis:* Zu reellem $x$ bezeichnet wie üblich $[x]$ die ganze Zahl $[x] = g$ mit $g \leq x < g + 1$.

Man ermittle ferner zu gegebenen $n$, $p$, $q$ mit $0 < p \leq q$ alle diejenigen $a_i$ mit (1), für die in (2)

a) zwischen der ersten und zweiten Zahl,

b) zwischen der zweiten und dritten Zahl

das Gleichheitszeichen gilt.
