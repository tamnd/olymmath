---
tag: KNHZYJ9KVQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine UkraineMO
---
Vertices of a regular $(6n+3)$-gon, which are renumbered clockwise by numbers $1; 2; \ldots; 6n+3$, are the game field. Vertices with numbers $2n+1; 4n+2; 6n+3$ are called holes. At the start of the game there are $3$ chips on the field. $2$ players in turn choose any one of the $3$ chips and move it clockwise to a neighbouring vertex, if this one isn't occupied by another chip. The first player wins, if at least $2$ chips get in holes after anyone's turn. Can the first player always win, if at the start of the game they are placed in the form of a regular triangle?
(Bogdan Rublyov)
