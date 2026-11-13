---
tag: QSPG953AFP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S(x)$ denote the sum of the digits of the positive integer $x$ in decimal notation. Define $f_{k}(n)=\frac{S\left(\mathrm{kn}^{2}\right)}{S\left(\mathrm{n}^{3}\right)}$ $\left(k, n \in Z^{+}\right)$. Prove: For any $k \in Z^{+}$, there exist infinitely many $n \in Z^{+}, n \geq 2$, such that $f_{k}(n)<$ $\min _{1 \leq i \leq n-1}\left\{f_{k}(i)\right\}$.
