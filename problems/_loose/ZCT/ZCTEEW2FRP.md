---
tag: ZCTEEW2FRP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121763
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given any set of $n$ integers $a_{1}, a_{2}, \cdots, a_{n}$, from it we can obtain a new set:
$$
\frac{a_{1}+a_{2}}{2}, \frac{a_{2}+a_{3}}{2}, \cdots, \frac{a_{n-1}+a_{n}}{2}, \frac{a_{1}+a_{n}}{2} ;
$$

from this set, according to the same rule, we can obtain a new set ... Prove: if all the obtained numbers are integers, then all the initial numbers are equal or alternate equally.
