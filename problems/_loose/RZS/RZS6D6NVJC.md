---
tag: RZS6D6NVJC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h122944
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29339
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2002
    source: hf-ai-mo-aops
    label: 2002 Tuymaada Olympiad
---
A positive integer $c$ is given. The sequence $\{p_{k}\}$ is constructed by the following rule: $p_{1}$ is arbitrary prime and for $k\geq 1$ the number $p_{k+1}$ is any prime divisor of $p_{k}+c$ not present among the numbers $p_{1}$ , $p_{2}$ , $\dots$ , $p_{k}$ . Prove that the sequence $\{p_{k}\}$ cannot be infinite.

*Proposed by A. Golovanov*
