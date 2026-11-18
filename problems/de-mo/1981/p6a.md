---
tag: R0SDCQKSC8
kind: problem
appearances:
  - at: de-mo/1981/p6a
    primary: true
canonical:
  statement: S2
  rule: curated
statements:
  - id: S1
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 20. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/20124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 20. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/20124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
    extraction: vision/claude@2.1.325 (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
Eine Strecke $AB$ von 10 m Länge soll auf folgende Weise durch *wiederholtes Halbieren* in 10 näherungsweise gleichlange Strecken zerlegt werden:

(1) Zunächst wählt man beliebige Punkte $P_1^{(0)}$, $P_2^{(0)}$, ..., $P_9^{(0)}$ auf der Strecke $AB$ und definiert $P_0^{(0)} = A$ und $P_{10}^{(0)} = B$.

(2) Liegen nun für eine natürliche Zahl $n$ bereits als *$n$-te Näherung* Punkte $P_0^{(n)}$, $P_1^{(n)}$, ..., $P_{10}^{(n)}$ vor, so definiert man $P_0^{(n+1)} = A$, $P_{10}^{(n+1)} = B$ sowie für $j = 1, 2, ..., 9$ jeweils $P_j^{(n+1)}$ als Mittelpunkt der Strecke $P_{j-1}^{(n+1)} P_{j+1}^{(n)}$.

Es seien $Q_1$, $Q_2$, ..., $Q_9$ die Punkte auf $AB$, die $AB$ in 10 genau gleich lange Teilstrecken zerlegen, für die also $\overline{AQ_1} = \overline{Q_1Q_2} = ... = \overline{Q_8Q_9} = \overline{Q_9B} = 1$ m gilt.

Beweisen Sie, daß eine natürliche Zahl $N$ so existiert, daß für jede Wahl der Punkte $P_1^{(0)}$, $P_2^{(0)}$, ..., $P_9^{(0)}$ auf $AB$ gilt: Bei der *$n$-ten Näherung* weicht jeder der Punkte $P_j^{(N)}$ $(j = 1, 2, ..., 9)$ um weniger als 1 mm von der Lage des Punktes $Q_j$ ab, d.h., es gilt $\overline{P_j^{(N)} Q_j} < 1$ mm.
