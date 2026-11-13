---
tag: A5A0YMHCWT
kind: problem
type: answer
answer: n = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221688
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Integers $a_1, a_2, \dots a_n$ are different at $\text{mod n}$. If $a_1, a_2-a_1, a_3-a_2, \dots a_n-a_{n-1}$ are also different at $\text{mod n}$, we call the ordered $n$-tuple $(a_1, a_2, \dots a_n)$ *lucky*. For which positive integers $n$, one can find a lucky $n$-tuple?
