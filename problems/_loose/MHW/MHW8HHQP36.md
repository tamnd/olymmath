---
tag: MHW8HHQP36
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Tuymaada Olympiad
    url: https://artofproblemsolving.com/community/c6h146482
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29310
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tuymaada/2000
    source: hf-ai-mo-aops
    label: 2000 Tuymaada Olympiad
---
Let $d(n)$ denote the number of positive divisors of $n$ and let
$e(n)=\left[2000\over n\right]$ for positive integer $n$ . Prove that
$$d(1)+d(2)+\dots+d(2000)=e(1)+e(2)+\dots+e(2000).$$
