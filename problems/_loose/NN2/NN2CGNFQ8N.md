---
tag: NN2CGNFQ8N
kind: problem
type: answer
answer: n is divisible by 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland SMO Finalrunde
---
Die Ebene wird in gleichseitige Dreiecke der Seitenlänge 1 unterteilt. Betrachte ein gleichseitiges Dreieck der Seitenlänge $n$, dessen Seiten auf den Gitterlinien liegen. Auf jedem Gitterpunkt auf dem Rand und im Innern dieses Dreiecks liegt ein Stein. In einem Spielzug wird ein Einheitsdreieck ausgewählt, welches auf genau 2 Ecken mit einem Stein belegt ist. Die beiden Steine werden entfernt, und auf die dritte Ecke wird ein neuer Stein gelegt. Für welche $n$ ist es möglich, dass nach endlich vielen Spielzügen nur noch ein Stein übrig bleibt?
