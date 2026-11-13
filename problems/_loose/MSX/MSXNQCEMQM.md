---
tag: MSXNQCEMQM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h2072517
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32864
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231911
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2003
    source: hf-ai-mo-aops
    label: 2003 Olympic Revenge
---
Find all functions $f:R^{*} \rightarrow R$ such that $f(x)\not = x$ and
$$ f(y(f(x)-x))=\frac{f(x)}{y}-\frac{f(y)}{x} $$ for any $x,y \not = 0$ .
