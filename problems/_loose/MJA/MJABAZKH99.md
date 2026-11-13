---
tag: MJABAZKH99
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179810
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f:[a ; b] \rightarrow \mathbb{R}$ be a differentiable function with the property that

$$
(b-a) \cdot f^{\prime}(x) \leq k, (\forall) x \in[a, b]
$$

Show that $\frac{1}{b-a} \int_{a}^{b} f(x) \mathrm{d} x \leq \frac{k}{2}+f(a)$.
