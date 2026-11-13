---
tag: VC85P0BZTH
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $a_n$ of real numbers satisfies $a_1=1$, $a_2=0$, and $a_n=(S_{n-1}+1)S_{n-2}$ for all integers $n\geq3$, where $S_k=a_1+a_2+\dots+a_k$ for positive integers $k$. What is the smallest integer $m>2$ such that $127$ divides $a_m$?

*2020 CCA Math Bonanza Individual Round #9*
