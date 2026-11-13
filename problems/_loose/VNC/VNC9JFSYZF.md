---
tag: VNC9JFSYZF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223477
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Grid the plane forming an infinite board. In each cell of this board, there is a lamp, initially turned off. A permitted operation consists of selecting a square of $3\times 3$, $4\times 4$, or $5\times 5$ cells and changing the state of all lamps in that square (those that are off become on, and those that are on become off).

(a) Prove that for any finite set of lamps, it is possible to achieve, through a finite sequence of permitted operations, that those are the only lamps turned on on the board.

(b) Prove that if in a sequence of permitted operations only two out of the three square sizes are used, then it is impossible to achieve that at the end the only lamps turned on on the board are those in a $2\times 2$ square.
