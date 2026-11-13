---
tag: 3JF7TSY3BZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1164278
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78540
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
For any positive integer $n$ , define a function $f$ by $$f(n)=2n+1-2^{\lfloor\log_2n\rfloor+1}.$$ Let $f^m$ denote the function $f$ applied $m$ times.. Determine the number of integers $n$ between $1$ and $65535$ inclusive such that $f^n(n)=f^{2015}(2015).$ *Proposed by Yannick Yao*
