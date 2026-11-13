---
tag: RX47FVBHPP
kind: problem
type: answer
answer: "2024"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205053
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A positive integer $n$ is called $\textit{good}$ if $2 \mid \tau(n)$ and if its divisors are $$1=d_1<d_2<\ldots<d_{2k-1}<d_{2k}=n, $$ then $d_{k+1}-d_k=2$ and $d_{k+2}-d_{k-1}=65$. Find the smallest $\textit{good}$ number.
