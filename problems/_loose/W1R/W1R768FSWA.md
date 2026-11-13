---
tag: W1R768FSWA
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209482
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a function $f_n(x)\ (n=0,\ 1,\ 2,\ \cdots)$ by

$$f_0(x)=\sin x,\ f_{n+1}(x)=\int_0^{\frac{\pi}{2}} f_n\prime (t)\sin (x+t)dt.$$

(1) Let $f_n(x)=a_n\sin x+b_n\cos x.$ Express $a_{n+1},\ b_{n+1}$ in terms of $a_n,\ b_n.$

(2) Find $\sum_{n=0}^{\infty} f_n\left(\frac{\pi}{4}\right).$
