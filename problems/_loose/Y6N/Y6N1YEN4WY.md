---
tag: Y6N1YEN4WY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h150772
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44029
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1994
    source: hf-ai-mo-aops
    label: 1994 Iran MO (2nd round)
---
Find all functions $ f: \mathbb{Z}\setminus\{0\}\to \mathbb{Q}$ such that for all $ x,y \in \mathbb{Z}\setminus\{0\}$ :
$$ f \left( \frac{x+y}{3}\right) =\frac{f(x)+f(y)}{2}, x, y \in \mathbb{Z}\setminus\{0\}$$
