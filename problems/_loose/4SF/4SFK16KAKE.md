---
tag: 4SFK16KAKE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33594
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi=\left(\xi_{0}, \xi_{1}, \ldots, \xi_{n}\right)$ be a homogeneous Markov chain with (finite) state space $X$ and transition probability matrix $\mathbb{P}=\left\|p_{x y}\right\|$. Let

$$
T \varphi(x)=\mathrm{E}\left[\varphi\left(\xi_{1}\right) \mid \xi_{0}=x\right] \left(=\sum_{y} \varphi(y) p_{x y}\right)
$$

- be the one-step transition operator. Suppose a non-negative function $\varphi=\varphi(x)$ satisfies the equation

$$
T \varphi(x)=\varphi(x), x \in X
$$

i.e., it is "harmonic". Prove that the sequence of random variables

$$
\zeta=\left(\zeta_{k}, \mathscr{D}_{k}^{\xi}\right)_{0 \leqslant k \leqslant n}, \zeta_{k}=\varphi\left(\zeta_{k}\right)
$$

forms a martingale.
