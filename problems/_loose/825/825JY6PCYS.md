---
tag: 825JY6PCYS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Taiwan TST Round 3
    url: https://artofproblemsolving.com/community/c6h2546942
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20577
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2021
    source: hf-ai-mo-aops
    label: 2021 Taiwan TST Round 3
---
Let $n$ and $k$ be positive integers, with $n\geq k+1$ . There are $n$ countries on a planet, with some pairs of countries establishing diplomatic relations between them, such that each country has diplomatic relations with at least $k$ other countries. An evil villain wants to divide the countries, so he executes the following plan:

(1) First, he selects two countries $A$ and $B$ , and let them lead two allies, $\mathcal{A}$ and $\mathcal{B}$ , respectively (so that $A\in \mathcal{A}$ and $B\in\mathcal{B}$ ).

(2) Each other country individually decides wether it wants to join ally $\mathcal{A}$ or $\mathcal{B}$ .

(3) After all countries made their decisions, for any two countries with $X\in\mathcal{A}$ and $Y\in\mathcal{B}$ , eliminate any diplomatic relations between them.

Prove that, regardless of the initial diplomatic relations among the countries, the villain can always select two countries $A$ and $B$ so that, no matter how the countries choose their allies, there are at least $k$ diplomatic relations eliminated.

*Proposed by YaWNeeT.*
