---
tag: DSBHZEHHCD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=60281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that from the equalities

$$
\frac{a}{\sin \alpha}=\frac{b}{\sin \beta}=\frac{c}{\sin \gamma}, \alpha+\beta+\gamma=\pi
$$

it follows:

$$
\begin{aligned}
& a=b \cos \gamma+c \cos \beta \\
& b=c \cos \alpha+a \cos \gamma \\
& c=a \cos \beta+b \cos \alpha
\end{aligned}
$$
