---
tag: 54ASQQ8H5M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=92963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let
$$
X=\left\{\left(x_{1}, x_{2}, \cdots, x_{n}\right) \mid x_{1}, x_{2}, \cdots, x_{n} \in \mathbf{Z}\right\}
$$

be the set of all lattice points in $n$-dimensional space. For any two points $A\left(x_{1}, x_{2}, \cdots, x_{n}\right)$ and $B\left(y_{1}, y_{2}, \cdots, y_{n}\right)$ in $X$, define their distance as
$$
|A-B|=\left|x_{1}-y_{1}\right|+\left|x_{2}-y_{2}\right|+\cdots+\left|x_{n}-y_{n}\right| .
$$

The set $Q(A)=\{P \in X|| P-A \mid \leqslant 1\}$ is called a set centered at $A$.

If some points (but not all) in $X$ can be colored red such that each set $Q(A)(A \in X)$ contains exactly $k$ red points, find all possible values of the positive integer $k$.
