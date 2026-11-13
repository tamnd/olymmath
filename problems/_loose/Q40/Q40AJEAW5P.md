---
tag: Q40AJEAW5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h585529
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11654
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2014
    source: hf-ai-mo-aops
    label: 2014 Online Math Open Problems
---
Let $f(x)$ be a polynomial with integer coefficients such that $f(15) f(21) f(35) - 10$ is divisible by $105$ . Given $f(-34) = 2014$ and $f(0) \ge 0$ , find the smallest possible value of $f(0)$ .

*Proposed by Michael Kural and Evan Chen*
