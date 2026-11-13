---
tag: 6F9W1ZV6YW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h88313
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54571
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248072
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Romania Team Selection Test
---
Let $r$ and $s$ be two rational numbers. Find all functions $f: \mathbb Q \to \mathbb Q$ such that for all $x,y\in\mathbb Q$ we have $$ f(x+f(y)) = f(x+r)+y+s. $$
