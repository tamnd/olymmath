---
tag: 26ZGJNNGM9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 South Africa National Olympiad
    url: https://artofproblemsolving.com/community/c6h3489203
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2162
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/South_Africa/train/0000.parquet#row=298
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
Let $f:\mathbb{N}\to\mathbb{N}_0$ be a function that satisfies
$$ f(mn) = mf(n) + nf(m)$$
for all positive integers $m,n$ and $f(2024)=10120$ .

Prove that there are two integers $m,n$ with $m\ne n$ such that $f(m)=f(n)$ .
