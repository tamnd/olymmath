---
tag: KB2EGYHY9A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h473480
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8682
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2012
    source: hf-ai-mo-aops
    label: 2012 Romania National Olympiad
---
Let $n$ and $m$ be two natural numbers, $m\ge n\ge 2$ . Find the number of injective functions

$$f\colon\{1,2,\ldots,n\}\to\{1,2,\ldots,m\}$$
such that there exists a unique number $i\in\{1,2,\ldots,n-1\}$ for which $f(i)>f(i+1) .$
