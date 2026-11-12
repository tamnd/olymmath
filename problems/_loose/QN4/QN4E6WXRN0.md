---
tag: QN4E6WXRN0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 India IMOTC
    url: https://artofproblemsolving.com/community/c6h3331066
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2024
    source: hf-ai-mo-aops
    label: 2024 India IMOTC
---
Denote by $\mathbb{S}$ the set of all proper subsets of $\mathbb{Z}_{>0}$ . Find all functions $f : \mathbb{S} \mapsto \mathbb{Z}_{>0}$ that satisfy the following:

___1. For all sets $A, B \in \mathbb{S}$ we have $$f(A \cap B) = \text{min}(f(A), f(B)).$$
___2. For all positive integers $n$ we have $$\sum \limits_{X \subseteq [1, n]}
f(X) = 2^{n+1}-1.$$

(Here, by a proper subset $X$ of $\mathbb{Z}_{>0}$ we mean $X \subset \mathbb{Z}_{>0}$ with $X \ne \mathbb{Z}_{>0}$ . It is allowed for $X$ to have infinite size.)

*Proposed by MV Adhitya, Kanav Talwar, Siddharth Choppara, Archit Manas*
