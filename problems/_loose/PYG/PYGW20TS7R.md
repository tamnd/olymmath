---
tag: PYGW20TS7R
kind: problem
type: answer
answer: Exactly those initial positions where the sum of the three coordinates is divisible by three.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: de
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=218
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
Betrachte drei Steine auf der reellen Geraden mit ganzzahligen Koordinaten. In einem Schritt kann man zwei dieser Steine auswählen, den einen um $1$ nach links und den anderen um $1$ nach rechts verschieben. Für welche Anfangspositionen lassen sich alle drei Steine mit einer geeigneten Folge von Schritten auf denselben Punkt verschieben?
