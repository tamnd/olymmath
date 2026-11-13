---
tag: GBXTWH8P55
kind: problem
type: answer
answer: a_{n}=f(k)+[n-1-\frac{k(k-1)}{2}],wherek=[\frac{1+\sqrt{8n-7}}{2}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117376
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ and $g(x)$ be increasing functions defined on the set of positive integers, and for any $k \in \mathbf{N}^{+}$, we have $f(k+1) + g(0) > f(k) + g(k-1)$. The sequence $\left\{a_{n}\right\}$ is formed by arranging all the numbers in the set $M=\{f(t)+g(s) \mid 0 \leqslant s<t, s, t \in \mathbf{N}\}$ in ascending order. Find the general term formula for the sequence $\left\{a_{n}\right\}$.
