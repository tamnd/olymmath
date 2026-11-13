---
tag: WNSNQEMD79
kind: problem
type: answer
answer: "65"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180000
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a natural number $n$. We say that a triplet of non-zero natural numbers, not necessarily distinct, $(x, y, z)$ is of type $n$ if $x+y+z=n$ and we denote by $s(n)$ the number of triplets of type $n$.

a) Show that there is no natural number $n$ for which $s(n)=14$.

b) Determine the smallest natural number $n$ for which $s(n)>2014$.
