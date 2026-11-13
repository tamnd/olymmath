---
tag: WQQ9MAZTPZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of polynomials $ \left\{P_n(x)\right\}_{n=0}^{+\infty}$ is defined inductively by $ P_0(x) = 0$ and $ P_{n+1}(x) = P_n(x)+\frac{x - P_n^2(x)}{2}$. Prove that for any $ x \in [0, 1]$ and any natural number $ n$ it holds that $ 0\le\sqrt x- P_n(x)\le\frac{2}{n + 1}$.
