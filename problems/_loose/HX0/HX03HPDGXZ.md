---
tag: HX03HPDGXZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Let

$$
S=C_{k}^{1} S_{2 k-1}(n)+C_{k}^{3} S_{2 k-3}(n)+C_{k}^{5} S_{2 k-5}(n)+\ldots
$$

where the last term in this sum is $C_{k}^{k} S_{k}(n)$ for odd $k$ and $C_{k}^{k-1} S_{k+1}(n)$ for even $k$. Prove that $S=\frac{n^{k}(n+1)^{k}}{2}$.

b) Prove that $S_{2 k-1}(n)$ is a polynomial of degree $k$ in $\frac{n(n+1)}{2}$ (for a fixed $k$).
