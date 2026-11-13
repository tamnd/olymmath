---
tag: PCBE33MXR3
kind: problem
type: answer
answer: \alpha\in(1,\sqrt[4]{13})\cup{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110581
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the 74th question, for real $\alpha>1$, define the infinite sequence $\left\{a_{n}\right\}_{n \in \mathbb{N}}: a_{n}=\left[\alpha^{n}\right]$. If for any $m \in \mathbb{Z}^{+}$, there exist a positive integer $k$ and $k$ natural numbers $0 \leq i_{1}<i_{2}<\ldots<i_{k}$, such that $m=\sum_{j=1}^{k} a_{i j}$, find all possible values of $\alpha$.
