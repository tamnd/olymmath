---
tag: 6W8NKXFMZY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1981 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h366960
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25202
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225950
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1981
    source: hf-ai-mo-aops
    label: 1981 IMO Shortlist
---
A sequence of real numbers $u_1, u_2, u_3, \dots$ is determined by $u_1$ and the following recurrence relation for $n \geq 1$ :
$$4u_{n+1} = \sqrt[3]{ 64u_n + 15.}$$
Describe, with proof, the behavior of $u_n$ as $n \to \infty.$
