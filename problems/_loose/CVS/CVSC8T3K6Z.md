---
tag: CVSC8T3K6Z
kind: problem
type: answer
answer: \frac{\ln 2}{2T} \int_0^T f(t) \, dt
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246974
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ f:\mathbb{R}\longrightarrow\mathbb{R} $ be a countinuous and periodic function, of period $ T. $ If $ F $ is a primitive of $ f, $ show that:

**a)** the function $ G:\mathbb{R}\longrightarrow\mathbb{R}, G(x)=F(x)-\frac{x}{T}\int_0^T f(t)dt $ is periodic.

**b)** $ \lim_{n\to\infty}\sum_{i=1}^n\frac{F(i)}{n^2+i^2} =\frac{\ln 2}{2T}\int_0^T f(x)dx. $
