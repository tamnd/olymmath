---
tag: X0SHHW385A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{f}: \mathbb{Z} \mapsto \mathbb{R}$ be a function such that

$$
\mathrm{f}(\mathrm{n}+2)=(\mathrm{f}(\mathrm{n}+1)+\mathrm{f}(\mathrm{n})) / 2
$$

for all integers $\mathrm{n}$. Suppose that $\mathrm{f}$ is bounded, that is, there exists a real number $\mathbf{F}$ such that $-F \leqslant f(n) \leqslant F$ for all $n$.

Prove that $\mathrm{f}$ is a constant function.
