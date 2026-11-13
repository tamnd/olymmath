---
tag: MJSZYWEFVR
kind: problem
type: answer
answer: a_n = 1 - \frac{1}{n^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence $a_1=0,\ \frac{1}{1-a_{n+1}}-\frac{1}{1-a_n}=2n+1\ (n=1,\ 2,\ 3,\ \cdots)$.

(1) Find $a_n$.

(2) Let ${b_k=\sqrt{\frac{k+1}{k}}\ (1-\sqrt{a_{k+1}}})$ for $k=1,\ 2,\ 3,\ \cdots$.

Prove that $\sum_{k=1}^n b_k<\sqrt{2}-1$ for each $n$.

Last Edited
