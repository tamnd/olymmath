---
tag: YHS8C21WPJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82437
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that $\varphi:(\mathbf{a}, \mathbf{b}) \mapsto \sum_{i=1}^{n} i^{2} a_{i} b_{i}$ and $\psi:(\mathbf{a}, \mathbf{b}) \mapsto \varphi(\mathbf{a}, \mathbf{b})+\left(a_{1}+a_{2}\right)\left(b_{1}+b_{2}\right)$ are inner products, but that $\theta:(\mathbf{a}, \mathbf{b}) \mapsto \sum_{i \neq j} a_{i} b_{j}$ is not one.

Moreover, the positive definiteness of the inner product is a crucial property, as it allows us to say that the inner product of two $n$-tuples is always less than or equal to the product of their norms: this is the Cauchy-Schwarz inequality.

Theorem 56. Let $\varphi: \mathbb{R}^{n} \times \mathbb{R}^{n} \mapsto \mathbb{R}$ be an inner product, and let $\mathbf{a}$ and $\mathbf{b}$ be two $n$-tuples. Then $\varphi(\mathbf{a}, \mathbf{b})^{2} \leq \varphi(\mathbf{a}, \mathbf{a}) \varphi(\mathbf{b}, \mathbf{b})$, with equality if and only if $\mathbf{a}$ and $\mathbf{b}$ are proportional to each other.
