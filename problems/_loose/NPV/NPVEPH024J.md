---
tag: NPVEPH024J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h3271619
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2180
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2024
    source: hf-ai-mo-aops
    label: 2024 Taiwan TST Round 1
---
A $k$ -set is a set with exactly $k$ elements. For a $6$ -set $A$ and any collection $\mathcal{F}$ of $4$ -sets, we say that $A$ is *$\mathcal{F}$ -good* if there are exactly three elements $B_1, B_2, B_3$ in $\mathcal{F}$ that are subsets of $A$ , and they furthermore satisfy $$ (A \backslash B_1) \cup (A \backslash B_2) \cup (A \backslash B_3) = A. $$ Find all $n \geq 6$ so that there exists a collection $\mathcal{F}$ of $4$ -subsets of $\{1, 2, \ldots , n\}$ such that every $6$ -set $A \subseteq \{1, 2, \ldots , n\}$ is $\mathcal{F}$ -good.
*Proposed by usjl*
