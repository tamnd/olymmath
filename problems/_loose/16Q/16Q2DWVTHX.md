---
tag: 16Q2DWVTHX
kind: problem
type: answer
answer: "99"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223974
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ f(x)$ is a given polynomial whose degree at least 2. Define the following polynomial-sequence: $ g_1(x)=f(x), g_{n+1}(x)=f(g_n(x))$, for all $ n \in N$. Let $ r_n$ be the average of $ g_n(x)$'s roots. If $ r_{19}=99$, find $ r_{99}$.
