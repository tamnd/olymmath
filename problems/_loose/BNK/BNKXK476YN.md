---
tag: BNKXK476YN
kind: problem
type: answer
answer: \frac{(+1)(+2)(+3)\ldots(n++1)}{n+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=174035
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that

$$
\binom{n}{k}+\binom{n+1}{k}+\binom{n+2}{k}+\ldots+\binom{n+m}{k}=\binom{n+m+1}{k+1}-\binom{n}{k+1}
$$

and based on this, sum the following series:

$$
1 \cdot 2 \cdot 3 \ldots n+2 \cdot 3 \cdot 4 \ldots(n+1)+\ldots+(m+1)(m+2)(m+3) \ldots(m+n)
$$
