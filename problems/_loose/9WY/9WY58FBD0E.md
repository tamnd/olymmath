---
tag: 9WY58FBD0E
kind: problem
type: answer
answer: "1596"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call $\overline{a_n\ldots a_2}$ the Fibonacci representation of a positive integer $k$ if $$k = \sum_{i=2}^n a_i F_i,$$ where $a_i\in\{0,1\}$ for all $i$, $a_n=1$, and $F_i$ denotes the $i^{\text{th}}$ Fibonacci number ($F_0=0$, $F_1=1$, and $F_i=F_{i-1}+F_{i-2}$ for all $i\ge2$). This representation is said to be $\textit{minimal}$ if it has fewer 1's than any other Fibonacci representation of $k$. Find the smallest positive integer that has eight ones in its minimal Fibonacci representation.
