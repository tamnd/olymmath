---
tag: XE6R0VPK4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $P$ a real polynomial with degree greater than $ 1$.
Find all pairs $(f,Q)$ with function $f : R \to R$ and the real polynomial $Q$ satisfying the following two conditions:
i) for all $x, y \in R$, we have $f(P(x) + f(y)) = y + Q(f(x))$.
ii) there exists $x_0 \in R$ such that $f(P(x_0)) = Q(f(x_0))$.
