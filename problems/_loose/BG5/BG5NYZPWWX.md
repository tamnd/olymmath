---
tag: BG5NYZPWWX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163110
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2016
    source: hf-mathnet
    label: Slovenia Slovenija 2016
---
For triangle $A B C$, it holds that $|A B|=2|A C|$, and $D$ is a point on the ray $C A$ such that $|C D|=$ $3|A C|$. Prove that the perpendicular from point $C$ to line $B D$ bisects segment $A B$.
