---
tag: 13SA7BFYH6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 China Western Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h237273
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36544
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-wmo/2008
    source: hf-ai-mo-aops
    label: 2008 China Western Mathematical Olympiad
---
Let P be an interior point of a regular n-gon $ A_1 A_2 ...A_n$ , the lines $ A_i P$ meet the regular n-gon at another point $ B_i$ , where $ i=1,2,...,n$ . Prove that sums of all $ PA_i\geq$ sum of all $ PB_i$ .
