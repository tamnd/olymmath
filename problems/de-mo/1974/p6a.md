---
tag: QAXQ3Q7FFX
kind: problem
appearances:
  - at: de-mo/1974/p6a
    primary: true
canonical:
  statement: S2
  rule: curated
statements:
  - id: S1
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 13. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/13124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 13. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/13124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
    extraction: vision/claude@2.1.325 (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
*Erklärungen:* Auf einem Schaltbrett sei eine Anzahl $n$ von Knöpfen $K_1, ..., K_n$ zum Ein- und Ausschalten von Stromkreisen $S_1, ..., S_n$ angebracht. Für jeden Knopf $K_i$ werde durch einmaliges Drücken der Stromkreis $S_i$ vom ausgeschalteten Zustand in den eingeschalteten Zustand bzw. umgekehrt vom eingeschalteten in den ausgeschalteten Zustand überführt, unabhängig von den anderen Stromkreisen.

Unter einem "Schaltbild" $B$ sei die gleichzeitige Angabe der Zustände aller Stromkreise $S_i$ verstanden; z.B. stellt die Ausgangsstellung, bei der alle Stromkreise $S_i$ ausgeschaltet sind, ein Schaltbild dar, das mit $B_0$ bezeichnet sei. Sind $B$ und $B'$ Schaltbilder, so werde unter der "Summe" $B \oplus B'$ dasjenige Schaltbild verstanden, das nach folgender Vorschrift entsteht:

Es sei $B$ dadurch gekennzeichnet, daß genau die Stromkreise $S_{n_1}, ..., S_{n_p}$ eingeschaltet sind; es sei $B'$ dadurch gekennzeichnet, daß genau die Stromkreise $S_{k_1}, ..., S_{k_p}$ eingeschaltet sind.

Dann beginne man mit dem Schaltbild $B_0$ und

(a) drücke die Knöpfe $K_{n_1}, ..., K_{n_p}$, jeden genau einmal. Anschließend (ohne nach $B_0$ zurückzugehen!)

(b) drücke man genau die Knöpfe $K_{k_1}, ..., K_{k_q}$, jeden genau einmal.

Unter dem "Produkt" $B \otimes B'$ werde dasjenige Schaltbild verstanden, das nach folgender Vorschrift entsteht:

Man beginne mit dem Schaltbild $B_0$, verfahre nach den Vorschriften (a), (b) und anschließend

(c) drücke man genau diejenigen Knöpfe, die bei mindestens einem der beiden Teilprozesse (a), (b) bereits gedrückt worden waren, jedoch noch genau einmal.

Man beweise die folgenden beiden Aussagen:

(1) Sind $B$, $B'$, $B''$ Schaltbilder, so gilt

$$(B \oplus B') \otimes B'' = (B \otimes B'') \oplus (B' \otimes B'').$$

(2) Sind $B$, $B'$ Schaltbilder, so gibt es genau ein Schaltbild $B^*$ mit der Eigenschaft $B^* \oplus B' = B$, nämlich $B^* = B \oplus B'$.
