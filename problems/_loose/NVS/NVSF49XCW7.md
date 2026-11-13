---
tag: NVSF49XCW7
kind: problem
type: answer
answer: (k)=\frac{1}{3k^2-3k+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189588
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a triangle $ABC$ and a real number $k$. Let the points $P, Q, R$ be defined by the relations

$$
\overrightarrow{AP}=k \overrightarrow{AB}, \overrightarrow{BQ}=k \overrightarrow{BC}, \overrightarrow{CR}=k \overrightarrow{CA}.
$$

Prove that

$$
AB^2 + BC^2 + CA^2 = g(k) \left(PQ^2 + QR^2 + RS^2\right)
$$

where $g$ is some function of $k$. Determine and analyze this function.
