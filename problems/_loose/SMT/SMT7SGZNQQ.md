---
tag: SMT7SGZNQQ
kind: problem
type: answer
answer: k = 8n \text{ where } \gcd(n, 5 \cdot 101 \cdot 503) = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that there exists some **positive** integer $k$ with $$\gcd(2012,2020)=\gcd(2012+k,2020)$$$$=\gcd(2012,2020+k)=\gcd(2012+k,2020+k).$$
