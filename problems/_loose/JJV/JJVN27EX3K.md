---
tag: JJVN27EX3K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, m \in \mathbb{N}^{*}$. We define the sequence $\left(u_{n}\right)$ recursively by $u_{1}=a$ and $u_{n+1}=a^{u_{n}}$ for all $n \in \mathbb{N}^{*}$. Show that there exist $k$ and $N$ such that for all $n \geq N$:

$$
u_{n+k} \equiv u_{n} (\bmod m)
$$
