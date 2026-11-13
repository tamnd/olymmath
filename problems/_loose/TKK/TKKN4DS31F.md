---
tag: TKKN4DS31F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261923
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Evaluate $1 \oplus 2 \oplus \dots \oplus 987654321$
where $\oplus$ is bitwise exclusive OR.

($A\oplus B$ in binary has an $n$-th digit equal to $1$ if the $n$-th binary digits of $A$ and $B$ differ and $0$ otherwise.
For example, $5 \oplus 9 = 0101_{2} \oplus 1001_{2} = 1100_2= 12$ and $6 \oplus 7 = 110_2 + 111_2 = 001_2 = 1$.)

*Proposed by Jacob Weiner*
