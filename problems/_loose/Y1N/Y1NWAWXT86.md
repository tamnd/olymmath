---
tag: Y1NWAWXT86
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h522310
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9950
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211946
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
For each positive integer $n$ , let $H_n = \frac{1}{1} + \frac{1}{2} + \cdots + \frac{1}{n}$ . If $$ \sum_{n=4}^{\infty} \frac{1}{nH_nH_{n-1}} = \frac{M}{N} $$ for relatively prime positive integers $M$ and $N$ , compute $100M+N$ .

*Based on a proposal by ssilwa*
