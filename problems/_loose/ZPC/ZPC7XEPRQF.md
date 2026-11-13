---
tag: ZPC7XEPRQF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226434
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime number, and $X$ be the set of cubes modulo $p$, including $0$. Denote by $C_2(k)$ the number of ordered pairs $(x, y) \in X \times X$ such that $x + y \equiv k \pmod p$. Likewise, denote by $C_3(k)$ the number of ordered pairs $(x, y, z) \in X \times X \times X$ such that $x + y + z \equiv k \pmod p$.
Prove that there are integers $a, b$ such that for all $k$ not in $X$, we have
$$
C_3(k) = a\cdot C_2(k) + b.
$$

*Proposed by Murilo Corato, Brazil.*
