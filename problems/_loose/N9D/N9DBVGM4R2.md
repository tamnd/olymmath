---
tag: N9DBVGM4R2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that

$$
\begin{aligned}
& C_{k+1}^{k} S_{k}(n)+C_{k+1}^{k-1} S_{k-1}(n)+\ldots+C_{k+1}^{1} S_{1}(n)+S_{0}(n)= \\
& =(n+1)^{k+1}-1
\end{aligned}
$$

b) Prove that for a fixed $k$, the sum $S_{k}(n)$ is a polynomial of degree $k+1$ in $n$ with the leading coefficient $\frac{n^{k+1}}{k+1}$.
