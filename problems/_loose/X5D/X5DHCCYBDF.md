---
tag: X5DHCCYBDF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h582278
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11575
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213532
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
Find the number of positive integers $n$ with exactly $1974$ factors such that no prime greater than $40$ divides $n$ , and $n$ ends in one of the digits $1$ , $3$ , $7$ , $9$ . (Note that $1974 = 2 \cdot 3 \cdot 7 \cdot 47$ .)

*Proposed by Yonah Borns-Weil*
