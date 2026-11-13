---
tag: FCMEWRGCTC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161791
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In the set $\mathbb{N}$ of natural numbers, it is required to pre-select a subset such that for all sufficiently large even values of $n \in \mathbb{N}$, after transferring all selected factors from the numerator to the denominator in the expression $n!=1 \cdot 2 \cdot \ldots \cdot n$, the resulting value of $n$ satisfies the inequality

$$
|n ?-1|<10^{-2017}
$$

Is this possible?

(I. N. Sergeev)
