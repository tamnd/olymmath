---
tag: CQ23DVN38Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221780
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The *fibboican* sequence $a_1,\ a_2,\ \dots$, is defined by $a_1 = a_2 = 1$, and for integers $k \geq 3$,

- $a_k = a_{k-1} + a_{k-2}$ if $k$ is odd

- $\frac {1}{a_k} = \frac {1}{a_{k-1}} + \frac {1}{a_{k-2}}$ if $k$ is even.

Prove that, for each integer $m\ge 1$, the numerator of $a_m$ (when written in simplest form) is a power of $2$.

*Eric Shen (CAN)*
