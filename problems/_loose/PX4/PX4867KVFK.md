---
tag: PX4867KVFK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h2919884
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44445
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240719
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2022
    source: hf-ai-mo-aops
    label: 2022 Iran MO (3rd Round)
---
Prove that for natural number $n$ it's possible to find complex numbers $\omega_1,\omega_2,\cdots,\omega_n$ on the unit circle that $$ \left\lvert\sum_{j=1}^{n}\omega_j\right\rvert=\left\lvert\sum_{j=1}^{n}\omega_j^2\right\rvert=n-1 $$ iff $n=2$ occurs.
