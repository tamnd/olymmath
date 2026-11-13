---
tag: ACRDE6Y9QB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h386821
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6599
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2011
    source: hf-ai-mo-aops
    label: 2011 International Zhautykov Olympiad
---
Let $\mathbb{N}$ denote the set of all positive integers. An ordered pair $(a;b)$ of numbers $a,b\in\mathbb{N}$ is called *interesting*, if for any $n\in\mathbb{N}$ there exists $k\in\mathbb{N}$ such that the number $a^k+b$ is divisible by $2^n$ . Find all *interesting* ordered pairs of numbers.
