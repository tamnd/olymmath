---
tag: CXQDEKKMPR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Switzerland - Final Round
    url: https://artofproblemsolving.com/community/c6h2994753
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=60534
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo/2012
    source: hf-ai-mo-aops
    label: 2012 Switzerland - Final Round
---
Let $a, b, c > 0$ be real numbers with $abc = 1$ . Show $$ 1 + ab + bc + ca \ge \min \left\{ \frac{(a + b)^2}{ab} , \frac{(b+c)^2}{bc} , \frac{(c + a)^2}{ca}\right\}. $$ When does equality holds?
