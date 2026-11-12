---
tag: 4C7ZH1GZQC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33743
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [79].) Prove the validity of the following result on integration by substitution in $\mathbb{R}^{n}$.

Let $\varphi=\left(\varphi_{1}(y), \ldots, \varphi_{n}(y)\right)$ be a smooth (up to the second order) mapping from $\mathbb{R}^{n}$ to $\mathbb{R}^{n}, \varphi(y)=y$ outside some ball, and

$f=f(x)$ be a Lebesgue integrable function with a compact support on $\mathbb{R}^{n}$. Then the function $f(\varphi(y)) \operatorname{det} \varphi^{\prime}(y)$ is integrable and

$$
\int_{\mathbb{R}^{n}} f(x) d x=\int_{\mathbb{R}} f(\varphi(y)) \operatorname{det} \varphi^{\prime}(y) d y
$$

where $\varphi^{\prime}(y)=\left(\nabla \varphi_{1}(y) \ldots \nabla \varphi_{n}(y)\right)^{\top},$ and $\nabla$ denotes the gradient.

Remark. The classical formulation of the change of variables theorem in the Lebesgue integral in $\mathbb{R}^{n}$ is as follows. Let $I$ be an open set in $\mathbb{R}^{n}$ and $\varphi=\varphi(y)$ be a function defined for $y=\left(y_{1}, \ldots, y_{n}\right) \in I$, with values in $\mathbb{R}^{n}$. Suppose also that the (matrix) derivative $\varphi^{\prime}$ exists, is continuous, and $\left|\operatorname{det} \varphi^{\prime}(y)\right|>0, y \in I$. Then the set $\varphi(I)$ is open, the inverse mapping $\varphi^{-1}$ is uniquely defined on it, and for any non-negative or integrable function $f=f(x), x \in I$, the formulas

$$
\int_{I} f(x) d x=\int_{\varphi(I)} f\left(\varphi^{-1}(y)\right) \frac{d y}{\left|\operatorname{det} \varphi^{\prime}(y)\right|}=\int_{\varphi(I)} f\left(\varphi^{-1}(y)\right)\left|\operatorname{det}\left(\varphi^{-1}\right)^{\prime}(y)\right| d y .
$$

are valid.
