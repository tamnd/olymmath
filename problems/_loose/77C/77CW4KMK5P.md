---
tag: 77CW4KMK5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1956 Moscow Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1899570
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=56830
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249727
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-moscow/1956
    source: hf-ai-mo-aops
    label: 1956 Moscow Mathematical Olympiad
---
Given three numbers $x, y, z$ denote the absolute values of the differences of each pair by $x_1,y_1, z_1$ . From $x_1, y_1, z_1$ form in the same fashion the numbers $x_2, y_2, z_2$ , etc. It is known that $x_n = x,y_n = y, z_n = z$ for some $n$ . Find $y$ and $z$ if $x = 1$ .
