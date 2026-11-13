---
tag: 6Z1VVX4F9V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Slovenia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2518728
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59562
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251695
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Slovenia National Olympiad
---
The sequence $(a_n)$ is given by $a_1=2$ , $a_2=500$ , $a_3=2000$ and $$ \frac{a_{n+2}+a_{n+1}}{a_{n+1}+a_{n-1}}=\frac{a_{n+1}}{a_{n-1}} \text{for }n\ge2 $$ Prove that all terms of this sequence are positive integers and that $a_{2000}$ is divisible by $2^{2000}$ .
