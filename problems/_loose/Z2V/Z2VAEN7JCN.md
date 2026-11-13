---
tag: Z2VAEN7JCN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541579
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78621
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267468
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
Let $p = 2017$ . If $A$ is an $n\times n$ matrix composed of residues $\pmod{p}$ such that $\det A\not\equiv 0\pmod{p}$ then let $\text{ord}(A)$ be the minimum integer $d > 0$ such that $A^d\equiv I\pmod{p}$ , where $I$ is the $n\times n$ identity matrix. Let the maximum such order be $a_n$ for every positive integer $n$ . Compute the sum of the digits when $\sum_{k = 1}^{p + 1} a_k$ is expressed in base $p$ .

*Proposed by Ashwin Sah*
