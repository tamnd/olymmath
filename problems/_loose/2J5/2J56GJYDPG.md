---
tag: 2J56GJYDPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Abels Math Contest (Norwegian MO) Final
    url: https://artofproblemsolving.com/community/c6h1909182
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12134
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214035
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2015
    source: hf-ai-mo-aops
    label: 2015 Abels Math Contest (Norwegian MO) Final
---
Find all functions $f : R \to R$ such that $x^2f(yf(x))= y^2f(x)f(f(x))$ for all real numbers $x$ and $y$ .
