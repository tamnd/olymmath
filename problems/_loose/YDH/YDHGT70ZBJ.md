---
tag: YDHGT70ZBJ
kind: problem
type: answer
answer: "19999999999999999999999"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For natural number $n$, define the function $f(n)$ to be the number you get by $f(n)$ adding the digits of the number $n$. For example, $f(16)=7$, $f(f(78))=6$, and $f(f(f(5978)))=2$.
Find the least natural number $n$ such that $f(f(f(n)))$ is not a one-digit number.
