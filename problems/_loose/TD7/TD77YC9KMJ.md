---
tag: TD77YC9KMJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h461252
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8074
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2012
    source: hf-ai-mo-aops
    label: 2012 International Zhautykov Olympiad
---
Do there exist integers $m, n$ and a function $f\colon \mathbb R \to \mathbb R$ satisfying simultaneously the following two conditions? $\bullet$ i) $f(f(x))=2f(x)-x-2$ for any $x \in \mathbb R$ ; $\bullet$ ii) $m \leq n$ and $f(m)=n$ .
