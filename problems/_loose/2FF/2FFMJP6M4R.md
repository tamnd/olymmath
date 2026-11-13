---
tag: 2FFMJP6M4R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h482056
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8405
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210469
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2012
    source: hf-ai-mo-aops
    label: 2012 Olympic Revenge
---
Let $x_1,x_2,\ldots ,x_n$ positive real numbers. Prove that:
$$\sum_{cyc} \frac{1}{x_i^3+x_{i-1}x_ix_{i+1}} \le \sum_{cyc} \frac{1}{x_ix_{i+1}(x_i+x_{i+1})}$$
