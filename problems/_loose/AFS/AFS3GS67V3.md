---
tag: AFS3GS67V3
kind: problem
type: answer
answer: a_k = \frac{k}{100}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Find the numbers $a_0,. . . , a_{100}$, such that $a_0 = 0, a_{100} = 1$ and for all $k = 1,. . . , 99$ :
$$a_k = \frac12 a_{k- 1} + \frac12 a_{k+1 }$$
(b) Find the numbers $a_0,. . . , a_{100}$, such that $a_0 = 0, a_{100} = 1$ and for all $k = 1,. . . , 99$ :
$$a_k = 1+\frac12 a_{k- 1} + \frac12 a_{k+1 }$$.
