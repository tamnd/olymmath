---
tag: 5YSVH8H5B1
kind: problem
appearances:
  - at: de-mo/1976/p6b
    primary: true
canonical:
  statement: S2
  rule: curated
statements:
  - id: S1
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 15. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/15124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 15. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/15124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
    extraction: vision/claude@2.1.325 (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
In der mathematischen Statistik werden häufig Summen der folgenden Form benötigt:

$$M = \sum_{k=0}^{n=1} \binom{2n-1}{2k}; \qquad N = \sum_{k=0}^{n=1} \binom{2n}{2k}; \qquad m = \frac{1}{N} \sum_{k=0}^{n=1} \binom{2n}{2k},$$

wobei $n$ eine natürliche Zahl mit $n \geq 1$ ist.

a) Man berechne die Summen $M$, $N$ und $m$.

b) Es sei $f$ die für alle reellen $x$ durch

$$f(x) = \frac{1}{N} \sum_{k=0}^{n=1} (k - x)^2 \binom{2n}{2k}$$

definierte Funktion.

Man berechne $f(x)$ und weise nach, daß $f$ einen kleinsten Funktionswert besitzt und diesen genau für $x = m$ annimmt.
