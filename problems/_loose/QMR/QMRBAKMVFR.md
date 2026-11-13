---
tag: QMRBAKMVFR
kind: problem
type: answer
answer: 2^{n/2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=214
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
Gegeben ist ein beliebiger Bodengrundriss, der aus $n$ Einheitsquadraten zusammengesetzt ist. Albert und Berta möchten diesen Boden mit Kacheln bedecken, wobei jede Kachel die Form eines $1 \times 2$-Dominos oder eines T-Tetrominos hat. Albert hat nur Kacheln von einer Farbe zur Verfügung, Berta hingegen hat Dominos in zwei Farben und Tetrominos in vier Farben zur Verfügung. Albert kann diesen Bodengrundriss in $a$ Arten mit Kacheln bedecken, Berta auf $b$ Arten. Unter der Annahme, dass $a \neq 0$ gilt, bestimme das Verhältnis $b / a$.
