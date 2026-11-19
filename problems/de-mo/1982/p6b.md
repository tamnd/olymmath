---
tag: RH944GKBB8
kind: problem
appearances:
  - at: de-mo/1982/p6b
    primary: true
canonical:
  statement: S2
  rule: curated
statements:
  - id: S1
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 21. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/21124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 21. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/21124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
    extraction: vision/claude@2.1.325 (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
Man ermittle alle diejenigen Funktionen $f$ und $g$, die für alle nichtnegativen reellen Zahlen $x$ definiert sind, reelle Funktionswerte haben und folgende Bedingungen erfüllen:

(1) Für alle $x \geq 0$ gilt $f(x) \geq 1$ und $g(x) \geq 0$.

(2) Für alle $x \geq 0$ gilt $(f(x))^2 - (g(x))^2 = 1$.

(3) Für alle $x \geq 0$ und alle $y \geq 0$ gilt $f(\sqrt{x^2 + y^2}) = f(x) \cdot f(y) + g(x) \cdot g(y)$.

(4) Für alle $x \geq 0$ und alle $y \geq 0$ gilt $g(\sqrt{x^2 + y^2}) = f(x) \cdot g(y) + g(x) \cdot f(y)$.
