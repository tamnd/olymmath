---
tag: ARZMVQFV2P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29517
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a system of $n$ equations with $n$ unknowns $x_{1}, x_{2}, \ldots, x_{n}:$

$$
a x_{1}^{2}+b x_{1}+c=x_{2}, a x_{2}^{2}+b x_{2}+c=x_{3}, \ldots
$$

$$
\ldots, a x_{n-1}^{2}+b x_{n-1}+c=x_{n}, a x_{n}^{2}+b x_{n}+c=x_{1}
$$

(here $a \neq 0$). Prove that this system has no solutions if $(b-1)^{2}-4 a c < 0$.
