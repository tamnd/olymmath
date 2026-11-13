---
tag: PT5D76JYRT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239061
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $\{a_n\}_{n\geq 1}$ as $a_n=n-1$, $n\leq 2$ and $a_n=$ remainder left by $a_{n-1}+a_{n-2}$ when divided by $3$ $\forall n\geq 2$. Then $\sum_{i=2018}^{2025}a_i=$?

(A)$6$
(B)$7$
(C)$8$
(D)$9$
