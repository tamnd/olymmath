---
tag: 5YAHY4CMQQ
kind: problem
type: answer
answer: \frac{n}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216921
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ numbers different from $0$, ($n \in \mathbb{N}$) which are arranged randomly. We do the following operation: Choose some consecutive numbers in the given order and change their sign (i.e. $x \rightarrow -x$). What is the minimum number of operations needed, in order to make all the numbers positive for any given initial configuration of the $n$ numbers?
