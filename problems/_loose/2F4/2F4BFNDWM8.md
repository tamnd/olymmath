---
tag: 2F4BFNDWM8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h379402
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44037
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240310
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1995
    source: hf-ai-mo-aops
    label: 1995 Iran MO (2nd round)
---
Let $n \geq 0$ be an integer. Prove that
$$ \lceil \sqrt n +\sqrt{n+1}+\sqrt{n+2} \rceil = \lceil \sqrt{9n+8} \rceil$$
Where $\lceil x \rceil $ is the smallest integer which is greater or equal to $x.$
