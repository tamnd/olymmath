---
tag: C2WWA3X77A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h3041323
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70844
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261951
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2023
    source: hf-ai-mo-aops
    label: 2023 CMIMC Team
---
Consider the set of all permutations, $\mathcal{P}$ , of $\{1,2,\ldots,2022\}$ . For permutation $P\in \mathcal{P}$ , let $P_1$ denote the first element in $P$ . Let $\text{sgn}(P)$ denote the sign of the permutation. Compute the following number modulo 1000: $$ \sum_{P\in\mathcal{P}}\dfrac{P_1\cdot\text{sgn}(P)^{P_1}}{2020!}. $$ (The *sign* of a permutation $P$ is $(-1)^k$ , where $k$ is the minimum number of two-element swaps needed to reach that permutation).

*Proposed by Nairit Sarkar*
