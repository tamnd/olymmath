---
tag: HGXM8GVQRZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25214
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Given a quadruple of positive numbers ( $a, b$, $c, d$ ). From it, a new quadruple ( $a b, b c, c d, d a$ ) is obtained according to the following rule: each number is multiplied by the next one, the fourth by the first. From the new quadruple, a third one is obtained by the same rule, and so on. Prove that in the sequence of quadruples obtained, ( $a, b, c, d$ ) will never appear again, except in the case when $a=b=c=d=1$.

b) Given an arbitrary set of 1s and -1s of length $2^{k}$. From it, a new set is obtained according to the following rule: each number is multiplied by the next one; the last $2^{k}$-th number is multiplied by the first. The same operation is performed on the new set of 1s and -1s, and so on. Prove that eventually a set consisting entirely of ones will be obtained.
