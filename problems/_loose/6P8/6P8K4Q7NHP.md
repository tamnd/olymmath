---
tag: 6P8K4Q7NHP
kind: problem
type: answer
answer: m n (m+1)(n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Seien $m, n$ natürliche Zahlen. Betrachte ein quadratisches Punktgitter aus $(2m+1) \times (2n+1)$ Punkten in der Ebene. Eine Menge von Rechtecken heisst gut, falls folgendes gilt:

a. Für jedes der Rechtecke liegen die vier Eckpunkte auf Gitterpunkten und die Seiten parallel zu den Gitterlinien.

b. Keine zwei der Rechtecke haben einen gemeinsamen Eckpunkt.

Bestimme den grösstmöglichen Wert der Summe der Flächen aller Rechtecke in einer guten Menge.
