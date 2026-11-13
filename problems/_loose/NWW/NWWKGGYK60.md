---
tag: NWWKGGYK60
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Are the following functions convex? If not, is there an interval on which they are?

$$
x^{2 n} ; x^{2 n+1} ; \cos (x) ; e^{x}
$$

the step function: $f(x)=0$ if $x \leq 0,1$ if $x>0$.

Theorem 1.77. Let $f$ be a convex function. We choose $n$ real numbers $\left(x_{1}, \ldots, x_{n}\right)$ and $n$ "weights" $\left(\alpha_{1}, \ldots, \alpha_{n}\right)$ satisfying $0 \leq \alpha_{i} \leq 1$ and $\alpha_{1}+\cdots+\alpha_{n}=1$. Then

$$
\alpha_{1} f\left(x_{1}\right)+\cdots+\alpha_{n} f\left(x_{n}\right) \geq f\left(\alpha_{1} x_{1}+\cdots+\alpha x_{n}\right)
$$

Remark: By taking in particular $\alpha_{1}=\cdots=\alpha_{n}=1 / n$, we have the following equation:

$$
\frac{f\left(x_{1}\right)+\cdots+f\left(x_{n}\right)}{n} \geq f\left(\frac{x_{1}+\cdots+x_{n}}{n}\right)
$$
