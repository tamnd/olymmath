---
tag: ZK1ZSGGBAA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h446945
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40542
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/2001
    source: hf-ai-mo-aops
    label: 2001 Greece National Olympiad
---
A function $f : \Bbb{N}_0 \to \Bbb{R}$ satisﬁes $f(1) = 3$ and $$f(m + n) + f(m - n) - m + n - 1 =\frac{f(2m) + f(2n)}{2},$$
for any non-negative integers $m$ and $n$ with $m \geq n.$ Find all such functions $f$ .
