---
tag: 9J3HQZ15ZH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=146195
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $g(x)$ be defined on the interval $D\left(\subseteq \mathbf{R}^{+}\right)$. If for any $x_{1}, x_{2} \in D$ and $t \in(0,1)$, we have
$$
g\left(x_{1}^{2} \cdot x_{2}^{1-t}\right) \leqslant t g\left(x_{1}\right)+(1-t) g\left(x_{2}\right),
$$
$a_{1} \leqslant a_{2} \leqslant \cdots \leqslant a_{n}, b_{1} \leqslant b_{2} \leqslant \cdots \leqslant b_{n}$. And $a \leqslant a_{1} b_{1} \leqslant a_{n} b_{n} \leqslant b$, then
$$
\sum_{i=1}^{n} g\left(a_{i} b_{i}\right) \geqslant \sum_{j=1}^{n} g\left(a, b_{k}\right) \geqslant \sum_{i=1}^{n} g\left(a_{i} b_{n} \cdot 1-i\right) .
$$
(Where $k_{1}, k_{2}, \cdots, k_{n}$ is any permutation of $1,2,3, \cdots, n$),
(2) can be briefly stated as: the order is maximum, the mixed order is in the middle, and the reverse order is minimum.

First, we prove a lemma:
Lemma Let $0<a<b, x, y \in(a, b)$ and $x y=a b$, then
$$
g(a)+g(b) \geqslant g(x)+g(y) .
$$
