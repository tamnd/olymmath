---
tag: MRRKTTCZ1K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h565604
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10018
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212014
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
The number $\frac{1}{2}$ is written on a blackboard. For a real number $c$ with $0 < c < 1$ , a *$c$ -splay* is an operation in which every number $x$ on the board is erased and replaced by the two numbers $cx$ and $1-c(1-x)$ . A *splay-sequence* $C = (c_1,c_2,c_3,c_4)$ is an application of a $c_i$ -splay for $i=1,2,3,4$ in that order, and its *power* is defined by $P(C) = c_1c_2c_3c_4$ .

Let $S$ be the set of splay-sequences which yield the numbers $\frac{1}{17}, \frac{2}{17}, \dots, \frac{16}{17}$ on the blackboard in some order. If $\sum_{C \in S} P(C) = \tfrac mn$ for relatively prime positive integers $m$ and $n$ , compute $100m+n$ .

*Proposed by Lewis Chen*
