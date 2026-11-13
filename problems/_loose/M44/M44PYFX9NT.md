---
tag: M44PYFX9NT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h55864
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35789
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
Given an integer $k$ . $f(n)$ is defined on negative integer set and its values are integers. $f(n)$ satisfies $$ f(n)f(n+1)=(f(n)+n-k)^2, $$ for $n=-2,-3,\cdots$ . Find an expression of $f(n)$ .
