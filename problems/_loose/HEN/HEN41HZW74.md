---
tag: HEN41HZW74
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Singapore Senior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2051723
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59349
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251486
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/1998
    source: hf-ai-mo-aops
    label: 1998 Singapore Senior Math Olympiad
---
Prove that $\sqrt1+ \sqrt2+\sqrt3+...+ \sqrt{n^2-1}+\sqrt{n^2} \ge \frac{2n^3+n}{3}$ for any positive integer $n$ .
