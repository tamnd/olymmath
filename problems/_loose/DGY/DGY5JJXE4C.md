---
tag: DGY5JJXE4C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1422722
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78582
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267429
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
Let $S$ denote the set of subsets of $\{1,2,\ldots,2017\}$ . For two sets $A$ and $B$ of integers, define $A\circ B$ as the *symmetric difference* of $A$ and $B$ . (In other words, $A\circ B$ is the set of integers that are an element of exactly one of $A$ and $B$ .) Let $N$ be the number of functions $f:S\rightarrow S$ such that $f(A\circ B)=f(A)\circ f(B)$ for all $A,B\in S$ . Find the remainder when $N$ is divided by $1000$ .

*Proposed by Michael Ren*
