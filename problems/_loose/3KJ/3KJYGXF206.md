---
tag: 3KJYGXF206
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 5$ be an integer. Let $a_{1}, \ldots, a_{n}$ be distinct integers in $\{1, \ldots, 2 n\}$. Show that there exist indices $\mathbf{i}, \mathbf{j} \in\{1, \ldots, \mathrm{n}\}$ with $\boldsymbol{i} \neq \mathrm{j}$ such that

$$
\operatorname{LCM}\left(a_{i}, a_{j}\right) \leqslant 6\left(\left\lfloor\frac{n}{2}\right\rfloor+1\right)
$$

where $\left\lfloor x \right\rfloor$ denotes the floor function of the number $x$.
