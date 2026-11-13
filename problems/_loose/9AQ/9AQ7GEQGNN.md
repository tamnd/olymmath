---
tag: 9AQ7GEQGNN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sei $n \geq 2$ eine natürliche Zahl. In der Mitte eines kreisförmigen Gartens steht ein Wachturm. Am Rand des Gartens stehen $n$ gleichmässig verteilte Gartenzwerge. Auf dem Wachturm wohnen aufmerksame Wächter. Jeder Wächter überwacht einen Bereich des Gartens, der von zwei verschiedenen Gartenzwergen begrenzt wird.
Wir sagen, dass Wächter $A$ den Wächter $B$ kontrolliert, falls das gesamte Gebiet von $B$ in dem von $A$ enthalten ist.
Unter den Wächtern gibt es zwei Gruppen: Lehrlinge und Meister. Jeder Lehrling wird von genau einem Meister kontrolliert und kontrolliert selbst niemanden, während Meister von niemandem kontrolliert werden.
Der ganze Garten hat Unterhaltskosten:
- Ein Lehrling kostet 1 Goldstück pro Jahr.
- Ein Meister kostet 2 Goldstücke pro Jahr.
- Ein Gartenzwerg kostet 2 Goldstücke pro Jahr.
Zeige, dass die Gartenzwerge mindestens so viel kosten wie die Wächter.
