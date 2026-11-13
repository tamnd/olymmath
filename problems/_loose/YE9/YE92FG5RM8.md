---
tag: YE92FG5RM8
kind: problem
type: answer
answer: ceil((π(2n) − π(n) + 1)/2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=303
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sei $n$ eine natürliche Zahl. Wir nennen ein Zahlenpaar unverträglich, falls ihr größter gemeinsamer Teiler gleich $1$ ist. Wie viele unverträgliche Paare treten mindestens auf, wenn man die Zahlen $\{1, 2, \ldots, 2n\}$ in $n$ Paare aufteilt?
