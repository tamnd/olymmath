---
tag: WEF40KPM7N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of sets of integers $\{a_1, a_2, \dots, a_{2100}\}\subset [0, 2099]^{2100}$ satisfying the following condition:
There exists set of integers $\{b_1,b_2,\dots,b_{2100}\}$ such that for any integers $1\leq i\leq 2100$,
$$a_i \equiv \sum_{\substack{\gcd(j-i,2100)=1 \\ 1\leq j\leq 2100}}b_j\ (\bmod\ 2100).$$
