---
tag: B0KQFCKEZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h3034699
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1191
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204847
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 1
---
Let $k$ be a positive integer, and set $n=2^k$ , $N=\{1, 2, \cdots, n\}$ . For any bijective function $f:N\rightarrow N$ , if a set $A\subset N$ contains an element $a\in A$ such that $\{a, f(a), f(f(a)), \cdots\} = A$ , then we call $A$ as a cycle of $f$ . Prove that: among all bijective functions $f:N\rightarrow N$ , at least $\frac{n!}{2}$ of them have number of cycles less than or equal to $2k-1$ .
*Note: A function is bijective if and only if it is injective and surjective; in other words, it is 1-1 and onto.*

*Proposed by CSJL*
