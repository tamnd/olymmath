---
tag: 7CYARK6CAF
kind: problem
type: answer
answer: "120"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227610
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the largest integer $N$, for which there exists a $6\times N$ table $T$ that has the following properties:
$*$ Every column contains the numbers $1,2,\ldots,6$ in some ordering.
$*$ For any two columns $i\ne j$, there exists a row $r$ such that $T(r,i)= T(r,j)$.
$*$ For any two columns $i\ne j$, there exists a row $s$ such that $T(s,i)\ne T(s,j)$.

(Proposed by Gerhard Woeginger, Austria)
