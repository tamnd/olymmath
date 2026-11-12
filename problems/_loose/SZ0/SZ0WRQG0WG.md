---
tag: SZ0WRQG0WG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for multinomial (polynomial) coefficients

$$
C_{N}\left(n_{1}, \ldots, n_{r}\right)=\frac{N!}{n_{1}!\ldots n_{r}!}, n_{1}+\ldots+n_{r}=N, n_{i} \geqslant 0
$$

the following formula (Vandermonde's multinomial convolution) holds:

$$
C_{N_{1}+N_{2}}\left(n_{1}, \ldots, n_{r}\right)=\sum C_{N_{1}}\left(k_{1}, \ldots, k_{r}\right) C_{N_{2}}\left(n_{1}-k_{1}, \ldots, n_{r}-k_{r}\right)
$$

where the sum is taken over all $k_{i} \geqslant 0$ such that $k_{i} \leqslant n_{i}$ and $\sum_{i=1}^{r} k_{i}=N_{1}$, $n_{1}+\ldots+n_{r}=N_{1}+N_{2}$.
