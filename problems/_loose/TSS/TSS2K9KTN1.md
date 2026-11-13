---
tag: TSS2K9KTN1
kind: problem
type: answer
answer: n=3k+1,k=0,1,2,\cdots
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96855
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any natural number $n$, the sum $\sum_{k=0}^{n} 2^{3 k} C_{2 n+1}^{2 k+1}$ is not divisible by 210, and find all positive integers that make the sum $\sum_{k=0}^{n} 2^{3 k} C_{2 n+1}^{2 k+1}$ divisible by 11.
Note This problem is adapted from the 3rd question of the 16th IMO, which only required proving that $\sum_{k=0}^{n} 2^{3 k} C_{2 n+1}^{2 k+1}$ is not divisible by 5.
