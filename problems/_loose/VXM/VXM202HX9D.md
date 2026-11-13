---
tag: VXM202HX9D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2996204
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29822
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2017
    source: hf-ai-mo-aops
    label: 2017 Argentina National Olympiad
---
In a row there are $51$ written positive integers. Their sum is $100$ . An integer is *representable* if it can be expressed as the sum of several consecutive numbers in a row of $51$ integers. Show that for every $k$ , with $1\le k \le 100$ , one of the numbers $k$ and $100-k$ is representable.
