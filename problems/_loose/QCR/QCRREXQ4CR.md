---
tag: QCRREXQ4CR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220670
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given sequence $\{a_n\}$ satisfying:
$$ a_{n+1} = \frac{ lcm(a_n,a_{n-1})}{\gcd(a_n, a_{n-1})} $$
It is given that $a_{209} =209$ and $a_{361} = 361$. Find all possible values of $a_{2020}$.
