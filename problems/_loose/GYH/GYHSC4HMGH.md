---
tag: GYHSC4HMGH
kind: problem
type: answer
answer: \frac{(2T-)}{T^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32291
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A signal detector receives signals from two devices, and the arrival of each signal is equally likely at any moment within a time interval of duration $T$. The moments of signal arrival are independent of each other. The detector triggers if the difference between the moments of signal arrival is less than $t(t<T)$. Find the probability that the detector triggers within the time $T$, if each device sends one signal.
