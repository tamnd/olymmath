---
tag: AAJ1RPFQPK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
2004 computers make up a network using several cables. If for a subset $S$ in the set of all computers, there isn't a cable that connects two computers in $S$, $S$ is called independant. One lets the arbitrary independant set consists at most 50 computers, and uses the least number of cables.

(1) Let $c(L)$ be the number of cables which connects the computer $L$. Prove that for two computers $A,B$, $c(A)=c(B)$ if there is a cable which connects $A$ and $B$, $|c(A)-c(B)|\leq 1$ otherwise.

(2) Determine the number of used cables.
