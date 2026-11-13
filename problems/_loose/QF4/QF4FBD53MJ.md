---
tag: QF4FBD53MJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\mathbb{S}$ be the set of all functions $f:\mathbb{Z}\rightarrow \mathbb{R}$. Now, consider the function $g:\mathbb{S} \rightarrow \mathbb{S} ,g(f(x)) = f(x + 1)-f(x)$. Now, we call a function $f \in \mathbb{S}$ good if $g^n(f(x))=0$ for some natural $n$.
Prove that if $s \not = t \in S$ are good functions then $s(m)-t(m)$ is 0 for only finitely many $m \in \mathbb{Z}$.
