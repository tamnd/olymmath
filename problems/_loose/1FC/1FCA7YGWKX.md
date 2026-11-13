---
tag: 1FCA7YGWKX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252773
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Switzerland/train/0000.parquet#row=428
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ch-smo
    source: hf-mathnet
    label: Switzerland IMO Selection
---
Let $n$ be a positive integer. Prove that there exists a finite sequence $S$ consisting of only zeros and ones, satisfying the following property: for any positive integer $d \geq 2$, when $S$ is interpreted in base $d$, the resulting number is non-zero and divisible by $n$.
*Remark: The sequence $S=s_ks_{k-1} \cdots s_1s_0$ interpreted in base $d$ is the number $\sum_{i=0}^{k}s_id^i$*
