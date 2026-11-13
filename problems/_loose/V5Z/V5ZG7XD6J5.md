---
tag: V5ZG7XD6J5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 24th Philippine MO Qualifying Stage
    url: https://artofproblemsolving.com/community/c6h3502584
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50849
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=154756
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ph-pmo
    source: hf-ai-mo-aops
    label: 24th Philippine MO Qualifying Stage
---
Find the sum of all positive integers $n$ , $1\leq n\leq 5000$ , for which $$ n^2+2475n+2454+(-1)^n $$ is divisible by $2477$ . (Note that $2477$ is a prime number.)
