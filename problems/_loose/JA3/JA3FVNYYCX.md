---
tag: JA3FVNYYCX
kind: problem
type: answer
answer: S_{\}=5(T_{1}+T_{2})+4(T_{3}+T_{4})+3(T_{5}+T_{6})+2(T_{7}+T_{8})+(T_{9}+T_{10})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93618
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose ten people each carry a bucket to a water tap to fill it. Let the time required for the water tap to fill the bucket of the $i$-th person $(i=1,2, \cdots, 10)$ be $T_{i}$ minutes, assuming these $T_{i}$ are all different. Ask:
（1）When only one water tap is available, how should the order of these ten people be arranged to minimize their total waiting time (including the time each person spends filling their own bucket)? What is this time? (You must prove your argument)
（2）When two water taps are available, how should the order of these ten people be arranged to minimize their total waiting time? What is this time? (You must prove your argument)
