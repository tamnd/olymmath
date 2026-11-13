---
tag: QJDTA6B8TY
kind: problem
type: answer
answer: 2^{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129344
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\{1,2,3, \cdots, 4 n+2\}, M=\{2 n+1,4 n+3,6 n+5\}$. For any non-empty subset $B$ of $A$, if the sum of any two numbers in $B$ does not belong to $M$, then $B$ is called an $M$-free set. If $A=A_{1} \cup A_{2}, A_{1} \cap A_{2}=$ $\varnothing$, and $A_{1}, A_{2}$ are both $M$-free sets, then the ordered pair $\left(A_{1}, A_{2}\right)$ is called an $M$-partition of $A$. Try to find the number of all $M-$ partitions of $A$.
