---
tag: ZB3ZAP2N9W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h573860
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11557
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213514
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Define $H_n = 1+\frac{1}{2}+\cdots+\frac{1}{n}$ . Let the sum of all $H_n$ that are terminating in base 10 be $S$ . If $S = m/n$ where m and n are relatively prime positive integers, find $100m+n$ .

*Proposed by Lewis Chen*
