---
tag: DYZ7AQR4F4
kind: problem
type: answer
answer: (X())^{n}=X((k+1)^{n-1}(+\frac{1}{k+1})^{n}-\frac{1}{k+1})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179764
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the matrix $X(a)=\left(\begin{array}{cc}1+k a & k a \\ a & 1+a\end{array}\right), a \in C^{*}, k \in N^{*}$. Calculate $(X(a))^{n}, n \in N^{*}$ prof. Dicu Florentina, Rm. Vâlcea
