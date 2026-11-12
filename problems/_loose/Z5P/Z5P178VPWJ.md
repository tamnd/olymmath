---
tag: Z5P178VPWJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33666
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathrm{P}_{n}$ be a probability measure on $\left(\mathbb{R}^{n}, \mathscr{B}\left(\mathbb{R}^{n}\right)\right)$, and $F_{n}=F_{n}\left(x_{1}, \ldots\right.$ $\left.\ldots, x_{n}\right)$ be the corresponding distribution function, i.e.,

$$
F_{n}\left(x_{1}, \ldots, x_{n}\right)=\mathrm{P}_{n}\left(\left(-\infty, x_{1}\right] \times \ldots \times\left(-\infty, x_{n}\right]\right)
$$

Introduce the difference operator $\Delta_{a_{i} b_{i}}: \mathbb{R}^{n} \rightarrow \mathbb{R}\left(a_{i} \leqslant b_{i}\right)$, acting by the formula

$\Delta_{a_{i} b_{i}} F_{n}\left(x_{1}, \ldots, x_{n}\right)=F_{n}\left(\ldots, x_{i-1}, b_{i}, x_{i+1}, \ldots\right)-F_{n}\left(\ldots, x_{i-1}, a_{i}, x_{i+1}, \ldots\right)$ (all arguments except the $i$-th are fixed). Verify the validity of the equality

$$
\Delta_{a_{1} b_{1}} \ldots \Delta_{a_{n} b_{n}} F_{n}\left(x_{1}, \ldots, x_{n}\right)=\mathrm{P}_{n}\left(\left(a_{1}, b_{1}\right] \times \ldots \times\left(a_{n}, b_{n}\right]\right)
$$
