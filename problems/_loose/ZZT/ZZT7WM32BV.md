---
tag: ZZT7WM32BV
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $P_{1}\left(x_{1}, y_{1}\right), P_{2}\left(x_{2}, y_{2}\right), \cdots$, $P_{n}\left(x_{n}, y_{n}\right), \cdots$, where $x_{1}=1, y_{1}=0, x_{n+1}=$ $x_{n}-y_{n}, y_{n+1}=x_{n}+y_{n}\left(n \in \mathbf{Z}_{+}\right)$. If $a_{n}=$ $\overrightarrow{P_{n} P_{n+1}} \cdot \overrightarrow{P_{n+1} P_{n+2}}$, then the smallest positive integer $n$ that satisfies $\sum_{i=1}^{n} a_{i}>1000$ is $n=$ $ $
