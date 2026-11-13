---
tag: 1RQT1DNKFJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\phi_n(m) = \phi(\phi_{n-1}(m))$, where $\phi_1(m) = \phi(m)$ is the Euler totient function, and set $\omega(m)$ the smallest number $n$ such that $\phi_n(m) = 1$. If $m < 2^\alpha$, then prove that $\omega(m) \le \alpha$.
