---
tag: FZ2711QPXN
kind: problem
type: answer
answer: "22"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Use $ \log_{10} 2 = 0.301,\ \log_{10} 3 = 0.477,\ \log_{10} 7 = 0.845$ to find the value of $ \log_{10} (10!)$.
Note that you must answer according to the rules:fractional part of $ 0.5$ and higher is rounded up, and everything strictly less than $ 0.5$ is rounded down,
say $ 1.234\longrightarrow 1.23$. Then find the minimum integer value $ n$ such that $ 10! < 2^{n}$.
