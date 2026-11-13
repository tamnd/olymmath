---
tag: BZQYVER9PJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h502886
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8369
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210433
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2012
    source: hf-ai-mo-aops
    label: 2012 NIMO Problems
---
Compute the number of sequences of real numbers $a_1, a_2, a_3, \dots, a_{16}$ satisfying the condition that for every positive integer $n$ ,
$$
a_1^n + a_2^{2n} + \dots + a_{16}^{16n} = \left \{ \begin{array}{ll} 10^{n+1} + 10^n + 1 & \text{for even } n 10^n - 1 & \text{for odd } n \end{array} \right. .
$$*Proposed by Evan Chen*
