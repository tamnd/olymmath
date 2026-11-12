---
tag: 9FTY6Z0MK6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In this problem, following the book [40], it is proposed to establish that

$$
\varlimsup_{t \rightarrow \infty}|\varphi(t)|=1
$$

for the characteristic function $\varphi(t)$ of an arbitrary discrete random variable $\xi$.

To prove this, one should first consider the Fejér kernel

$$
F_{n}(t)=\frac{1}{n} \sum_{k=0}^{n-1} \sum_{|j| \leqslant k} e^{i j t}, n \geqslant 1, t \in \mathbb{R}
$$

and verify that $F_{n}(t) \geqslant 0$ for all $t$, and then show that if $\xi$ takes values $0, x_{1}, x_{2}, \ldots$ with probabilities $p_{0}, p_{1}, p_{2}, \ldots$, then

$$
\overline{\lim }_{t \rightarrow \infty}|\varphi(t)| \geqslant \lim _{T} \frac{1}{T} \int_{0}^{T} \varphi(t) \overline{K_{N}(t, n)} d t \geqslant p_{0}+\frac{n-1}{n} \sum_{k=1}^{N} p_{k}
$$

where $K_{N}(t, n)=\prod_{k=1}^{N} F_{n}\left(x_{k} t\right), n, N \geqslant 1$, and, by taking the limit as $n, N \rightarrow \infty$, establish that the equality ( $(*)$) holds.

Remark. Another way to prove the given statement is based on considering the elementary properties of almost periodic functions of the form $\sum_{k \geqslant 1} p_{k} e^{i x_{k} t}$ (see [37, p. 44]).
