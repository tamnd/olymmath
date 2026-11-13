---
tag: HJXMZAXPF4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a non-zero function $f(x)$ with domain $\mathbf{R}$, for any $x_{1}, x_{2} \in \mathbf{R}$, it always holds that $f\left(x_{1}\right)+f\left(x_{2}\right)=$ $2 f\left(\frac{x_{1}+x_{2}}{2}\right) \cdot f\left(\frac{x_{1}-x_{2}}{2}\right)$, and $f\left(\frac{\pi}{2}\right)=0$. Prove:
(1) $f(x)$ is a periodic function, and $2 \pi$ is one of its positive periods;
(2) $f(x)$ is an even function;
(3) $f\left(2^{n} x\right)=2 f^{2}\left(2^{n-1} x\right)-1, n \in \mathbf{N}$.
