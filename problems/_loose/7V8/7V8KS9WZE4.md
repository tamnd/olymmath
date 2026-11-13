---
tag: 7V8KS9WZE4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 South Africa National Olympiad
    url: https://artofproblemsolving.com/community/c6h3489201
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2160
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: za-samo/2024
    source: hf-ai-mo-aops
    label: 2024 South Africa National Olympiad
  - at: za-samo
    source: hf-mathnet
    label: South Africa The South African Mathematical Olympiad Third Round
---
Find all functions $f$ from integers to integers such that
$$ f(m+n) + f(m-n) - 2f(m) = 6mn^2$$
for all integers $m$ and $n$ .
