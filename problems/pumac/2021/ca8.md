---
tag: YBYMX2GF5G
kind: problem
appearances:
  - at: pumac/2021/ca8
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825143
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Physicists at Princeton are trying to analyze atom entanglement using the following experiment. Originally there is one atom in the space and it starts splitting according to the following procedure. If after $n$ minutes there are atoms $a_1, \dots, a_N$ , in the following minute every atom $a_i$ splits into four new atoms, $a_i^{(1)},a_i^{(2)},a_i^{(3)},a_i^{(4)}$ . Atoms $a_i^{(j)}$ and $a_k^{(j)}$ are entangled if and only the atoms $a_i$ and $a_k$ were entangled after $n$ minutes. Moreover, atoms $a_i^{(j)}$ and $a_k^{(j+1)}$ are entangled for all $1 \le i$ , $k \le N$ and $j = 1$ , $2$ , $3$ . Therefore, after one minute there is $4$ atoms, after two minutes there are $16$ atoms and so on.

Physicists are now interested in the number of unordered quadruplets of atoms $\{b_1, b_2, b_3, b_4\}$ among which there is an odd number of entanglements. What is the number of such quadruplets after $3$ minutes?

*Remark*. Note that atom entanglement is not transitive. In other words, if atoms $a_i$ , $a_j$ are entangled and if $a_j$ , $a_k$ are entangled, this does not necessarily mean that $a_i$ and $a_k$ are entangled.
