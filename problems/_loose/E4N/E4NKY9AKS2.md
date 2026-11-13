---
tag: E4NKY9AKS2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1996 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h37608
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35705
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145479
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/1996
    source: hf-ai-mo-aops
    label: 1996 China Team Selection Test
---
Does there exist non-zero complex numbers $a, b, c$ and natural number $h$ such that if integers $k, l, m$ satisfy $|k| + |l| + |m| \geq 1996$ , then $|ka + lb + mc| > \frac {1}{h}$ is true?
