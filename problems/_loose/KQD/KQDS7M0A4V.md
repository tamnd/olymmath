---
tag: KQDS7M0A4V
kind: problem
type: answer
answer: P(I) = \left[ \frac{1}{2} \sinh\left(\frac{\pi}{2}\right), \frac{1}{4} e^{\frac{\pi}{2}} \right]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241906
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=t\sin x+(1-t)\cos x\ (0\leqq t\leqq 1)$.

Find the maximum and minimum value of the following $P(t)$.

$$P(t)=\left\{\int_0^{\frac{\pi}{2}} e^x f(x) dx \right\}\left\{\int_0^{\frac{\pi}{2}} e^{-x} f(x)dx \right\}$$
