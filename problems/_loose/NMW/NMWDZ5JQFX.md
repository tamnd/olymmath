---
tag: NMWDZ5JQFX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Spain Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h362294
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5711
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: es-ome/2010
    source: hf-ai-mo-aops
    label: 2010 Spain Mathematical Olympiad
---
Let $a,b,c$ be three positive real numbers. Show that
$$ \frac {a+b+3c}{3a+3b+2c}+\frac {a+3b+c}{3a+2b+3c}+\frac {3a+b+c}{2a+3b+3c} \ge \frac {15}{8}$$
