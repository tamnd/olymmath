---
tag: JDRZ2DJB3Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h370163
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44046
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240319
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1997
    source: hf-ai-mo-aops
    label: 1997 Iran MO (2nd round)
---
Let $x_1,x_2,x_3,x_4$ be positive reals such that $x_1x_2x_3x_4=1$ . Prove that:
$$ \sum_{i=1}^{4}{x_i^3}\geq\max\{ \sum_{i=1}^{4}{x_i},\sum_{i=1}^{4}{\frac{1}{x_i}} \}. $$
