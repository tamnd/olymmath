---
tag: HFPEDTDM1F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h78739
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29358
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229300
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2003
    source: hf-ai-mo-aops
    label: 2003 Tuymaada Olympiad
---
Find all continuous functions $f(x)$ defined for all $x>0$ such that for every $x$ , $y > 0$
$$ f\left(x+{1\over x}\right)+f\left(y+{1\over y}\right)= f\left(x+{1\over y}\right)+f\left(y+{1\over x}\right) . $$

*Proposed by F. Petrov*
