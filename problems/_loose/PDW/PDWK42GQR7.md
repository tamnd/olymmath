---
tag: PDWK42GQR7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1,a_2, \dots a_n$ be positive real numbers. Define $b_1,b_2, \dots b_n$ as follows.
\begin{align*}
b_1&=a_1 \\
b_2&=max(a_1,a_2)\\
b_i&=max(b_{i-1},b_{i-2}+a_i) \text{ for } i=3,4 \dots n
\end{align*}
Also define $c_1,c_2 \dots c_n$ as follows.
\begin{align*}
c_n&=a_n \\
c_{n-1}&=max(a_n,a_{n-1})\\
c_i&=max(c_{i+1},c_{i+2}+a_i) \text{ for } i=n-2,n-3 \dots 1
\end{align*}
Prove that $b_n=c_1$.\\
