---
tag: WAB76YN0BN
kind: problem
type: answer
answer: \frac{\pi}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169098
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will prove that for any integer $n \geq 1$,

$$
\frac{1}{n}\left(\cos ^{2} \frac{2 \pi}{2 n+1}+\cos ^{2} \frac{4 \pi}{2 n+1}+\ldots+\cos ^{2} \frac{2 n \pi}{2 n+1}\right)=\frac{2 n-1}{4 n}
$$

Based on this, what can we say about the integral $\int_{0}^{\pi} \cos ^{2} x d x$?
