---
tag: YHTT5FCC5W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2042275
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59406
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251543
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2016
    source: hf-ai-mo-aops
    label: 2016 Singapore Senior Math Olympiad
---
For any integer $n \ge 1$ , show that $$ \sum_{k=1}^{n} \frac{2^k}{\sqrt{k+0.5}} \le 2^{n+1}\sqrt{n+1}-\frac{4n^{3/2}}{3} $$
