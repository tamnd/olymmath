---
tag: F1XANAEQP7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34117
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{e_{n}=e_{n}(x), x \in[0,1]\right\}_{n \geqslant 1}$ be a complete orthonormal system of $L^{2}$-functions with respect to the Lebesgue measure on $[0,1]$, and $\left(\xi_{n}\right)_{n \geqslant 1}$ be i.i.d. $\mathscr{N}(0,1)$-random variables. Show that the process

$$
B_{t}=\sum_{n \geqslant 1}\left(e_{n}, I_{[0, t]}\right) \xi_{n}, 0 \leqslant t \leqslant 1,
$$

is a Brownian motion (the series converges in $L^{2}$), where $I_{[0, t]}=I_{[0, t]}(x)$, $x \in[0,1]$, and $(f, g)$ is the scalar product of functions $f$ and $g$ from $L^{2}$, i.e.,

$$
(f, g)=\int_{0}^{1} f(x) g(x) d x
$$
