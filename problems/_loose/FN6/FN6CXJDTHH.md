---
tag: FN6CXJDTHH
kind: problem
type: answer
answer: \frac{\pi}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177969
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence with the general term

$$
I_{n}=\int_{0}^{\frac{\pi}{4}} e^{n x}\left(\tan^{n-1} x+\tan^{n} x+\tan^{n+1} x\right) d x, n \geq 1
$$

Calculate $\lim _{n \rightarrow \infty} n\left(\sqrt[n^{2}]{n I_{n}}-1\right)$.
