---
tag: 1JAYWKXZP7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h548277
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9990
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211986
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2013
    source: hf-ai-mo-aops
    label: 2013 NIMO Problems
---
Find $100m+n$ if $m$ and $n$ are relatively prime positive integers such that $$ \sum_{\substack{i,j \ge 0 i+j \text{ odd}}} \frac{1}{2^i3^j} = \frac{m}{n}. $$*Proposed by Aaron Lin*
