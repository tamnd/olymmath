---
tag: DFMYBP4YV7
kind: problem
type: answer
answer: "42"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221469
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Call a positive integer $k$ $\textit{pretty}$ if for every positive integer $a$, there exists an integer $n$ such that $n^2+n+k$ is divisible by $2^a$ but not $2^{a+1}$. Find the remainder when the $2021$st pretty number is divided by $1000$.

*Proposed by i3435*
