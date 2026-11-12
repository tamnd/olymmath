---
tag: Z5SK95JSNP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33632
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the following sets belong to $\mathscr{B}\left(\mathbb{R}^{\infty}\right)$:

$$
\left\{x: \varlimsup_{n} x_{n} \leqslant a\right\}, \left\{x: \lim _{n} x_{n}>a\right\}
$$

$\left\{x: x_{n} \rightarrow\right\}$ - the set of those $x$ for which $\lim _{n} x_{n}$ exists and is finite,

$$
\left\{x: \sum_{n \geqslant 1}\left|x_{n}\right|>a\right\}, \left\{x: \sum_{k=1}^{n} x_{k}=0 \text { for at least one } n \geqslant 1\right\},
$$

where $x=\left(x_{1}, x_{2}, \ldots\right) \in \mathbb{R}^{\infty}$, and $a \in \mathbb{R}$.
