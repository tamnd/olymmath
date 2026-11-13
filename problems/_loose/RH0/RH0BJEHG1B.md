---
tag: RH0BJEHG1B
kind: problem
type: answer
answer: g_{k}^{\}(1)=2^{k+1}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We know about the functions $g_{k}(x)$ that

$$
g_{1}(x)=\frac{x^{2}}{2-x}
$$

and

$$
g_{k+1}(x)=x \frac{g_{k}(x)}{2-g_{k}(x)} (k=1,2, \ldots)
$$

Determine the elements of the sequence $g_{k}^{\prime}(1)$ based on these.
