---
tag: 6AMS4JKVBP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h110420
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44301
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240574
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (3rd Round)
---
Let $E$ be a family of subsets of $\{1,2,\ldots,n\}$ with the property that for each $A\subset \{1,2,\ldots,n\}$ there exist $B\in F$ such that $\frac{n-d}2\leq |A \bigtriangleup B| \leq \frac{n+d}2$ . (where $A \bigtriangleup B = (A\setminus B) \cup (B\setminus A)$ is the symmetric difference). Denote by $f(n,d)$ the minimum cardinality of such a family.
a) Prove that if $n$ is even then $f(n,0)\leq n$ .
b) Prove that if $n-d$ is even then $f(n,d)\leq \lceil \frac n{d+1}\rceil$ .
c) Prove that if $n$ is even then $f(n,0) = n$
