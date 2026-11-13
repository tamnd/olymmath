---
tag: A6D0NGVBGE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h457745
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8980
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211039
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2012
    source: hf-ai-mo-aops
    label: 2012 Vietnam National Olympiad
---
Find all $f:\mathbb{R} \to \mathbb{R}$ such that:
(a) For every real number $a$ there exist real number $b$ : $f(b)=a$ (b) If $x>y$ then $f(x)>f(y)$ (c) $f(f(x))=f(x)+12x.$
