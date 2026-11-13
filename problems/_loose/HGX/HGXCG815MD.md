---
tag: HGXCG815MD
kind: problem
type: answer
answer: F(x)=\frac{\sqrt{2}}{2}x-\frac{\sqrt{2}}{4}\ln(e^{2x}+\sin^{2}x)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178684
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the primitive $F: \mathbb{R} \longrightarrow \mathbb{R}$ of the function $f: \mathbb{R} \longrightarrow \mathbb{R}$

$$
f(x)=\frac{\sin x \cdot \sin \left(x-\frac{\pi}{4}\right)}{e^{2 x}+\sin ^{2} x}
$$

for which $F(0)=0$.
