---
tag: N8ZVA5FGK5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84803
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{0}$ be an $n$-tuple of real numbers. For all $k \geqslant 0$, the $n$-tuple $A_{k+1}$ is constructed from the $n$-tuple $A_{k}=\left(a_{1}, \cdots, a_{n}\right)$ as follows:
(i) We partition the set $\{1,2, \cdots, n\}$ into 2 disjoint sets $I$ and $J$ such that the quantity:

$$
\left|\sum_{i \in I} a_{i}-\sum_{j \in J} a_{j}\right|
$$

is minimized. If the minimum can be achieved in multiple ways, we choose an arbitrary partition among those that achieve this minimum.

(ii) We set $\epsilon_{i}=1$ if $i \in I$ and $\epsilon_{i}=-1$ if $i \in J$ for $1 \leqslant i \leqslant n$. We then define $A_{k+1}=$ $\left(a_{1}+\epsilon_{1}, a_{2}+\epsilon_{2}, \cdots, a_{n}+\epsilon_{n}\right)$.

Show that there exists an integer $N$ such that for any initial $n$-tuple, there is an element $x$ in the $n$-tuple $A_{N}$ satisfying $|x| \geqslant \frac{n}{2}$.
