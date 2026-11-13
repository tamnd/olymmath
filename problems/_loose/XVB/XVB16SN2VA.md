---
tag: XVB16SN2VA
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165775
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We accept as proven the following two statements. Let $P$ be any interior point of triangle $ABC$, and let the rays $AP$, $BP$, $CP$ intersect the sides $BC$, $CA$, $AB$ at points $A_1$, $B_1$, $C_1$ respectively. Then the sum $PA + PB + PC = s$ is less than the sum of the two largest sides of the triangle, and the sum $PA_1 + PB_1 + PC_1 = s_1$ is less than the largest side of the triangle. (This was a problem from the 1973 Dániel Arany competition.)

Now let $ABC$ be an equilateral triangle, and choose the length of its side to be one unit. Which numbers $c$ are such that there exists a point $P$ for which $s > 2c$ and $s_1 > c$?
