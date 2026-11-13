---
tag: NVWNEWSG57
kind: problem
type: answer
answer: 2 \sqrt{\frac{2}{2 + \pi}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the value of $ t$ such that ${ \frac{\int_0^{\frac{\pi}{2}}(\sin x+t\cos x)dx}{\sqrt{\int_0^{\frac{\pi}{2}} (\sin x+t\cos x)^2dx}}}$ is maximized.
