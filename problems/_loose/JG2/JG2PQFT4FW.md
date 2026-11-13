---
tag: JG2PQFT4FW
kind: problem
type: answer
answer: n\cdot2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\{1,2,3, \cdots \cdots n\}$, and $A$ be a subset of $S$. Arrange the elements of $A$ in descending order, then alternately subtract or add the subsequent numbers starting from the largest number to get the alternating sum of $A$. For example, if $A=\{1,4,9,6,2\}$, rearranging it gives $\{9,6,4,2,1\}$, and its alternating sum is $9-6+4-2+1=9$. Find the sum of all such alternating sums.
