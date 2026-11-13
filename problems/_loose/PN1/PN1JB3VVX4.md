---
tag: PN1JB3VVX4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Taiwan TST Round  3
    url: https://artofproblemsolving.com/community/c6h2049537
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61196
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2018
    source: hf-ai-mo-aops
    label: 2018 Taiwan TST Round  3
---
Given a connected graph with $n$ edges, where there are no parallel edges. For any two cycles $C,C'$ in the graph, define its *outer cycle* to be
$$C*C'=\{x|x\in (C-C')\cup (C'-C)\}.$$
(1) Let $r$ be the largest postive integer so that we can choose $r$ cycles $C_1,C_2,\ldots,C_r$ and for all $1\leq k\leq r$ and $1\leq i$ , $j_1,j_2,\ldots,j_k\leq r$ , we have
$$C_i\neq C_{j_1}*C_{j_2}*\cdots*C_{j_k}.$$
(Remark: There should have been an extra condition that either $j_1\neq i$ or $k\neq 1$ )
(2) Let $s$ be the largest positive integer so that we can choose $s$ edges that do not form a cycle.
(Remark: A more precise way of saying this is that any nonempty subset of these $s$ edges does not form a cycle)
Show that $r+s=n$ .

Note: A cycle is a set of edges of the form $\{A_iA_{i+1},1\leq i\leq n\}$ where $n\geq 3$ , $A_1,A_2,\ldots,A_n$ are distinct vertices, and $A_{n+1}=A_1$ .
