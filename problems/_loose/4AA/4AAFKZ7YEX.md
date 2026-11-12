---
tag: 4AAFKZ7YEX
kind: problem
type: answer
answer: 2\pi
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the maximum

$$
|(K \varphi, \varphi)|=\left|\int_{0}^{\pi} \int_{0}^{\pi} K(x, t) \varphi(x) \varphi(t) d x d t\right|
$$

under the condition

$$
(\varphi, \varphi)=\int_{0}^{\pi} \varphi^{2}(x) d x=1
$$

if

$$
K(x, t)=\cos x \cos 2 t+\cos t \cos 2 x+1 .
$$
