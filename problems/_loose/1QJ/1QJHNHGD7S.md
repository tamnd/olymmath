---
tag: 1QJHNHGD7S
kind: problem
type: answer
answer: \frac{n(n-1)}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109623
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geqslant 2$. On the blackboard, there are $n$ sets, and the following operation is performed: select two sets $A$ and $B$ on the blackboard that do not contain each other, erase them, and then write $A \cap B$ and $A \cup B$. This is called one operation. Continue operating until any two sets on the blackboard have one that contains the other. For all initial states and operation methods, find the maximum possible number of operations.
(Zhu Huawei)
