---
tag: AWB47QAEFH
kind: problem
type: answer
answer: e^{1/2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241955
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f_n (x)\ (n=1,2,\cdots)$ is defined as follows.

$$f_1 (x)=x,\ f_{n+1}(x)=2x^{n+1}-x^n+\frac{1}{2}\int_0^1 f_n(t)\ dt\ \ (n=1,2,\cdots)$$

Evaluate

$$\lim_{n\to\infty} f_n \left(1+\frac{1}{2n}\right)$$
