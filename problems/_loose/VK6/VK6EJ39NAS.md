---
tag: VK6EJ39NAS
kind: problem
type: answer
answer: p_1 + p_2 - p_3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259637
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The random variables $X, Y$ can each take a finite number of integer values. They are not necessarily independent. Express $P(\min(X,Y)=k)$ in terms of $p_1=P(X=k)$, $p_2=P(Y=k)$ and $p_3=P(\max(X,Y)=k)$.
