---
tag: 1WWMD3DYGZ
kind: problem
type: answer
answer: "708"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177750
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0000.parquet#row=217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Denote by $d(a, b)$ the number of the divisors of a positive integer $a$, which are greater than or equal to $b$. Find all positive integers $n$ such that

$$
d(3 n+1,1)+d(3 n+2,2)+\cdots+d(4 n, n)=2006
$$

Ivan Landjev
