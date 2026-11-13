---
tag: WJR81PT8XC
kind: problem
type: answer
answer: f(n) = -n + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=86
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2011
    source: hf-mathnet
    label: Croatia CroatianCompetitions2011
---
Find all functions $f : \mathbb{Z} \to \mathbb{Z}$ such that
$$
f(f(a) + f(b)) = a + b - 1
$$
for all $a, b \in \mathbb{Z}$.
