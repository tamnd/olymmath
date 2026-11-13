---
tag: F4TTAVF6E0
kind: problem
type: answer
answer: \sum_{i=1}^{k}\frac{1}{a_{i}}<\frac{3}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98718
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$3.43 \star \star$ Let $k$ integers
$$
1 \leqslant a_{1} < a_{2} < \cdots < a_{k} \leqslant n,
$$
if $k > \log_{2} n$, then
$$
\sum_{i=1}^{k} \frac{1}{a_{i}}<\frac{3}{2} .
$$
