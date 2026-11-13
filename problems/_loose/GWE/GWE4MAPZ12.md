---
tag: GWE4MAPZ12
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h75973
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48287
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2003
    source: hf-ai-mo-aops
    label: 2003 Moldova National Olympiad
---
Let $(F_n)_{n\in{N^*}}$ be the Fibonacci sequence defined by
$F_1=1$ , $F_2=1$ , $F_{n+1}=F_n+F_{n-1}$ for every $n\geq{2}$ . Find
the limit: $$ \lim_{n \to \infty}(\sum_{i=1}^n{\frac{F_i}{2^i}}) $$
