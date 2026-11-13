---
tag: 2XJ9GKQH1V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90690
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sets $A$ and $B$ and be form a partition of positive integers if $A \cap B=\emptyset$ and $A \cup B=N$. The set $S$ is called prohibited for the partition, if $k+l \neq s$ for any $k, l \in A, s \in S$ and any $k, l \in B, s \in S$.

a) Define Fibonacci numbers $f_{i}$ by letting $f_{1}=1, f_{2}=2$ and $f_{i+1}=f_{i}+f_{i-1}$, so that $f_{3}=3, f_{4}=5$ etc. How many partitions for with the set $F$ of all Fibonacci numbers is prohibited are there? (We count $A, B$ and $B, A$ as the same partition.)

b) How many partitions for which the set $P$ of all powers of 2 is prohibited are there? What if we require in addition that $P \subseteq A$ ?
