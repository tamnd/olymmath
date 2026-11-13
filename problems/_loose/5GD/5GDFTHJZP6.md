---
tag: 5GDFTHJZP6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246874
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Evaluate

$$\lim_{n\to \infty} \underbrace{\sqrt{a+\sqrt{a+\ldots+\sqrt{a+\sqrt{b}}}}}_{n\ \text{square roots}}$$

with $a,b>0$.

b)Let $(a_n)_{n\ge 1}$ and $(x_n)_{n\ge 1}$ such that $a_n>0$ and

$$x_n=\sqrt{a_n+\sqrt{a_{n-1}+\ldots+\sqrt{a_2+\sqrt{a_1}}}},\ \forall n\in \mathbb{N}^*$$

Prove that:

1) $(x_n)_{n\ge 1}$ is bounded if and only if $(a_n)_{n\ge 1}$ is bounded.
2) $(x_n)_{n\ge 1}$ is convergent if and only if $(a_n)_{n\ge 1}$ is convergent.

*Valentin Matrosenco*
