---
tag: V237XCD6EQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ $ $ $ $ $ $ $There is a group of more than three airports. For any two airports $A, B$ belonging to this group, if there is an aircraft from $A$ to $ $ $B$, there is an aircraft from $B$ to $ $ $A$.
For a list of different airports $A_0,A_1,...A_n$, define this list as a 'route' if there is an aircraft from $A_i$ to $A_{i+1}$ for each $i=0,1,...,n-1$. Also, define the beginning of this route as $A_0$, the end as $A_n$, and the length as $n$. ($n\in \mathbb N$)
$ $ $ $ $ $ $ $Now, let's say that for any three different pairs of airports $(A,B,C)$, there is always a route $P$ that satisfies the following condition.

$ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ $ **Condition**: $P$ begins with $A$ and ends with $B$, and does not include $C$.

$ $ $ $ $ $When the length of the longest of the existing routes is $M$ ($\ge 2$), prove that any two routes of length $M$ contain at least two different airports simultaneously.
