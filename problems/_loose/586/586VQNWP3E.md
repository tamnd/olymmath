---
tag: 586VQNWP3E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Singapore Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2042421
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59236
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251376
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=51
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2015
    source: hf-ai-mo-aops
    label: 2015 Singapore Junior Math Olympiad
  - at: sg-smo/2015
    source: hf-mathnet
    label: Singapore Singapur 2015
---
Let $A$ be a set of numbers chosen from $1,2,..., 2015$ with the property that any two distinct numbers, say $x$ and $y$ , in $A$ determine a unique isosceles triangle (which is non equilateral) whose sides are of length $x$ or $y$ . What is the largest possible size of $A$ ?
