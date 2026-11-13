---
tag: RABNB33EZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269362
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1,\ldots,x_n$ be given real numbers with $0<m\le x_i\le M$ for each $i\in\{1,\ldots,n\}$. Let $X$ be the discrete random variable uniformly distributed on $\{x_1,\ldots,x_n\}$. The mean $\mu$ and the variance $\sigma^2$ of $X$ are defined as
$$\mu(X)=\frac{x_1+\ldots+x_n}n\text{ and }\sigma^2(X)=\frac{(x_1-\mu(X))^2+\ldots+(x_n-\mu(X))^2}n.$$
By $X^2$ denote the discrete random variable uniformly distributed on $\{x_1^2,\ldots,x_n^2\}$. Prove that
$$\sigma^2(X)\ge\left(\frac m{2M^2}\right)^2\sigma^2(X^2).$$
