---
tag: E53ZFVKYHS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ a$, $ b$ and $ k$ be three positive integers.
We define two sequences $ \left( a_{n}\right)$ and $ \left( b_{n}\right)$ by the starting values $ a_{1}=a$ and $ b_{1}=b$ and the recurrent equations $ a_{n+1}=ka_{n}+b_{n}$ and $ b_{n+1}=kb_{n}+a_{n}$ for each positive integer $ n$.
Prove that if $ a_{1}\perp b_{1}$, $ a_{2}\perp b_{2}$ and $ a_{3}\perp b_{3}$ hold, then $ a_{n}\perp b_{n}$ holds for every positive integer $ n$.

Here, the abbreviation $ x\perp y$ stands for "the numbers $ x$ and $ y$ are coprime".
