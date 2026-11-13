---
tag: 81THD6XQA3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=182107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A well-usable iteration formula for the approximate calculation of $\sqrt{a}$ is

$$
u_{n+1}=\frac{1}{2}\left(u_{n}+\frac{a}{u_{n}}\right)
$$

where $u_{n}$ is an n-th approximation value. It is to be proven:

1. If $u_{0} \neq 0$ is an underestimated approximation for $\sqrt{a}$, then $u_{1}=\frac{1}{2}\left(u_{0}+\frac{a}{u_{0}}\right)$ is an overestimated approximation.
2. If $u_{n}$ is an overestimated approximation for $\sqrt{a}$, then $u_{n+1}=\frac{1}{2}\left(u_{n}+\frac{a}{u_{n}}\right)$ is a better overestimated approximation.

3. The sequence $\left\{u_{n}\right\}$, obtained by repeated application of the iteration formula, converges to $\sqrt{a}$.
