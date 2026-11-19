---
tag: 1CMQ5RB2JK
kind: problem
appearances:
  - at: de-mo/1976/p6a
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
    page: 2
    origin: H2
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 15. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/15124_a.pdf
    page: 2
    origin: H2
    zone: Z2
    kind: transcription
    extraction: vision/claude@2.1.325 (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
Mit $R_n$ wird die Menge aller $n$-Tupel reeller Zahlen bezeichnet. In $R_n$ ist durch

$$(x_1, x_2, ..., x_n) + (y_1, y_2, ..., y_n) = (x_1 + y_1, x_2 + y_2, ..., x_n + y_n)$$
eine Addition und durch

$$\lambda(x_1, x_2, ..., x_n) = (\lambda x_1, \lambda x_2, ..., \lambda x_n), \quad \lambda \text{ reell},$$

die Multiplikation mit einer beliebigen reellen Zahl $\lambda$ definiert.

Es sei $M$ eine Teilmenge von $R_n$, für die gilt:

Mit $(x_1, x_2, ..., x_n)$, $(y_1, y_2, ..., y_n) \in M$ gilt für jedes $\lambda$ mit $0 \leq \lambda \leq 1$

$$\lambda(x_1, x_2, ..., x_n) + (1 - \lambda)(y_1, y_2, ..., y_n) \in M. \tag{1}$$

Ein $n$-Tupel $(s_1, s_2, ..., s_n) \in M$ heißt $x$-Element von $M$, wenn aus $(s_1, s_2, ..., s_n) = \frac{1}{2}(x_1, x_2, ..., x_n) + \frac{1}{2}(y_1, y_2, ..., y_n)$ mit $(x_1, x_2, ..., x_n)$, $(y_1, y_2, ..., y_n) \in M$ stets $s_1 = x_1 = y_1$, $s_2 = x_2 = y_2$, ... , $s_n = x_n = y_n$ und damit $(s_1, s_2, ..., s_n) = (x_1, x_2, ..., x_n) + (y_1, y_2, ..., y_n)$ folgt.

Man zeige: $(s_1, s_2, ..., s_n)$ ist $x$-Element genau dann, wenn für beliebiges $\lambda$ mit $0 < \lambda < 1$ aus $(s_1, s_2, ..., s_n) = \lambda(x_1, x_2, ..., x_n) + (1 - \lambda)(y_1, y_2, ..., y_n)$ mit $(x_1, x_2, ..., x_n)$, $(y_1, y_2, ..., y_n) \in M$ stets $s_1 = x_1 = y_1$, $s_2 = x_2 = y_2$, ... , $s_n = x_n = y_n$, also $(s_1, s_2, ..., s_n) = (x_1, x_2, ..., x_n) = (y_1, y_2, ..., y_n)$ folgt.
