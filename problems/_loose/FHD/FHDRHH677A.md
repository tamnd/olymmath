---
tag: FHDRHH677A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=120658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The main proposition to be proved is that every subspace $C$ that satisfies the conditions is a circle. Let $A \subseteq C$ be an arc connecting two vertices $x_{0}$ and $y_{0}$. If $v$ is any vertex in $C \backslash A$, then the connectivity of $C$ yields a $v-A$ arc in $C$, which is the first point on $A$, and by the degree condition, it must be $x_{0}$ or $y_{0}$. Starting from an ordering of the vertices of $C$, $v_{0}, v_{1}, \ldots$, construct an infinite sequence of 2-paths ... $x_{-2}, x_{-1}, x_{0}, y_{0}, y_{1}, y_{2} \ldots$ such that $C$ contains an arc $A_{i}$ connecting $x_{-i-1}$ to $x_{-i}$, and an arc $B_{i}$ connecting $y_{i}$ to $y_{i+1}$ (for all $i \in \mathbb{N}$), so that the union $U$ of $A$ and all these arcs is a $(0,1)$-homotopy copy in $C$. Use the connectivity of its "tail" to prove that they converge to the unique end of $C$. Derive from the assumption that these two ends coincide, and $\bar{U}=C$ is a circle.
