---
tag: WV5E12VMSJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Ukraine National Mathematical  Olympiad
    url: https://artofproblemsolving.com/community/c6h3221575
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=63042
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254629
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2021
    source: hf-ai-mo-aops
    label: 2021 Ukraine National Mathematical  Olympiad
---
You are given $k$ positive integers $a_1, a_2, \ldots, a_k$ . Prove that there exists a positive integer $N$ , such that sums of digits of numbers $Na_1, Na_2, \ldots, Na_k$ differ in less than $\frac{2021}{2020}$ times. That is, if $S_{max}$ is the largest sum of digits of any of these numbers, and $S_{min}$ is the smallest, then $$ \frac{S_{max}}{S_{min}} < \frac{2021}{2020} $$ *Proposed by Arsenii Nikolaiev*
