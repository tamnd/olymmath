---
tag: 2QAYYD8VMN
kind: problem
type: answer
answer: Smallest |A| = ceil(log2(n + 1)); Largest |A| = floor((sqrt(8n + 1) − 1) / 2).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 2022$ be an integer and $A$ be a finite set so that $\{S(B) \mid B \subset A\} = \{1, 2, \dots, n\}$, where $S(X)$ is the sum of the elements of the set $X$. Find the smallest and the largest possible value of the cardinal of the set $A$.
