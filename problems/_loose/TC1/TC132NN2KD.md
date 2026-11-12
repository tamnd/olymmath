---
tag: TC132NN2KD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37258
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In an $M$-element set, $S$ subsets containing $a_{1}, a_{2}, \ldots, a_{s}$ elements respectively have been selected. It is known that none of these subsets is contained in another. Prove that

$$
\frac{1}{\binom{M}{a_{1}}}+\frac{1}{\binom{M}{a_{2}}}+\ldots+\frac{1}{\binom{M}{a_{s}}} \leqslant 1
$$

where $\binom{M}{a_{k}}=M!/ a_{k}!\left(M-a_{k}\right)!$.
