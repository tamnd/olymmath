---
tag: XYEY49EB2H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's call a function $f: \mathbb{R}^{d} \rightarrow \mathbb{R}$ almost differentiable if for some measurable function $g: \mathbb{R}^{d} \rightarrow \mathbb{R}$, the following equality holds:

$$
f(b)-f(a)=\int_{0}^{1}(b-a)^{\top} g(a+x(b-a)) d x, a, b \in \mathbb{R}^{d}
$$

In this case, we will write $\nabla f=\left(f_{x_{1}}^{\prime}, \ldots, f_{x_{d}}^{\prime}\right)=g$ for $d>1$ and $f^{\prime}=g$ for $d=1$.

Let $\xi \sim \mathscr{N}(0,1)$. Prove Stein's lemma [103]:

$$
\mathrm{E}\left|f^{\prime}(\xi)\right|<\infty \Rightarrow \mathrm{E}|\xi f(\xi)|<\infty, \mathrm{E} \xi f(\xi)=\mathrm{E} f^{\prime}(\xi)
$$

for any almost differentiable function $f: \mathbb{R} \rightarrow \mathbb{R}$.

Let $\eta$ be an arbitrary random vector whose components, together with $\xi$, form a Gaussian system. Generalizing the previous statement, show that

$$
\mathrm{E} \sum_{i=1}^{d}\left|f_{x_{i}}^{\prime}(\eta)\right|<\infty \Rightarrow \mathrm{E}|\xi f(\eta)|<\infty, \mathrm{E} \xi f(\eta)=[\mathrm{E} \nabla f(\eta)]^{\top} \mathrm{E} \xi \eta
$$

for any almost differentiable function $f: \mathbb{R}^{d} \rightarrow \mathbb{R}$.
