---
tag: FBRXXC7SA7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove the information inequality stating that

$$
\int_{\mathbb{R}} f(x) \ln \frac{f(x)}{g(x)} d x > 0
$$

for any two densities $f$ and $g$ such that $\lambda(x: f(x) \neq g(x)) \neq 0$, where $\lambda$ is the Lebesgue measure. (It is assumed that $0 \cdot \ln 0 / 0 = 0 \cdot \ln 0 / a = 0$ and $a \cdot \ln a / 0 = \infty$ for $a > 0$.)

Derive from this that

$$
\inf \int_{\mathbb{R}} f(x) \ln f(x) d x
$$

over all densities $f$ such that $\int_{\mathbb{R}} x^{2} f(x) d x = 1$, is achieved (only) at

$$
\varphi(x) = \frac{e^{-x^{2} / 2}}{\sqrt{2 \pi}}, x \in \mathbb{R}
$$
