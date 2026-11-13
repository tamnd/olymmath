---
tag: BC7GDFFYV4
kind: problem
type: answer
answer: "15"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265373
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, let $f(n)$ be the sum of the positive integers that divide at least one of the nonzero base $10$ digits of $n$. For example, $f(96)=1+2+3+6+9=21$. Find the largest positive integer $n$ such that for all positive integers $k$, there is some positive integer $a$ such that $f^k(a)=n$, where $f^k(a)$ denotes $f$ applied $k$ times to $a$.

*2021 CCA Math Bonanza Lightning Round #4.3*
