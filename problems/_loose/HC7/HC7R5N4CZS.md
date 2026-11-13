---
tag: HC7R5N4CZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 China Western Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h466254
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3335
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-wmo/2009
    source: hf-ai-mo-aops
    label: 2009 China Western Mathematical Olympiad
---
A total of $n$ people compete in a mathematical match which contains $15$ problems where $n>12$ . For each problem, $1$ point is given for a right answer and $0$ is given for a wrong answer. Analysing each possible situation, we find that if the sum of points every group of $12$ people get is no less than $36$ , then there are at least $3$ people that got the right answer of a certain problem, among the $n$ people. Find the least possible $n$ .
