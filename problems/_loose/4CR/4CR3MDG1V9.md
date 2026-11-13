---
tag: 4CR3MDG1V9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Abels Math Contest (Norwegian MO) Final
    url: https://artofproblemsolving.com/community/c6h1910378
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3066
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/2009
    source: hf-ai-mo-aops
    label: 2009 Abels Math Contest (Norwegian MO) Final
---
Let $x = 1 - 2^{-2009}$ . Show that $x + x^2 + x^4 + x^8 +... + x^{2^m}< 2010$ for all positive integers $m$ .
