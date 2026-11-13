---
tag: SH4JPSFPH5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339705
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14549
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216343
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $A_1B_1C_1$ be a triangle with $A_1B_1 = 16, B_1C_1 = 14,$ and $C_1A_1 = 10$ . Given a positive integer $i$ and a triangle $A_iB_iC_i$ with circumcenter $O_i$ , define triangle $A_{i+1}B_{i+1}C_{i+1}$ in the following way:

(a) $A_{i+1}$ is on side $B_iC_i$ such that $C_iA_{i+1}=2B_iA_{i+1}$ .
(b) $B_{i+1}\neq C_i$ is the intersection of line $A_iC_i$ with the circumcircle of $O_iA_{i+1}C_i$ .
(c) $C_{i+1}\neq B_i$ is the intersection of line $A_iB_i$ with the circumcircle of $O_iA_{i+1}B_i$ .

Find $$ \left(\sum_{i = 1}^\infty [A_iB_iC_i] \right)^2. $$

Note: $[K]$ denotes the area of $K$ .

*Proposed by Yang Liu*
