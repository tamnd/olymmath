---
tag: NKCXN1P753
kind: problem
type: answer
answer: (3,1,2),(5,2,2),(4,1,4),(6,2,4),(5,1,6)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105790
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Integers can be written in bases other than the usual base 10 . For example, the notation $(235)_{7}$ stands for the base 7 representation of the integer $2 \times 7^{2}+3 \times 7+5$ (which equals 124 in base 10). In general, if $x, y$ and $z$ are integers between 0 and $b-1$, inclusive, then $(x y z)_{b}=x b^{2}+y b+z$.
Find all triples $(x, y, z)$ for which $(x y z)_{10}=2(x y z)_{7}$, where each of $x, y$ and $z$ comes from the list $1,2,3,4,5,6$.
