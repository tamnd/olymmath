---
tag: 8ZT64B2PZA
kind: problem
appearances:
  - at: de-mo/1975/p6a
    primary: true
canonical:
  statement: S2
  rule: curated
statements:
  - id: S1
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 14. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/14124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 14. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/14124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
    extraction: vision/claude@2.1.325 (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
Es sei $n$ eine natürliche Zahl mit $n \geq 2$. Jemand schreibt $n$ Briefe, von denen jeder für genau einen unter $n$ verschiedenen Adressaten vorgesehen ist, und steckt in jeden von $n$ Umschlägen genau einen dieser Briefe, ohne vorher die Adressen auf die Umschläge zu schreiben. Da er nun nicht mehr weiß, in welchem Umschlag sich welcher Brief befindet, schreibt er willkürlich die $n$ Adressen auf die $n$ Umschläge (auf jeden Umschlag genau eine Adresse).

Man beweise: Die Wahrscheinlichkeit $q_n$ dafür, daß bei keinem der Adressaten der an ihn gerichtete Umschlag den für ihn vorgesehenen Brief enthält, hat den Wert

$$q_n = (-1)^2 \cdot \frac{1}{2!} + (-1)^3 \cdot \frac{1}{3!} + ... + (-1)^n \cdot \frac{1}{n!}.$$
