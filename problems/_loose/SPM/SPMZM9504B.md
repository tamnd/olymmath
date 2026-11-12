---
tag: SPMZM9504B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34070
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A function $\phi=\phi(\lambda), \lambda>0$, is called completely monotonic if there exist derivatives $\phi^{(n)}(\lambda)$ of all orders $n \geqslant 0$ for each $\lambda>0$ and $(-1)^{n} \phi^{(n)}(\lambda) \geqslant 0$. Prove the following Bernstein criterion.

A function $\phi=\phi(\lambda)$ on $(0, \infty)$ is the Laplace transform of some probability measure $\mu$ on $\left(\mathbb{R}_{+}, \mathscr{B}^{\left.\left(\mathbb{R}_{+}\right)\right)}\right.$), i.e., $\phi(\lambda)=\int_{\mathbb{R}_{+}} e^{-\lambda x} d \mu$, if and only if this function is completely monotonic and $\phi(0+)=1$.

To establish sufficiency, following the work [82] (see also [99], p. 3), the proof should be conducted as follows.
(a) Assuming that $\phi(\infty)=0$, represent $\phi(\lambda)$ in the form (for each $n \geqslant 1$)

$$
\phi(\lambda)=\int_{\lambda}^{\infty} \frac{(-1)^{n} \phi^{(n)}(u)}{(n-1)!}(u-\lambda)^{n-1} d u
$$

(b) Prove that the function

$$
f_{n}(x)=\frac{(-1)^{n} \phi^{(n)}(n / x)}{n!}(n / x)^{n+1}
$$

is a density on $\mathbb{R}_{+}$, and that

$$
\phi(\lambda)=\int_{0}^{n / \lambda}\left(1-\frac{\lambda x}{n}\right)^{n-1} f_{n}(x) d x
$$

(c) Derive from part (b) by a limiting argument that $\phi(\lambda)=\int_{0}^{\infty} e^{-\lambda x} d \mu$
for some probability measure $\mu$ on $\left(\mathbb{R}_{+}, \mathscr{B}\left(\mathbb{R}_{+}\right)\right.$).

(d) Consider the case $\phi(\infty)>0$.
