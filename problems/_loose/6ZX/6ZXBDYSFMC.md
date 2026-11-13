---
tag: 6ZXBDYSFMC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $u$ be a positive rational number and $m$ be a positive integer. Define a sequence $q_{1}, q_{2}, q_{3}, \ldots$ such that $q_{1}=u$ and for $n \geqslant 2$ :

$$
\text { if } q_{n-1}=\frac{a}{b} \text { for some relatively prime positive integers } a \text { and } b, \text { then } q_{n}=\frac{a+m b}{b+1}
$$

Determine all positive integers $m$ such that the sequence $q_{1}, q_{2}, q_{3}, \ldots$ is eventually periodic for any positive rational number $u$.

Remark: A sequence $x_{1}, x_{2}, x_{3}, \ldots$ is eventually periodic if there are positive integers $c$ and $t$ such that $x_{n}=x_{n+t}$ for all $n \geqslant c$.

(Petar Nizić-Nikolac)
