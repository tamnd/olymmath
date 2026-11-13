---
tag: HNYFY2ZV11
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=260
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a prime number $p$, $p \ge 3$ and $d$ a square free number (that is $d$'s prime decomposition contains no repeated factors), find the number of the elements of the set
$$
A_p = \{x = \{n\sqrt{d} + \frac{n}{p}\} - \{n\sqrt{d}\} \mid n \in \mathbb{N}\},
$$
where $\{a\}$ denotes the fractional part of the real number $a$.
