---
tag: HAG2B9JYSV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231807
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M, k>0$ integers.

Let $X(M,k)$ the (infinite) set of all integers that can be factored as ${p_1}^{e_1} \cdot {p_2}^{e_2} \cdot \ldots \cdot {p_r}^{e_r}$ where each $p_i$ is not smaller than $M$ and also each $e_i$ is not smaller than $k$.

Let $Z(M,k,n)$ the number of elements of $X(M,k)$ not bigger than $n$.

Show that there are positive reals $c(M,k)$ and $\beta(M,k)$ such that

$$\lim_{n \rightarrow \infty}{\frac{Z(M,k,n)}{n^{\beta(M,k)}}} = c(M,k)$$

and find $\beta(M,k)$
