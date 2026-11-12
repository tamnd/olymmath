---
tag: FD7VE54V8R
kind: problem
type: answer
answer: \log_{+b}+\log_{-b}=2\log_{+b}\cdot\log_{-b}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42586
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that if $a^{2}+b^{2}=c^{2}$, then

$$
\log _{c+b} a+\log _{c-b} a=2 \log _{c+b} a \cdot \log _{c-b} a
$$

given

$$
a>0, c>0, b>0, c>b
$$
