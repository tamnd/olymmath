---
tag: X3AEB1VR7C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751567
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69832
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260768
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2014
    source: hf-ai-mo-aops
    label: 2014 BMT Spring
---
Suppose that positive integers $a_1,a_2,\ldots,a_{2014}$ (not necessarily distinct) satisfy the condition that: $\frac{a_1}{a_2},\frac{a_2}{a_3},\ldots,\frac{a_{2013}}{a_{2014}}$ are pairwise distinct. What is the minimal possible number of distinct numbers in $\{a_1,a_2,\ldots,a_{2014}\}$ ?
