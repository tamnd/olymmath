---
tag: C4J25QS5VD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 24th Philippine MO Qualifying Stage
    url: https://artofproblemsolving.com/community/c6h2790740
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50825
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154757
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Philippines/train/0001.parquet#row=314
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 24th Philippine MO Qualifying Stage
  - at: ph-pmo
    source: hf-mathnet
    label: Philippines 24th Philippine Mathematical Olympiad
---
For a real number $x$ , let $\lfloor x \rfloor$ denote the greatest integer not exceeding $x$ . Consider the function $$ f(x,y) = \sqrt{M(M+1)}\left(|x-m|+|y-m|\right), $$ where $M = \text{max} (\lfloor x \rfloor, \lfloor y \rfloor)$ and $m = \text{min} (\lfloor x \rfloor, \lfloor y \rfloor)$ . The set of all real numbers $(x,y)$ such that $2 \leq x, y \leq 2022$ and $f(x,y) \leq 2$ can be expressed as a finite union of disjoint regions in the plane. The sum of the areas of these regions can be expressed as a fraction $a/b$ in lowest terms. What is the value of $a+b?$
