---
tag: Y56EAM13ME
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214762
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ and $k$ be positive integers, and let be the sets $X=\{1,2,3,...,n\}$ and $Y=\{1,2,3,...,k\}$.
Let $P$ be the set of all the subsets of the set $X$. Find the number of functions $ f: P \to Y$ that satisfy $f(A \cap B)=\min(f(A),f(B))$ for all $A,B \in P$.
