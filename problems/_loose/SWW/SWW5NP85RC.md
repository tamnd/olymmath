---
tag: SWW5NP85RC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all the positive integers $n$ for which there exists a Family $\mathcal{F}$ of three-element subsets of $S=\{1,2,...,n\}$ satisfying
$$\text{(i) for any two different elements $a,b \in S$ there exists exactly one $A \in \mathcal{F}$ containing both $a$ and $b$;}$$
$$\text{(ii) if $a,b,c,x,y,z$ are elements of $S$ such that $\{a,b,x\},\{a,c,y\},\{b,c,z\} \in \mathcal{F}$, then $\{x,y,z\} \in \mathcal{F} $ }.$$
