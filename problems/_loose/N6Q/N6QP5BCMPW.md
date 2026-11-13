---
tag: N6QP5BCMPW
kind: problem
type: answer
answer: 4 + 8k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260392
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1=0$, $a_2=1$, and $a_{n+2}=a_{n+1}+a_n$ for all positive integers $n$. Show that there exists an increasing infinite arithmetic progression of integers, which has no number in common in the sequence $\{a_n\}_{n \ge 0}$.
