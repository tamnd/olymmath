---
tag: 1G72BX7TNR
kind: problem
type: answer
answer: 74^{33}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111751
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=3x+2$, define $f^{(2)}(x)=f(f(x)), f^{(k+1)}(x)=f\left(f^{(k)}(x)\right),\left(k \in \mathbf{N}^{*}\right)$, prove that there exists a positive integer $m$ such that $f^{(99)}(m)$ is divisible by 1997.
