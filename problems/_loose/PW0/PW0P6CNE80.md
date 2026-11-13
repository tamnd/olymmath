---
tag: PW0P6CNE80
kind: problem
type: answer
answer: "2791"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=246
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo/2025
    source: hf-mathnet
    label: Mongolia MMO2025 Round 3
---
For the real number sequence $\{a_n\}_{n=1}^{\infty}$, we are given that $a_1 = 1$, $a_2 = 3$, and for $n \ge 1$,
$$
a_{n+2} = a_{n+1} + \frac{3a_{n+1} - 1}{a_{n+1} - a_n}
$$
Prove that the terms of the sequence $\{a_n\}$ are natural numbers and find the term $a_{61}$.
(Otgonbayar Uuye)
