---
tag: 1FKANRD7B4
kind: problem
type: answer
answer: 'Example: m = 4, n = 2; Conclusion: m is a perfect square.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 67th Romanian Mathematical Olympiad
---
The positive integers $m$ and $n$ are such that $m^{2016} + m + n^2$ is divisible with $mn$.
a) Give an example of such $m$ and $n$, with $m > n$.
b) Prove that $m$ is a perfect square.
