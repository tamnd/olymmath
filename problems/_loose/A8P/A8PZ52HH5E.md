---
tag: A8PZ52HH5E
kind: problem
type: answer
answer: p_n = 1 - \left(\frac{5}{6}\right)^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ n\geq 3$ be integer. Throw a dice $ n$ times, let $ X_1,\ X_2,\ \cdots ,\ X_n$ be the number of the outcome in this order respectively. For $ i = 2,\ 3,\ \cdots ,\ n$, denote $ A_i$ the event such that $ X_i = X_{i - 1}$.

(1) What's the probability $ p_n$ that at least one of $ A_2,\ A_3,\ \cdots ,\ A_n$ occurs?

(2) What's the probability $ q_n$ that at least two of $ A_2,\ A_3,\ \cdots ,\ A_n$ occurs?
