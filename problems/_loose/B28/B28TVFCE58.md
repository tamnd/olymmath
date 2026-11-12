---
tag: B28TVFCE58
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33809
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(On Fubini's Theorem.) Show that Fubini's theorem remains valid if the finiteness of the measures $\mu_{1}$ and $\mu_{2}$ involved in its formulation is replaced by their $\sigma$-finiteness.

The following example shows that without the assumption of $\sigma$-finiteness, the statement of Fubini's theorem may not hold.

Let $\lambda = \lambda(dx)$ be the Lebesgue measure, $\mu = \mu(dy)$ be the counting measure on $[0,1]$. Denote by $D$ the diagonal in $[0,1]^2$. Then

$$
\int_{0}^{1} \mu(dy) \int_{0}^{1} I_{D}(x, y) \lambda(dx) = 0 \text{and} \int_{0}^{1} \lambda(dx) \int_{0}^{1} I_{D}(x, y) \mu(dy) = 1
$$
