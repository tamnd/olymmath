---
tag: 9EW6JNX8BE
kind: problem
type: answer
answer: \binom{2n+2}{n+1}-\binom{2n+2}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169708
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The trunk of the sky-high tree branches into two at a height of one foot. In the following, we consider the part between two branches as a branch, on which there is no further branching. Every branch of the sky-high tree is straight and ends one foot higher than its end closer to the ground. We consider the children of a branch to be the branches starting from the higher end of the branch, which are also considered siblings to each other. Every branch of the sky-high tree has at least two children, and if it does not have exactly two children, then it has a sibling who has exactly two children. Siblings always have a different number of children. If a branch has more than two children, then it has a sibling who has exactly one child less than it. How many branches start from the branches at a height of $n$ feet?
