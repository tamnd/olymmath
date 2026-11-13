---
tag: GRJG6DGQHY
kind: problem
type: answer
answer: "440"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240092
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Numbers $1$ to $22$ are written on a board. A "move" is a procedure of picking two numbers $a,b$ on the board such that $b \geq a+2$, then erasing $a$ and $b$ to be replaced with $a+1$ and $b-1$. Determine the maximum possible number of moves that can be done on the board.
