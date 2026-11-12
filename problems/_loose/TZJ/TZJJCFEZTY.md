---
tag: TZJJCFEZTY
kind: problem
type: answer
answer: 524289=2^{19}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=\sin (\pi x)$. How many roots does the function $\underbrace{f(f(f(\ldots f(x) \ldots)))}_{20 \text { times }}$ have on the interval $[0 ; 1]$?
