---
tag: 23EPVH4TNJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be an arbitrary random variable. Prove that for all $t \in \mathbb{R}$ the following equality holds:

$$
\mathrm{E} \operatorname{ch}(t X)=\sum_{n \geqslant 1} \frac{t^{2 n}}{(2 n)!} \mathbb{E} X^{2 n}
$$

in the sense that the left-hand side of the equation is finite if and only if all $\mathrm{E} X^{2 n}$ are finite and the series on the right-hand side converges.
