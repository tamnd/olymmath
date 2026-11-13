---
tag: SNK6590VMM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245815
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Fibonacci sequence $\{F_{n}\}$ is defined by $$F_{1}=1, F_{2}=1, F_{n+2}=F_{n+1}+F_{n}.$$ Show that $\gcd (F_{m}, F_{n})=F_{\gcd (m, n)}$ for all $m, n \in \mathbb{N}$.
