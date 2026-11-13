---
tag: GDRCF4AD0J
kind: problem
type: answer
answer: f(x) = a / (1 - x^2) for any real constant a
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=7
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam VIETNAMESE MATHEMATICAL OLYMPIAD
---
Consider the function $g(x) = \frac{2x}{1+x^2}$. Find all function $f(x)$ defined and continuous on the interval $(-1; 1)$ which satisfy the condition:
$$
(1 - x^2)f(g(x)) = (1 + x^2)^2 f(x)
$$
for every $x \in (-1; 1)$.
