---
tag: GQSABCWQB3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541550
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78597
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267444
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
Let $a,b,c$ be real nonzero numbers such that $a+b+c=12$ and $$\frac{1}{a}+\frac{1}{b}+\frac{1}{c}+\frac{1}{abc}=1.$$ Compute the largest possible value of $abc-\left(a+2b-3c\right)$ .

*Proposed by Tristan Shin*
