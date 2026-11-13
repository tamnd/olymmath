---
tag: HP5W9TAGCS
kind: problem
type: answer
answer: n = 59; a = 4; d = 1; the arithmetic sequence is 4, 5, 6, …
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=15
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $\langle a_n \rangle$ with $a_n = a + nd$ is called an arithmetic sequence. The sequence $\langle b_n \rangle$ with $b_n = \sum_{k=0}^{n} a_k$ is called an arithmetic sequence of second degree. Let $a$ and $d$ be positive integers.

We consider all such arithmetic sequences of second degree containing the number $2010$. What is the highest possible index $n$ if $b_n = 2010$? Determine all possible arithmetic sequences $\langle a_n \rangle$, for which $b_n = 2010$ holds for this index.
