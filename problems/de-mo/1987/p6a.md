---
tag: SCSV06577E
kind: problem
appearances:
  - at: de-mo/1987/p6a
    primary: true
canonical:
  statement: S2
  rule: curated
statements:
  - id: S1
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 26. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/26124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
  - id: S2
    lang: de
    source: olympiade-mathematik
    name: olympiade-mathematik.de, 26. Mathematik-Olympiade, 4. Stufe, Klasse 12
    url: https://www.olympiade-mathematik.de/pdf/block_a/26124_a.pdf
    page: 3
    origin: H2
    zone: Z2
    kind: transcription
    extraction: vision/claude@2.1.325 (claude-opus-5-5)
    confidence: 0.9
status:
  statement: captured
---
Im Mathematiklager schlägt ein Zirkelleiter den $n$ Schülern ($n \geq 3$) seiner Gruppe vor, den Schüler, der den Tafeldienst wahrzunehmen hat, nach folgender Methode auszuwählen:

Die Schüler werden mit $P_1, P_2, ..., P_n$ numeriert und stellen sich in dieser Reihenfolge im Kreis auf. Dabei folgt (im Umlaufsinn $P_1, P_2, ...$) auf $P_n$ wieder $P_1$. Durch Münzwurf wird zunächst entschieden, ob $P_1$ oder $P_2$ aus dem Kreis ausscheidet. Liegt *Wappen* oben, so scheidet $P_1$ aus, bei *Zahl* $P_2$. Danach wird der Ausscheid mit denjenigen beiden noch nicht ausgeschiedenen Schülern fortgesetzt, die auf den soeben zuletzt ausgeschiedenen Schüler im genannten Umlaufsinn folgen. Bei *Wappen* scheidet wieder der in dem Umlaufsinn erste von diesen beiden aus, bei *Zahl* der zweite. Dies wird solange wiederholt, bis nur noch ein Schüler übrigbleibt, der dann als Diensthabender bestimmt wird.

a) Man berechne im Fall $n = 3$ die Wahrscheinlichkeit $W_1, W_2, W_3$ dafür, daß $P_1, P_2$ bzw. $P_3$ als Diensthabende bestimmt werden.

b) Man beweise für jedes $n \geq 3$, daß die Auswahlmethode ungerecht ist, d.h. daß die Wahrscheinlichkeit, als Diensthabender bestimmt zu werden, nicht für alle Schüler $P_1, P_2, ..., P_n$ gleich ist.

*Bemerkung:* Tritt irgendein zufälliges Ereignis $A$ als Folge irgendeines von $m$ Ereignissen aus einer Gesamtzahl von $N$ möglichen Ereignissen (die einander ausschließen und gleichwahrscheinlich sind) ein, so bezeichnet man als Wahrscheinlichkeit des Ereignisses $A$ die Zahl $p = \frac{m}{N}$.
