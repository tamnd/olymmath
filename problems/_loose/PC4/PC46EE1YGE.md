---
tag: PC46EE1YGE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a random variable with characteristic function $\varphi=\varphi(t)$ such that $\int_{\mathbb{R}}|\varphi(t)| d t<\infty$. Using the fact that $\psi(t)=(1-|t|)^{+}$ is the characteristic function of a distribution with density

$$
g(x)=\frac{1-\cos x}{\pi x^{2}}, x \in \mathbb{R}
$$

prove that $X$ has a bounded continuous density given by the formula

$$
f(x)=\frac{1}{2 \pi} \int_{\mathbb{R}} e^{-i t x} \varphi(t) d t, x \in \mathbb{R}
$$
