---
tag: MB58GGBXQ7
kind: problem
appearances:
  - at: de-mo/1979/p6b
    primary: true
canonical:
  statement: S2
  rule: curated
statements:
  - id: S1
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 18. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/18124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 18. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/18124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
    extraction: vision/claude@2.1.325 (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
a) Es sei $M$ die Menge aller Tripel $(x, y, z)$ von reellen Zahlen, für die die folgenden Ungleichungen (1) bis (5) erfüllt sind:

$$55x + z \leq 54 \tag{1}$$
$$55y + z \leq 54 \tag{2}$$
$$55x - 4z \geq 4 \tag{3}$$
$$55y - 4z \geq 4 \tag{4}$$
$$z \geq -1 \tag{5}$$

Man untersuche, ob für den Ausdruck

$$f(x, y, z) = x^2 + y^2 + z^2 \tag{6}$$

ein Tripel $(x_0, y_0, z_0) \in M$ mit der Eigenschaft existiert, daß für alle Tripel $(x, y, z) \in M$ die Ungleichung

$$f(x_0, y_0, z_0) \geq f(x, y, z)$$

gilt. Ist dies der Fall, so ermittle man hierzu $f(x_0, y_0, z_0)$.

b) Es sei $M'$ die Menge aller Tripel $(x, y, z)$ von *ganzen* Zahlen, für die die Ungleichungen (1) bis (5) erfüllt sind.

Man untersuche, ob für den Ausdruck (6) ein Tripel $(x_1, y_1, z_1) \in M'$ mit der Eigenschaft existiert, daß für alle Tripel $(x, y, z) \in M'$ die Ungleichung

$$f(x_1, y_1, z_1) \geq f(x, y, z)$$

gilt. Ist dies der Fall, so ermittle man hierzu $f(x_1, y_1, z_1)$.
