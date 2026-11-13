---
tag: JRAP238WPS
kind: problem
type: answer
answer: 4n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216124
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n\geq 3$. For each $3\times3$ squares on the grid, call this $3\times3$ square isolated if the center unit square is white and other 8 squares are black, or the center unit square is black and other 8 squares are white.

Now suppose one can paint an infinite grid by white or black, so that one can select an $a\times b$ rectangle which contains at least $n^2-n$ isolated $3\times 3$ square. Find the minimum of $a+b$ that such thing can happen.

(Note that $a,b$ are positive reals, and selected $a\times b$ rectangle may have sides not parallel to grid line of the infinite grid.)
